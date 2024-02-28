'use client';

import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
// import { SEO_CONFIG } from '@/utils/seoConfig';
import CommonHero from '@/components/common/CommonHero';
import { Hero } from '@/types/CommonHero.type';
// import { PlayerDashboardProps } from '@/types/Dashboard.type';
import Highlights from '@/components/dashboard/Highlights';
import Teammates from '@/components/dashboard/Teammates';
import PlayerStats from '@/components/dashboard/PlayerStats';
import PlayerInfo from '@/components/dashboard/PlayerInfo';
import PlayerCard from '@/components/dashboard/PlayerCard';
import type { NextPage } from 'next';
import { notFound } from 'next/navigation';
import PastMatchesLayout from '@/components/dashboard/PastMatchesLayout';
import SeasonSection from '@/components/dashboard/SeasonSectionLayout';

interface PageProps {
  params: { playerId: number };
  searchParams?: { [key: string]: string | string[] | undefined };
}

const MIN_PLAYER_ID = 1;
const MAX_PLAYER_ID = 1134;

// TO DO: Implement dynamic metadata generation for SEO using generateMetadata https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata
// export const metadata = {
//   title: 'Player Dashboard | AthletiFi',
//   description:
//     'Explore detailed player statistics, highlights, and more on the AthletiFi Player Dashboard.',
// };

const PlayerDashboardPage: NextPage<PageProps> = ({ params }) => {
  // const PlayerDashboardPage = ({ playerId }: PlayerDashboardProps) => {
  const { playerId } = params;
  if (playerId < MIN_PLAYER_ID || playerId > MAX_PLAYER_ID) {
    notFound();
  }
  // SAMPLE DATA
  // TODO: FETCH PLAYER DATA FROM BACKEND
  const playerProfile = {
    name: 'Lionel Messi',
  };

  // SEO
  const hero: Hero = {
    heading: playerProfile?.name || `Player data not found`,
    subtitle:
      'Here you can find all the latest stats and highlights on a player!',
    title: 'AthletiFi Player Dashboard',
  };

  return (
    <>
      <div className="">
        {/* <div className=" about-page__hero-bg bg-no-repeat bg-cover">
          <Header />
          <CommonHero hero={hero} />
        </div> */}
        <main className="flex flex-col min-h-full md:max-w-2xl lg:max-w-5xl xl:max-w-7xl  mx-auto relative bg-slate-100 ">
          <SeasonSection />
          <PastMatchesLayout />
          {/* <section className="flex flex-col justify-center items-stretch lg:flex-row h-full gap-5">
            <PlayerStats />
            <PlayerCard />
            <PlayerInfo />
          </section>
          <section className="flex flex-col xl:flex-row justify-center items-stretch flex-grow h-full gap-5 ">
            <Teammates />
            <Highlights />
          </section> */}
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default PlayerDashboardPage;
