import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Seo from '@/components/common/Seo';
import { SEO_CONFIG } from '@/utils/seoConfig';
import CommonHero from '@/components/common/CommonHero';
import { Hero } from '@/types/CommonHero.type';
import { PlayerDashboardProps } from '@/types/Dashboard.type';

import Highlights from '@/components/dashboard/Highlights';
import Teammates from '@/components/dashboard/Teammates';
import PlayerStats from '@/components/dashboard/PlayerStats';
import PlayerInfo from '@/components/dashboard/PlayerInfo';
import PlayerCard from '@/components/dashboard/PlayerCard';

const PlayerDashboardPage = ({ playerId }: PlayerDashboardProps) => {
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
      <Seo pageSEO={SEO_CONFIG.dashboard} />
      <div className="overflow-hidden">
        <div className=" about-page__hero-bg bg-no-repeat bg-cover">
          <Header />
          <CommonHero hero={hero} />
        </div>
        <main className="flex flex-col px-3 min-h-full gap-5 m-10 sm:max-w-md md:max-w-2xl lg:max-w-5xl xl:max-w-7xl  mx-auto">
          <section className="flex flex-col justify-center items-stretch lg:flex-row h-full gap-5">
            <PlayerStats />
            <PlayerCard />
            <PlayerInfo />
          </section>
          <section className="flex flex-col xl:flex-row justify-center items-stretch flex-grow h-full gap-5 ">
            <Teammates />
            <Highlights />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PlayerDashboardPage;