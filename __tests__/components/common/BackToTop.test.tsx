import { render, screen, fireEvent, act } from '@testing-library/react';
import BackToTop from '@/components/common/BackToTop';
import '@testing-library/jest-dom';

describe('BackToTop Component', () => {
  const scrollToMock = jest.fn();
  Object.defineProperty(window, 'scrollTo', { value: scrollToMock, writable: true });

  // Mock the 'scroll' event
  const scrollEvent = new Event('scroll');

  beforeEach(() => {
    scrollToMock.mockClear();
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
  });

  it('renders the button when scroll position is above threshold', () => {
    render(<BackToTop />);

    // Simulate scrolling past the threshold
    act(() => {
      window.scrollY = 300; // Set scrollY above the threshold
      window.dispatchEvent(scrollEvent);
    });

    const backToTopButton = screen.getByTestId('back-to-top');
    expect(backToTopButton).toBeInTheDocument();
  });

  it('does not render the button when scroll position is below threshold', () => {
    render(<BackToTop />);

    // No need to simulate scrolling, as the initial scrollY is 0

    const backToTopButton = screen.queryByTestId('back-to-top');
    expect(backToTopButton).not.toBeInTheDocument();
  });

  it('triggers scrollToTop on button click', () => {
    render(<BackToTop />);

    // Simulate scrolling to make the button appear
    act(() => {
      window.scrollY = 300;
      window.dispatchEvent(scrollEvent);
    });

    const backToTopButton = screen.getByTestId('back-to-top');

    fireEvent.click(backToTopButton);

    expect(scrollToMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      top: 0,
    });
  });

  // Additional test to ensure event listener cleanup (optional)
  it('cleans up the scroll event listener on unmount', () => {
    const { unmount } = render(<BackToTop />);

    // Spy on window.removeEventListener
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

    // Unmount the component
    unmount();

    // Expect removeEventListener to have been called with 'scroll' and the handleScroll function
    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function)); 

    // Restore the original removeEventListener
    removeEventListenerSpy.mockRestore();
  });
});