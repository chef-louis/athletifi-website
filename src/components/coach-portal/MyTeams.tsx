import Team from './Team';

const MyTeams: React.FC = () => {
  return (
    <div className="mt-12 mx-auto max-w-[1040px]">
      <h1 className="text-[32px] text-primary font-bold mb-4">My Teams</h1>
      <p className="text-base font-light max-w-[480px] text-primary">
        Some copy to explain wht you find here....
      </p>
      <div>
        <Team />
        <Team />
        <Team />
      </div>
    </div>
  );
};

export default MyTeams;
