import { withSentryConfig } from '@sentry/nextjs';

/**
 * This is the configuration for Next.js. It sets up various settings for the Next.js application.
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Enable React Strict Mode for better debugging and performance.
  reactStrictMode: true,

  // Configure image domains for Next.js Image component.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vidalco.in',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'athletifi-s3.s3.us-east-2.amazonaws.com',
        port: '',
      },
    ],
  },
};

/**
 * This is the configuration for Sentry. For all available options see
 * https://github.com/getsentry/sentry-webpack-plugin#options.
 * @type {import('@sentry/nextjs').SentryBuildOptions}
 */
const sentryConfig = {
  org: 'athletifi',
  project: 'website',

  release: {
    deploy: {
      env: process.env.AWS_BRANCH ?? 'dev',
    },
    setCommits: {
      auto: true,
    }
  },

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Automatically annotate React components to show their full name in breadcrumbs and session replay
  reactComponentAnnotation: {
    enabled: true,
  },

  // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: '/monitoring',

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
};

const config = withSentryConfig(nextConfig, sentryConfig);
export default config;
