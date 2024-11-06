'use client';

import { Hero } from '@/types/CommonHero.type';
import * as Sentry from '@sentry/nextjs';
import NextError from 'next/error';
import { useEffect } from 'react';

// THIS PAGE MUST NOT THROW AN ERROR. The whole point is to handle errors, so
// this page must be as close to guaranteed-error-free as possible.
//
// This is a magic file. If something throws an uncaught exception, Next.js will
// use this page to render it.

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const hero: Hero = {
    heading: '',
  };

  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        {/* `NextError` is the default Next.js error page component. Its type
        definition requires a `statusCode` prop. However, since the App Router
        does not expose status codes for errors, we simply pass 0 to render a
        generic error message. */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
