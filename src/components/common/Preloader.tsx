'use client';

import { useState, useEffect } from 'react';
import { PageLogo } from '@/components/common/Icon';

const Preloader = () => {
  // State variable for preloader. A preloader is a visual element that appears on the screen while a webpage or a portion of a webpage is loading.
  const [preloader, setPreloader] = useState(true);
  // The preloader state variable is initially set to true, indicating that the preloader should be displayed.

  // useEffect hook to handle preloader and body overflow
  useEffect(() => {
    // Delay for preloader to disappear
    const timer = setTimeout(() => {
      setPreloader(false);
      document.body.classList.remove('overflow-hidden');
    }, 1500);

    // Adding CSS classes to body for overflow control
    document.body.classList.add('overflow-hidden');

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  if (!preloader) return null;

  return (
    <div data-testid="preloader" className="preloader__icon preloader__bg fixed min-h-screen top-0 left-0 w-full z-50 flex justify-center items-center">
      <span>
        <PageLogo />
      </span>
    </div>
  );
};

export default Preloader;
