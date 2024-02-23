import React from 'react';

interface ActionReelProps {
  videoSrc: string;
  thumbnail: string;
  title: string;
  description: string;
}
const ActionReel: React.FC<ActionReelProps> = ({
  videoSrc,
  thumbnail,
  title,
  description,
}) => {
  console.log(videoSrc,thumbnail)
  return (
    <div className=" flex my-2 justify-start">
      <div className="relative w-full max-w-[240px] min-w-[100px] h-[130px] sm:h-[130px] md:h-[150px]">
        <video
          className="w-full h-full object-cover rounded rounded-5"
          src={videoSrc}
          poster={thumbnail}
          controls
        />
        <time className="absolute bottom-2 right-2 bg-black text-primary px-1.5 text-sm font-light">
          00:00
        </time>
      </div>
      <div className=" ml-2 flex flex-col justify-end w-[230px]">
        <h4 className="text-sm font-semibold mb-2 text-primary font-sourceSansPro">
          {title}
        </h4>
        <p className="text-sm text-primary font-extralight font-sourceSansPro mb-px">
          {description}
        </p>
      </div>
    </div>
  );
};

interface ActionReelListProps {
  actionReels: ActionReelProps[];
}

const ActionReelList: React.FC<ActionReelListProps> = ({ actionReels }) => {
  return (
    <div className="flex flex-col items-center w-full md:w-1/2">
      <div className=" flex flex-col md:overflow-auto h-[500px]">
        <h3 className="w-full text-primary pt-2 text-md font-semibold font-sourceSansPro my-2 md:py-4">
          Top Action Reels
        </h3>
        {actionReels.map((actionReel, index) => (
          <ActionReel key={index} {...actionReel} />
        ))}
      </div>
    </div>
  );
};

export { ActionReel, ActionReelList };
