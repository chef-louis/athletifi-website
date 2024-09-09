import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/common/Header';
import { NotificationPreferences, UserData } from '@/types/User.type';
import { useRouter } from 'next/navigation';
import { signOut } from 'aws-amplify/auth';

const mockRouter = {
  push: jest.fn(),
  refresh: jest.fn(),
};

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => mockRouter),
}));

jest.mock('aws-amplify/auth', () => ({
  signOut: jest.fn(),
}));

jest.mock('aws-amplify/utils', () => ({
  Hub: {
    listen: jest.fn().mockReturnValue(() => {}),
  },
}));

jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href} onClick={() => mockRouter.push(href)}>{children}</a>
  );
});

describe('Header Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockUserData: UserData = {
    amplify_id: '123',
    name: 'John Doe',
    email: 'john.doe@example.com',
    init_notifications: true,
    notifications: {} as NotificationPreferences,
    user_delete_status: null,
    owned_cards: [],
    guest_cards: [],
    invites: [],
  };

  it('renders the header with correct links', () => {
    render(<Header userData={null} />);

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about us/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact us/i })).toBeInTheDocument();
  });

  it('navigates to the correct page when a link is clicked', () => {
    render(<Header userData={null} />);

    const aboutUsLink = screen.getByRole('link', { name: /about us/i });
    fireEvent.click(aboutUsLink);

    expect(mockRouter.push).toHaveBeenCalledWith('/about-us');
  });

  it('navigates to the login page when "Log in" button is clicked', () => {
    render(<Header userData={null} />);

    const loginButton = screen.getAllByRole('button', { name: /log in/i })[0];
    fireEvent.click(loginButton);

    expect(mockRouter.push).toHaveBeenCalledWith('/login');
  });

  it('shows user menu when logged in', async () => {
    render(<Header userData={mockUserData} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    
    await act(async () => {
      fireEvent.click(screen.getByText('John Doe'));
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(screen.getAllByRole('link', { name: /my cards/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /settings/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /help & support/i })[0]).toBeInTheDocument();
    expect(screen.getAllByText(/logout/i)[0]).toBeInTheDocument();
  });

  it('logs out the user when "Logout" link is clicked', async () => {
    render(<Header userData={mockUserData} />);

    await act(async () => {
      fireEvent.click(screen.getByText('John Doe'));
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    const logoutButton = screen.getAllByText(/logout/i)[0];
    fireEvent.click(logoutButton);

    expect(signOut).toHaveBeenCalled();
  });

  it('renders login and signup buttons when user is not logged in', () => {
    render(<Header userData={null} />);

    expect(screen.getAllByRole('button', { name: /log in/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /sign up/i })[0]).toBeInTheDocument();
  });

  it('does not render login and signup buttons when user is logged in', () => {
    render(<Header userData={mockUserData} />);

    expect(screen.queryByRole('button', { name: /log in/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /sign up/i })).not.toBeInTheDocument();
  });

  it('renders user name when logged in', () => {
    render(<Header userData={mockUserData} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
  
  it('toggles dropdown menu when user name is clicked', async () => {
    render(<Header userData={mockUserData} />);

    const userName = screen.getByText('John Doe');
    expect(screen.queryByTestId('user-dropdown')).not.toBeInTheDocument();

    // Open the dropdown
    act(() => {
      fireEvent.click(userName);
    });

    expect(screen.getByTestId('user-dropdown')).toBeInTheDocument();

    // Close the dropdown
    act(() => {
      fireEvent.click(userName);
    });

    expect(screen.queryByTestId('user-dropdown')).not.toBeInTheDocument();
  });
});
