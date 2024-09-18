import { addUserPostSignIn } from '@/app/actions/userDataActions';
import { getUserData } from '@/app/utils/fetchHelper';
import { isAuthenticated } from '@/app/utils/auth/amplify-utils';
import Header from '@/components/common/Header';
import InviteModal from '@/components/common/InviteModal';
import { invitationData, UserData } from '@/types/User.type';
import { redirect } from 'next/navigation';
import DashboardMain from '@/components/dashboard/DashboardMain';

export default async function PlayerDashboardPage({
  params,
  searchParams,
}: {
  params: { cardId: string[] };
  searchParams?: { [key: string]: string | undefined };
}) {
  const cardId = params.cardId.join('/');

  const filteredSearchParams = Object.fromEntries(
    Object.entries(searchParams || {}).filter(([_, v]) => v !== undefined),
  ) as Record<string, string>;
  const pathname = `/dashboard/${cardId}${Object.keys(filteredSearchParams).length ? '?' + new URLSearchParams(filteredSearchParams).toString() : ''}`;
  const auth = await isAuthenticated();
  //if (!auth.isSignedIn) redirect('/login?redirect=/profile');
  if (!auth.isSignedIn) {
    redirect(`/login?redirect=${pathname}&intendedPath=${pathname}`);
  }

  const inviteData = await addUserPostSignIn(
    auth.email,
    auth.name,
    auth.userId,
    searchParams?.invite_id,
  );

  const userData = await getUserData(auth);

  return (
    <>
      <Header userData={userData as UserData} />
      <InviteModal inviteData={inviteData as invitationData | undefined} />
      <DashboardMain cardId={cardId} />
    </>
  );
}
