import Image from 'next/image';
import React from 'react';

const UniqueAthletifi = () => {
  return (
    <>
      <section className="relative lg:before:content-[''] before:absolute lg:before:w-448 before:h-448 before:-top-20 before:left-0 before:bg-shadow_blue before:blur-111 before:opacity-25 before:-translate-x-1/3 before:-z-10 before:rounded-full after:content-[''] after:absolute after:w-448 after:h-448 after:-bottom-20 after:right-0 after:bg-shadow_blue after:blur-111 after:opacity-25 after:translate-x-1/3 after:-z-10 after:rounded-full mb-3 pb-3">
        <div className="container md:max-w-full xl:max-w-1140 2xl:max-w-1320 mx-auto lg:pt-14 relative z-10 lg:mt-14 xl:mt-0">
          <div className="lg:px-14 lg:pt-14 sm:px-8 px-4 pt-6 sm:bg-playground-unique bg-playground-unique-sm bg-opacity-50 bg-[length:100%_100%] bg-center bg-no-repeat flex flex-col items-center ">
            <h2
              className="text-lg md:text-5xl sm:text-4xl text-primary font-HelveticaNeueMedium text-center py-2"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-easing="linear"
              data-aos-delay="200"
              data-aos-offset="200"
            >
              <span className="relative mb-4 lg:leading-60 leading-120">
                {/* What Makes */}
                Beyond the Numbers:
              </span>{' '}
              {/* AthletiFi Unique */}
              True Player Insights
            </h2>
            <span
              className="text-primary text-lg md:text-4xl sm:text-3xl font-HelveticaNeueRegular leading-normal text-center"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-easing="linear"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              {/* Empowering Tomorrow's Soccer Stars */}
              Decoding the game for passive followers
            </span>
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-easing="linear"
              data-aos-delay="400"
              data-aos-offset="200"
            >
              <p className="font-Segoe text-md opacity-80 text-primary text-center md:pb-10 pb-5 mt-4">
                {/* Stats allow friends, family, and fans to easily support and
                follow their favorite players or players in their community */}
                Soccer is an intricate dance of strategy, skill, and raw
                athleticism. While objective game statistics provide a glimpse
                into a player&apos;s contribution, they barely scratch the
                surface.{' '}
                <span className="block md:mt-4 mt-2">
                  {/* <span className="lg:block"> */}
                  Every single game includes thousands of interactions – goals,
                  passes, shots, assists, etc. This complexity makes monitoring
                  a player’s skill progression challenging.
                </span>
                <span className="block md:mt-4 mt-2">
                  {/* On the other hand, stats allow coaches and scouts to make
                  data-driven choices when building their roster and in-game
                  strategy */}
                  AthletiFi translates raw data into easy-to-follow player
                  ratings, giving you the insights you need without requiring
                  you to pull hours long study sessions.
                </span>
              </p>
            </div>
            {/* FOOTBALL PLAYER IMAGE */}
            <div className="opacity-88">
              <Image
                data-aos="fade-in"
                data-aos-duration="600"
                data-aos-easing="linear"
                data-aos-delay="200"
                data-aos-offset="200"
                // className="mb-[1px] lg:max-w-[267px] max-w-[180px] sm:max-w-[220px]"
                className="mb-1 lg:max-w-652 max-w-326 sm:max-w-300 opacity-1"
                // src="/assets/img/png/portrait-young.png"
                src="/assets/img/webp/gen-soccer-player.webp"
                width={652}
                height={512}
                alt={'football palyer'}
              />
            </div>
          </div>
        </div>
        {/* FOOTBALL IMAGE CORNER*/}
        <Image
          className="absolute lg:w-220 sm:w-150 w-100 -bottom-8 right-0 z-0"
          src="/assets/img/png/unique-football.png"
          width={220}
          height={286}
          alt={'football'}
        />
      </section>
    </>
  );
};

export default UniqueAthletifi;
