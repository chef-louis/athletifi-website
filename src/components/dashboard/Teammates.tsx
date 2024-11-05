import Skeleton from 'react-loading-skeleton';
import '@/styles/globals.css';
import { ITeammate } from '@/types/Dashboard.type';
import TeammateCard from './TeammateCard';
import { ICards } from '@/types/User.type';

export default function Teammates({
  teammates,
  requesterEmail,
  teamName,
  ownedCards,
  guestCards,
}: {
  teammates: ITeammate[] | null | undefined;
  requesterEmail: string | null | undefined;
  teamName: string | null | undefined;
  ownedCards: ICards[] | null;
  guestCards: ICards[] | null;
}) {
  return (
    <>
      {teammates && teammates[0]?.name ? (
        <div className="w-full my-8 lg:my-12 lg:mt-0">
          <div className="flex gap-3 overflow-auto pr-4 pb-4">
            {teammates.map((teammate) => (
              <TeammateCard
                teammate={teammate}
                requesterEmail={requesterEmail}
                teamName={teamName}
                ownedCards={ownedCards}
                guestCards={guestCards}
              />
            ))}
          </div>
        </div>
      ) : teammates === null ? (
        <div className="bg-cardsBackground p-4 w-full lg:w-[330px] rounded-10 my-12 lg:my-0 ml-0 lg:ml-6 shadow-md">
          <h2 className="text-primary font-semibold text-[20px] font-sourceSansPro">
            Teammates
          </h2>
          <div className="h-1 bg-partnersBorders my-2" />
          <div className="text-gray-500 min-w-[343px] md:min-w-[778px] lg:min-w-[330px] min-h-[150px]">
            We are gathering details about the team. Please check back soon for
            updates!
          </div>
        </div>
      ) : (
        <Skeleton className="min-w-[343px] md:min-w-[778px] lg:min-w-[330px] min-h-[426px] md:min-h-[217px] lg:min-h-[355px] mb-12 lg:mb-0" />
      )}
    </>
  );
}
