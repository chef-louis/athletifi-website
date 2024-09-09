import { render, screen, act } from '@testing-library/react';
import Preloader from '@/components/common/Preloader';
import '@testing-library/jest-dom';

jest.useFakeTimers();
jest.spyOn(global, 'clearTimeout');

describe('Preloader Component', () => {
  beforeEach(() => {
    render(<Preloader />);
  });

  it('renders the preloader initially', () => {
    const preloader = screen.getByTestId('preloader');
    expect(preloader).toBeInTheDocument();
  });

  it('removes the preloader after a delay', () => {
    act(() => {
      jest.advanceTimersByTime(1500);
    });

    const preloader = screen.queryByTestId('preloader');
    expect(preloader).not.toBeInTheDocument();
  });

  it('removes the overflow-hidden class from body after a delay', () => {
    act(() => {
      jest.advanceTimersByTime(1500);
    });

    expect(document.body.classList.contains('overflow-hidden')).toBe(false);
  });

  it('cleans up the timer and removes the overflow-hidden class on unmount', () => {
    const { unmount } = render(<Preloader />);

    unmount();

    expect(clearTimeout).toHaveBeenCalledTimes(1);
    expect(document.body.classList.contains('overflow-hidden')).toBe(false);
  });
});