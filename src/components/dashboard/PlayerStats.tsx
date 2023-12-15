import React from 'react';
import { BlueShodow, UnderLIneText } from '../common/Icon';
import Image from 'next/image';

const playerStats = {
  Attacking: 0,
  Goalkeeping: 90,
  Physical: 90,
  Mentality: 20,
  Defending: 50,
};

const PlayerStats = () => {
  return (
    <div className='container max-w-xs md:max-w-[400px] mx-auto px-3'>
      <div className="blue_linear_gradient bg-blue_linear_gradient after:absolute relative lg:py-16 py-5 md:py-10 z-0  after:contents-[''] after:inset-0 after:p-[1px] after:rounded-[30px] rounded-[30px]">
        <div
          className='flex flex-col justify-center items-center relative z-20 gap-2'
          data-aos='fade-up'
          data-aos-duration='400'
          data-aos-easing='ease-in-sine'
          data-aos-delay='300'
          data-aos-offset='100'
        >
          <h2 className='font-HelveticaNeueMedium md:text-4xl text-[26px] text-[#FDFEFF] font-medium leading-[60px] relative z-20 text-center md:mb-4'>
            <span className='relative '>
              Player Stats
              <span className='absolute -bottom-2 left-0 z-0'>
                <UnderLIneText />
              </span>
            </span>
          </h2>
          <div className='flex flex-col'>
            {Object.entries(playerStats).map(([stat, value]) => {
              if (
                (stat === 'Goalkeeping' || stat === 'Attacking') &&
                value === 0
              )
                return null;
              return (
                <div
                  key={stat}
                  className='w-full md:w-[240px] h-[30px] bg-gray-200 rounded-[30px] overflow-hidden my-2'
                >
                  <div
                    className='h-full font-Segoe bg-shadow_blue flex items-center justify-start text-black font-semibold px-4'
                    style={{ width: `${value}%` }}
                  >
                    {stat}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
