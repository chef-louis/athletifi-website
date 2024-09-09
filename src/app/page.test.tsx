// src/app/page.test.tsx

import { render, screen, waitFor } from '@testing-library/react';
import Home from './page';
import '@testing-library/jest-dom';
import { getBlogList } from '@/utils/ApiHelper'; // Import the actual data fetching function
import { getUserData } from '@/app/utils/fetchHelper';
import { isAuthenticated } from '@/app/utils/auth/amplify-utils';
import { addUserPostSignIn } from '@/app/actions/userDataActions';

// Mock the data fetching functions and authentication
jest.mock('@/utils/ApiHelper', () => ({
  getBlogList: jest.fn(),
}));

jest.mock('@/app/utils/fetchHelper', () => ({
  getUserData: jest.fn(),
}));

jest.mock('@/app/utils/auth/amplify-utils', () => ({
  isAuthenticated: jest.fn(),
}));

jest.mock('@/app/actions/userDataActions', () => ({
  addUserPostSignIn: jest.fn(),
}));

describe('Home', () => {
  it('renders the home page', async () => {
    // Mock data for `getBlogList`
    (getBlogList as jest.Mock).mockResolvedValue({
      allBlogList: [{ id: 1, title: 'Test Blog' }], // Provide some mock blog data
      allBlogListError: null,
    });

    // Mock data for `isAuthenticated` (assuming signed in)
    (isAuthenticated as jest.Mock).mockResolvedValue({
      isSignedIn: true,
      email: 'test@example.com',
      name: 'Test User',
      userId: '123',
    });

    // Mock data for `getUserData`
    (getUserData as jest.Mock).mockResolvedValue({
      // ... your mock user data
    });

    render(<Home searchParams={{}} />); 

    // Assert that the loading message is initially displayed
    expect(screen.getByText('Loading blog list...')).toBeInTheDocument();

    // Wait for the blog list to load and the loading message to disappear
    await waitFor(() =>
      expect(screen.queryByText('Loading blog list...')).not.toBeInTheDocument()
    );

    // Assert that a blog title is displayed (using the mock data)
    expect(screen.getByText('Test Blog')).toBeInTheDocument();

    // ... other assertions for components like FollowTomorrow, PassiveEngagement, etc.
  });

  // Add more tests to cover different scenarios (e.g., error fetching blog list, user not signed in)
});