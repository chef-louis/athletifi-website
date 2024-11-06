// app/components/UploadForm.tsx
'use client';

import React, { useState, FormEvent } from 'react';
import { uploadVideo } from '@/app/actions/matchDataAction';
import SubmitVideoUploadButton from './SubmitVideoUpload';

interface UploadResult {
  success: boolean;
  fileKey?: string;
  error?: string;
}

export default function UploadForm() {
  const [result, setResult] = useState<UploadResult | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(null);

    const formData = new FormData(event.currentTarget);
    const result = await uploadVideo(formData);

    setResult(result);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-offwhite m-3 p-3">
      <input type="file" name="file" accept="video/*" required />
      <SubmitVideoUploadButton />
      {result && (
        <p>
          {result.success
            ? `Upload successful! File key: ${result.fileKey}`
            : `Upload failed: ${result.error}`}
        </p>
      )}
    </form>
  );
}
