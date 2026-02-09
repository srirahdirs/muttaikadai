import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="h-screen bg-pearl-bg grid place-content-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="relative">
          <Image
            src={"/logo.png"}
            width={150}
            height={150}
            className="h-[150px] w-[150px] animate-pulse"
            alt="MuttaiKadai Logo"
            priority
          />
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};
export default LoadingPage;
