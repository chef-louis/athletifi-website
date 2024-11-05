'use client';

import React, { ChangeEvent, useState, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faCloudArrowUp,
  faChevronUp,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import UploadProgressBar from './UploadProgressBar';
import { motion } from 'framer-motion';
import DragDropUpload from './DragDropUpload';
import { FileWithPreview } from '@/types/CoachPortal.type';

interface SubmittedUrlProps {
  url: string;
  onRemove: (url: string) => void;
}

const SubmittedUrl: React.FC<SubmittedUrlProps> = ({ url, onRemove }) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0, x: -20 }}
      animate={{ opacity: 1, height: 'auto', x: 0 }}
      exit={{ opacity: 0, height: 0, x: -20 }}
      transition={{ duration: 0.08 }}
      className="flex items-center bg-cardsDark opacity-50 rounded-md mb-2 overflow-hidden"
    >
      <div className={'w-2 h-10 mr-3 bg-green-500'}></div>
      <p className="text-primary text-sm truncate flex-grow mx-2">{url}</p>
      <button
        onClick={() => onRemove(url)}
        className="text-skyblue hover:text-primary mr-4"
      >
        <FontAwesomeIcon
          icon={faTimes}
          className="text-chartRed hover:text-primary"
        />
      </button>
    </motion.div>
  );
};

type PlatformOption = 'Veo' | 'Vimeo' | 'YouTube';

const SubmitFootage: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<PlatformOption>('Veo');
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [submittedUrls, setSubmittedUrls] = useState<string[]>([]);
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: PlatformOption): void => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleUrlChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setVideoUrl(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (videoUrl.trim()) {
      setSubmittedUrls((prevUrls) => [...prevUrls, videoUrl]);
      setVideoUrl('');
    }
  };

  const handleRemoveUrl = (urlToRemove: string): void => {
    setSubmittedUrls(submittedUrls.filter((url) => url !== urlToRemove));
  };

  return (
    <div className="bg-cardsBackground text-primary py-2 md:py-6 lg:py-8 max-w-[1030px] mx-auto">
      <h1 className="text-[32px] font-bold mb-4">Submit footage</h1>
      <p className="text-base font-light max-w-[480px]">
        You can either upload the video directly from your computer or enter the
        URL if it's hosted on an external platform like Veo or Vimeo.
      </p>
      <div className="flex flex-col space-y-4 mt-8 md:mt-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-end md:items-center justify-center md:justify-start"
        >
          <div className="relative flex w-full">
            <div className="flex items-center w-32 h-[54px] lg:h-[72px] shadow-md rounded-l-[10px] bg-cardsDark">
              <button
                type="button"
                onClick={toggleDropdown}
                className="relative text-primary p-4 rounded flex justify-between items-center w-full"
              >
                <span>{selectedOption}</span>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={isOpen ? faChevronUp : faChevronDown}
                    className="ml-4"
                  />
                </div>
              </button>
            </div>
            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.1 }}
                className="absolute z-10 bg-cardsDark bg-opacity-80 text-white left-0 top-full w-32 mt-[4px] rounded shadow-md"
              >
                {(['Veo', 'Vimeo', 'YouTube'] as PlatformOption[]).map(
                  (option) => (
                    <li
                      key={option}
                      className="px-4 py-2 text-sm hover:text-skyblue cursor-pointer"
                      onClick={() => handleSelect(option)}
                    >
                      {option}
                    </li>
                  ),
                )}
              </motion.ul>
            )}

            <input
              className="flex-1 font-light py-6 px-4 rounded-r-[10px] bg-cardsBackground shadow-md h-[54px] lg:h-[72px] focus:outline-none focus:ring-0 focus:border focus:border-opacity-40 focus:border-skyblue"
              placeholder="Enter video URL"
              value={videoUrl}
              onChange={handleUrlChange}
            />
          </div>

          <button
            type="submit"
            className="bg-skyblue mt-4 md:mt-0 w-full md:w-36 h-[54px] lg:h-[72px] ml-4 rounded-[10px] text-darkgray hover:text-skyblue hover:bg-cardsDark shadow-md"
          >
            Submit URL
          </button>
        </form>
        <div className="mt-4">
          {submittedUrls.map((url, index) => (
            <SubmittedUrl key={index} url={url} onRemove={handleRemoveUrl} />
          ))}
        </div>
        <div className="flex items-center gap-10 py-4 md:py-10">
          <div className="flex w-full h-px bg-partnersBorders opacity-50"></div>
          <div className="text-center font-light">OR</div>

          <div className="flex w-full h-px bg-partnersBorders opacity-50"></div>
        </div>
        <DragDropUpload files={files} setFiles={setFiles} />
        <UploadProgressBar files={files} />
      </div>
    </div>
  );
};

export default SubmitFootage;
