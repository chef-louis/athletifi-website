'use client';

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import SubmitVideoUploadButton from './SubmitVideoUpload';
import { uploadVideo } from '@/app/actions/matchDataAction';

export default function DragDropVideoUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadResult, setUploadResult] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'video/*': [] },
    maxFiles: 1,
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const result = await uploadVideo(formData);
      setUploadResult(
        result.success
          ? 'Upload successful!'
          : 'Upload failed: ' + result.error,
      );
    } catch (error) {
      setUploadResult('An error occurred during upload.');
    }
  };

  return (
    <div className="bg-cardsDark p-6 rounded-lg">
      <form onSubmit={handleSubmit}>
        <div
          {...getRootProps()}
          className={`border-2 border-dashed border-skyblue p-8 rounded-lg text-center cursor-pointer ${
            isDragActive ? 'bg-skyblue bg-opacity-10' : ''
          }`}
        >
          <input {...getInputProps()} />
          <FontAwesomeIcon
            icon={faCloudUploadAlt}
            className="text-skyblue text-4xl mb-4"
          />
          <p className="text-primary">
            {isDragActive
              ? 'Drop the video file here'
              : "Drag 'n' drop a video file here, or click to select a file"}
          </p>
        </div>
        {file && (
          <div className="mt-4 text-primary">
            <p>Selected file: {file.name}</p>
          </div>
        )}
        <div className="mt-4">
          <SubmitVideoUploadButton />
        </div>
      </form>
      {uploadResult && (
        <div
          className={`mt-4 ${uploadResult.includes('successful') ? 'text-green-500' : 'text-red-500'}`}
        >
          {uploadResult}
        </div>
      )}
    </div>
  );
}
