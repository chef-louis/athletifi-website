import { invitationRequestAction } from '@/app/actions/invitationAction';
import { ITeammate } from '@/types/Dashboard.type';
import { ICards } from '@/types/User.type';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

export default function TeammateCard({
  requesterEmail,
  teamName,
  teammate,
  ownedCards,
  guestCards,
}: {
  requesterEmail: string | null | undefined;
  teamName: string | null | undefined;
  teammate: ITeammate | undefined;
  ownedCards: ICards[] | null;
  guestCards: ICards[] | null;
}) {
  const accessCard =
    ownedCards?.find((card) => card.name === teammate?.name) ||
    guestCards?.find(
      (card) => card.status === 'accepted' && card.name === teammate?.name,
    );
  const userHasPending = guestCards?.some(
    (card) => card.status === 'pending' && card.name === teammate?.name,
  );

  async function triggerInviteRequest(
    requesterEmail: string | null | undefined,
    targetPlayerName: string | null | undefined,
    targetTeamName: string | null | undefined,
  ) {
    try {
      await invitationRequestAction(
        requesterEmail,
        targetPlayerName,
        targetTeamName,
      );
    } catch (error) {
      console.error('Failed to revoke invitation', error);
    }
  }

  return (
    <>
      {teammate?.avatar_url && teammate?.name && (
        <div
          key={`${teammate.name}-${teammate.number}`}
          className="flex flex-col bg-cardsBackground rounded-10 py-4 px-3 min-w-36 shadow-md"
        >
          <div className="flex flex-col items-center">
            <Image
              src={teammate.avatar_url}
              alt={teammate.name}
              width={76}
              height={76}
              className="rounded-full bg-slate-500 mb-3 lg:mb-0"
            />
            <div className="md:ml-0 mt-2 md:mt-0 flex flex-col items-center h-[72px] justify-evenly">
              <p className="text-sm text-center text-primary leading-5 mt-2 md:mt-0">
                {teammate.name}
              </p>
              {teammate.number !== null && (
                <p className="text-center inline-block max-w-full text-sm text-offwhite">
                  #{teammate.number}
                </p>
              )}
            </div>
          </div>
          <div className="border-t border-t-offwhite mb-4"></div>
          {accessCard !== undefined ? (
            <Link
              href={`/dashboard/${accessCard.dashboard_slug!}`}
              className="flex justify-center text-sm text-offwhite hover:text-white"
            >
              view dashboard
            </Link>
          ) : (
            <button
              className="flex items-center group"
              disabled={userHasPending}
              onClick={() =>
                triggerInviteRequest(requesterEmail, teammate.name, teamName)
              }
            >
              {userHasPending ? (
                <p className="text-sm text-offwhite group-hover:text-white">
                  request pending
                </p>
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    className="text-md text-offwhite group-hover:text-skyblue mr-3"
                  />
                  <p className="text-sm text-offwhite group-hover:text-white">
                    request access
                  </p>
                </>
              )}
            </button>
          )}
        </div>
      )}
    </>
  );
}
