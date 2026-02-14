import loadingLogo from '@/assets/loading-logo.png';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-white">
      <div className="flex flex-col items-center gap-5">
        {/* Logo with rotating ring */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Rotating ring */}
          <div className="absolute inset-0 rounded-full border-2 border-emerald-200 animate-logo-ring" />
          {/* Gradient glow behind logo */}
          <div className="absolute w-20 h-20 rounded-full bg-emerald-50/60" />
          {/* Logo */}
          <img
            src={loadingLogo}
            alt="Loading"
            className="w-14 h-14 relative z-10"
          />
        </div>
        <p className="text-sm text-gray-500 font-medium tracking-wide">Loading application...</p>
      </div>
      <style>{`
        @keyframes logoRing {
          0% { transform: rotate(0deg); border-color: rgba(16, 185, 129, 0.3); }
          50% { border-color: rgba(16, 185, 129, 0.6); }
          100% { transform: rotate(360deg); border-color: rgba(16, 185, 129, 0.3); }
        }
        .animate-logo-ring {
          animation: logoRing 2s linear infinite;
        }
      `}</style>
    </div>
  );
}
