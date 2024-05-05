import AuthClient from '@/components/auth/AuthClient';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="">
        <AuthClient defaultScreen={''} />;
      </div>
    </div>
  );
};

export default LoginPage;
