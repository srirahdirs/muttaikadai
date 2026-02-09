import Image from 'next/image';

const LoadingSpinner = ({ size = 'md', text = '' }) => {
  const sizeClasses = {
    sm: 'h-16 w-16',
    md: 'h-24 w-24',
    lg: 'h-32 w-32',
    xl: 'h-40 w-40',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative">
        <Image
          src="/logo.png"
          width={size === 'sm' ? 64 : size === 'md' ? 96 : size === 'lg' ? 128 : 160}
          height={size === 'sm' ? 64 : size === 'md' ? 96 : size === 'lg' ? 128 : 160}
          className={`${sizeClasses[size]} animate-pulse`}
          alt="MuttaiKadai Logo"
          priority
        />
      </div>
      {text && (
        <p className="text-gray-500 text-sm">{text}</p>
      )}
      <div className="flex gap-1">
        <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

