import { createServerRunner } from '@aws-amplify/adapter-nextjs';
// import config from '@/amplifyconfiguration.json';
// import awsExports from '@/aws-exports';
import config from '@/custom-aws-exports';
import { cookies } from 'next/headers';
import { getCurrentUser } from 'aws-amplify/auth/server';
import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/data';

export const cookieBasedClient = generateServerClientUsingCookies({
  config,
  // config: awsExports,
  cookies,
  authMode: 'userPool',
});

export const { runWithAmplifyServerContext } = createServerRunner({
  config,
  // config: awsExports,
});

export const isAuthenticated = async () =>
  await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    async operation(contextSpec) {
      try {
        const user = await getCurrentUser(contextSpec);
        return {
          user: JSON.stringify(user.signInDetails?.loginId || user.username),
          signInMethod: user.signInDetails ? 'email' : 'social',
          isSignedIn: !!user,
        };
      } catch (error) {
        return {
          user: '',
          signInMethod: '',
          isSignedIn: false,
        };
      }
    },
  });
