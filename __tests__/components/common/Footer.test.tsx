import { render, screen } from '@testing-library/react';
import Footer from '@/components/common/Footer';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  it('renders the footer links correctly', () => {
    render(<Footer />);

    const homeLink = screen.getByText('Home');
    const aboutUsLink = screen.getByText('About us');
    const blogLink = screen.getByText('Blog');
    const contactUsLink = screen.getByText('Contact Us');
    const athletifiSelectLink = screen.getByText('Athletifi Select');
    const privacyPolicyLink = screen.getByText('Privacy Policy');
    const termsOfUseLink = screen.getByText('Terms of Use');

    expect(homeLink).toBeInTheDocument();
    expect(aboutUsLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(contactUsLink).toBeInTheDocument();
    expect(athletifiSelectLink).toBeInTheDocument();
    expect(privacyPolicyLink).toBeInTheDocument();
    expect(termsOfUseLink).toBeInTheDocument();
  });

  it('renders the social media icons correctly', () => {
    render(<Footer />);

    const tikTokIcon = screen.getByLabelText('Tik-Tok');
    const facebookIcon = screen.getByLabelText('facebook');
    const twitterIcon = screen.getByLabelText('twitter');
    const instagramIcon = screen.getByLabelText('instagram');
    const linkedInIcon = screen.getByLabelText('linkedin');

    expect(tikTokIcon).toBeInTheDocument();
    expect(facebookIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(linkedInIcon).toBeInTheDocument();
  });

  it('renders the copyright information correctly', () => {
    render(<Footer />);

    const copyrightText = screen.getByText(/©\d{4} Athletifi\. All rights reserved/i);

    expect(copyrightText).toBeInTheDocument();
  });
});
