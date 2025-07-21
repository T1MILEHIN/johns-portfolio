import { useState, useEffect } from 'react';
import TypewriterTextTransition from "@/components/custom/typewriterTextTransition"

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [shouldLoop, setShouldLoop] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoop(true); // If loading takes more than 5s, allow both texts
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        setProgress((prev) => Math.min(prev + Math.random() * 10, 100));
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setIsComplete(true), 500);
    }
  }, [progress]);

  return (
    <div className={`fixed inset-0 z-[99999999999999999999999999] flex flex-col bg-loader-background transition-opacity duration-500 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100 z-50'
      }`}>
      {/* Progress Bar */}
      <div className="h-6 w-full bg-loader-background">
        <div
          className="h-full bg-loader-progress transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Content Area */}
      <div className="flex-1 flex items-end justify-between px-4 md:p-20">
        {/* Left side - Brand/Name */}
        <div className="text-loader-text flex-[3]">
          <p className='text-xs lg:text-base font-medium text-[#828282]'>Kindly wait for some seconds, loading....</p>
          <TypewriterTextTransition shouldLoop={shouldLoop} />
        </div>

        {/* Right side - Percentage */}
        <div className="text-loader-text flex-1">
          <span className="text-6xl md:text-8xl font-semibold tabular-nums">
            {Math.floor(progress)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
