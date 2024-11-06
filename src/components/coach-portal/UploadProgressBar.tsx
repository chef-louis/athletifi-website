import { FileWithPreview } from '@/types/CoachPortal.type';

const UploadProgressBar = ({ files }: { files: FileWithPreview[] }) => {
  const percentage =
    files.length > 0
      ? files.reduce((acc, cur) => {
          if (cur.status === 'success') {
            return acc + 1;
          } else {
            return acc;
          }
        }, 0) / files.length
      : 0;
  console.log(percentage);
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - percentage * circumference;

  return (
    <div className="relative w-20 h-20">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle
          className="text-gray-700 stroke-current"
          strokeWidth="4"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
        />
        <circle
          className="text-skyblue stroke-current transition-all duration-300 ease-in-out"
          strokeWidth="4"
          strokeLinecap="round"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-md text-primary">{`${percentage * 100}%`}</span>
      </div>
    </div>
  );
};

export default UploadProgressBar;
