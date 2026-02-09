'use client';

const LoadingOverlay = ({ show, message = 'Loading...' }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 flex flex-col items-center gap-4 min-w-[200px]">
        <div className="relative">
          <img
            src="/logo.png"
            alt="MuttaiKadai Logo"
            className="h-16 w-16 animate-pulse"
          />
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
        {message && (
          <p className="text-sm text-gray-600">{message}</p>
        )}
      </div>
    </div>
  );
};

export default LoadingOverlay;

