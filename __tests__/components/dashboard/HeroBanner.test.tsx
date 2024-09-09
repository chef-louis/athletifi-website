import { render, screen } from '@testing-library/react';
import HeroBanner from '@/components/dashboard/HeroBanner';
import { IProfileProps } from '@/types/Dashboard.type';
import '@testing-library/jest-dom';

// Mock the useMediaQuery hook and the FlipCard component
jest.mock('@/app/utils/useMediaQuery', () => ({
  useMediaQuery: jest.fn(),
}));
jest.mock('@/components/dashboard/FlipCard', () => () => <div data-testid="mock-flip-card" />);

// Helper function for recursive decoding
function decodeSrcRecursively(src: string): string {
  let decodedSrc = decodeURIComponent(src);
  while (decodedSrc !== src) {
    src = decodedSrc;
    decodedSrc = decodeURIComponent(src);
  }
  return decodedSrc;
}

describe('HeroBanner', () => {
  const mockProfile: IProfileProps = {
    club_logo: 'https://example.com/logo.png',
    name: 'Test Athlete',
    club: 'Test Club',
    team: 'A',
    number: '10',
    card_url: 'https://example.com/card.png',
  };

  it('renders profile details and FlipCard when profile data is available', () => {
    render(<HeroBanner profile={mockProfile} />);

    // Check if club logo is rendered 
    const logoImage = screen.getByAltText('club-logo');
    expect(logoImage).toBeInTheDocument();

    // Decode the 'src' attribute recursively before asserting
    expect(decodeSrcRecursively(logoImage.getAttribute('src')!)).toContain(mockProfile.club_logo); 

    // Check if profile details are rendered
    expect(screen.getByText(mockProfile.name as string)).toBeInTheDocument();
    expect(screen.getByText(mockProfile.club as string)).toBeInTheDocument();
    expect(screen.getByText(`team ${mockProfile.team}`)).toBeInTheDocument();
    expect(screen.getByText(`#${mockProfile.number}`)).toBeInTheDocument();

    // Check if FlipCard is rendered
    expect(screen.getByTestId('mock-flip-card')).toBeInTheDocument();
  });

  it('renders skeleton loader when card_url is null', () => {
    const mockProfileWithNullCard: IProfileProps = {
      ...mockProfile,
      card_url: null,
    };
    render(<HeroBanner profile={mockProfileWithNullCard} />);
  
    // Check if skeleton loader is rendered
    expect(screen.getByTestId('skeleton')).toBeInTheDocument(); 
  });
});