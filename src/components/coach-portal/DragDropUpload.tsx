import React, { useState, useCallback } from 'react';
import { useDropzone, FileRejection, DropEvent } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloudArrowUp,
  faTimes,
  faRotateRight,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { motion } from 'framer-motion';
import { uploadVideo } from '@/app/actions/matchDataAction';
import { FileWithPreview } from '@/types/CoachPortal.type';

const DragDropUpload = ({
  files,
  setFiles,
}: {
  files: FileWithPreview[];
  setFiles: React.Dispatch<React.SetStateAction<FileWithPreview[]>>;
}) => {
  const onDrop = useCallback(
    (
      acceptedFiles: File[],
      fileRejections: FileRejection[],
      event: DropEvent,
    ) => {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          generatedId: `${file.name}-${Date.now()}`, // Generate a unique ID using file name and current timestamp
          fileName: file.name,
          status: 'uploading' as const,
        }),
      );
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      // Simulate file upload
      newFiles.forEach((file) => {
        handleFileUpload(file);
      });
    },
    [],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/mp4': ['.mp4'],
      'video/x-m4v': ['.m4v'],
      'video/webm': ['.webm'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/gif': ['.gif'],
      'image/webp': ['.webp'],
    },
  });

  async function handleFileUpload(file: FileWithPreview) {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const result = await uploadVideo(formData);
      if (result.success) {
        setFiles((prevFiles) =>
          prevFiles.map((f) =>
            f.generatedId === file.generatedId
              ? { ...f, status: 'success' as const }
              : f,
          ),
        );
      } else {
        setFiles((prevFiles) =>
          prevFiles.map((f) =>
            f.generatedId === file.generatedId
              ? { ...f, status: 'error' as const }
              : f,
          ),
        );
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setFiles((prevFiles) =>
        prevFiles.map((f) =>
          f.generatedId === file.generatedId
            ? { ...f, status: 'error' as const }
            : f,
        ),
      );
    }
  }

  const removeFile = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const retryUpload = (file: FileWithPreview) => {
    setFiles((prevFiles) =>
      prevFiles.map((f) =>
        f.name === file.name ? { ...f, status: 'uploading' as const } : f,
      ),
    );
    handleFileUpload(file);
  };

  return (
    <div className="">
      <div
        {...getRootProps()}
        className="border border-dashed shadow-md border-skyblue border-opacity-50 rounded p-8 text-center cursor-pointer"
      >
        <input {...getInputProps()} />
        <div
          className="border border-skyblue p-4 w-20 h-20 flex justify-center items-center
        rounded-full mx-auto mb-6"
        >
          <FontAwesomeIcon
            icon={faCloudArrowUp}
            size="2xl"
            className="text-skyblue"
          />
        </div>
        <p className="text-white">
          {isDragActive
            ? 'Drop the files here ...'
            : 'Drag & drop video file or click to select files'}
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Supported formats: MP4, M4V, WebM, JPEG, PNG, GIF, WebP
        </p>
      </div>

      <div className="mt-4">
        {files.map((file) => (
          <motion.div
            initial={{ opacity: 0, height: 0, x: -20 }}
            animate={{ opacity: 1, height: 'auto', x: 0 }}
            exit={{ opacity: 0, height: 0, x: -20 }}
            transition={{ duration: 0.08 }}
            key={file.generatedId}
            className="flex items-center bg-cardsDark opacity-50 rounded-md mb-2 overflow-hidden"
          >
            <div
              className={`w-2 h-10 mr-3 ${
                file.status === 'uploading'
                  ? 'bg-partnersBorders'
                  : file.status === 'success'
                    ? 'bg-green-500'
                    : 'bg-chartRed'
              }`}
            ></div>
            <span className="flex-grow text-white truncate text-sm">
              {file.fileName}
            </span>
            <div className="flex items-center">
              {file.status === 'uploading' && (
                <FontAwesomeIcon
                  icon={faCircleNotch as IconDefinition}
                  spin
                  className="text-skyblue mr-4"
                />
              )}
              {file.status === 'error' && (
                <button
                  onClick={() => retryUpload(file)}
                  className="text-primary opacity-80 hover:text-skyblue mr-6 flex items-center"
                >
                  <FontAwesomeIcon icon={faRotateRight as IconDefinition} />
                  <span
                    className="ml-[4px]
                   text-sm underline "
                  >
                    try again
                  </span>
                </button>
              )}
              <button
                onClick={() => {
                  removeFile(file.name);
                }}
                className="text-red-500 hover:text-red-400 pr-4"
              >
                <FontAwesomeIcon icon={faTimes as IconDefinition} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DragDropUpload;
