'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faMagnifyingGlass,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Team: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<'players' | 'matches'>('players');

  const toggleIsOpen = () => setIsOpen(!isOpen);
  const handleViewChange = (newView: 'players' | 'matches') => {
    setView(newView);
  };

  // Animation variants
  const containerVariants = {
    open: { opacity: 1, height: 'auto' },
    collapsed: { opacity: 0, height: 0 },
  };

  const viewVariants = {
    players: { x: 0, opacity: 1 },
    matches: { x: 100, opacity: 0 },
  };

  return (
    <div className="m-6 rounded-lg overflow-hidden bg-cardsBackground text-primary border border-darkerSkyBlue border-opacity-10 max-w-[1030px] mx-auto shadow-md">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleIsOpen}
      >
        <h2 className="text-[24px] font-semibold">Team 2013</h2>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </div>
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'collapsed'}
        variants={containerVariants}
        transition={{ duration: 0.3 }}
        className="bg-cardsBackground border-t border-partnersBorders border-opacity-80"
      >
        <div className="flex p-4 justify-between my-2">
          <div className="flex justify-start">
            <button
              className={`w-32 h-10 px-3 py-2 rounded-full text-sm ${view === 'players' ? 'border border-skyblue' : ''}`}
              onClick={() => handleViewChange('players')}
            >
              Players
            </button>
            <button
              className={`w-32 h-10 px-3 py-2 rounded-full text-sm ${view === 'matches' ? 'border border-skyblue' : ''}`}
              onClick={() => handleViewChange('matches')}
            >
              Matches
            </button>
          </div>
          <motion.div
            className="flex gap-10"
            initial="collapsed"
            animate={isOpen ? 'open' : 'collapsed'}
            transition={{ duration: 0.6 }}
          >
            <div className="relative flex items-center justify-between max-w-72 h-10 rounded-full bg-none border border-partnersBorders">
              <input
                type="search"
                className="mr-10 w-full focus:outline-none focus:ring-0 p-4 rounded-full bg-transparent text-primary text-sm"
                placeholder="Search"
              />
              <div className="absolute right-2 w-8 h-8 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  size="lg"
                  className="text-opacity-80"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center font-light mr-2">
              <FontAwesomeIcon
                icon={faPenToSquare}
                size="lg"
                className="text-opacity-80"
              />
              <p className="-ml-[2px] mt-[4px]">Edit</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          key={view}
          initial="collapsed"
          animate="open"
          variants={viewVariants}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center p-3 rounded bg-cardsDark"
        >
          {view === 'players' ? 'players' : 'matches'}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Team;
