import loadingLogo from '@/assets/loading-logo.png';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50/80">
      <div className="flex flex-col items-center gap-4">
        <img
          src={loadingLogo}
          alt="Loading"
          className="w-16 h-16 animate-spin-pulse"
        />
        <p className="text-sm text-gray-500 animate-pulse">Loading...</p>
      </div>
      <style>{`
        @keyframes spinPulse {
          0% { transform: rotate(0deg) scale(1); opacity: 1; }
          50% { transform: rotate(180deg) scale(1.1); opacity: 0.7; }
          100% { transform: rotate(360deg) scale(1); opacity: 1; }
        }
        .animate-spin-pulse {
          animation: spinPulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
