import CardRedirect from '@/components/card-redirect/CardRedirect';
import PlayerCardPlaceholder from '@/components/card-redirect/PlayerCardPlaceholder';

export default function Page({ params }: { params: { id: string } }) {
  const QR_REDIRECT_ENABLED = false;
  return (
    <>
      {QR_REDIRECT_ENABLED ? (
        <CardRedirect id={params.id} />
      ) : (
        <PlayerCardPlaceholder />
      )}
    </>
  );
}
