import { useFormStatus } from 'react-dom';

export default function SubmitVideoUploadButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-skyblue hover:bg-sky-500 px-5 py-2 rounded"
      type="submit"
      disabled={pending}
    >
      {pending ? 'Uploading...' : 'Upload Video'}
    </button>
  );
}
