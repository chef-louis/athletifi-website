import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { getUserData } from '@/app/utils/fetchHelper';
import { UserData } from '@/types/User.type';
import { isAuthenticated } from '@/app/utils/auth/amplify-utils';
import { addUserPostSignIn } from '@/app/actions/userDataActions';

export default async function PlayerCardPlaceholder() {
  const auth = await isAuthenticated();
  if (auth.isSignedIn) {
    await addUserPostSignIn(auth.email, auth.name, auth.userId);
  }
  const userData = auth.isSignedIn ? await getUserData(auth) : null;

  return (
    <>
      <Header userData={userData as UserData} />
      <div className="container md:max-w-full xl:max-w-1140 2xl:max-w-1320 mx-auto px-3 relative z-10 text-primary default__container pt-48">
        <div className="font-HelveticaNeueMedium md:text-5xl text-basemd sm:text-4xl text-primary font-medium leading-60 relative z-20 text-center md:mb-4">
          COMING SOON
        </div>
        <div className="font-Segoe font-normal text-md leading-7 pb-0.5 text-primary text-start opacity-80 m-0 sm:pt-4 lg:max-w-769 mx-auto sm:px-6 px-3 xl:px-0 relative z-20">
          <br />
          This AthletiFi player card is not yet active.
          <br />
          <br />
          AthletiFi combines physical collectible cards with digital player
          profiles, offering match recaps, video highlights, and performance
          stats for soccer players.
          <br />
          <br />
          Parents will receive an email invitation to set up their soccer
          player&apos;s AthletiFi account soon. Once activated, this card will
          link directly to the player's digital profile.
          <br />
          <br />
          Please try again soon after this player card&apos;s digital invite has
          been claimed.
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
}
