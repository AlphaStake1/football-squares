'use client';

import { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

const AdBanner = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setIsExpanded(prev => !prev);
    }, 4000); // Expand/contract every 4 seconds

    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="bg-[#002244] overflow-hidden">
      <div 
        className={`transition-all duration-1000 ease-in-out ${
          isExpanded ? 'h-80' : 'h-32'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Video B-Roll Placeholder */}
            <div className="flex-1 flex items-center justify-center">
              <div className="bg-[#004953] rounded-lg p-6 text-center text-white w-full max-w-4xl">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-[#ed5925] rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Video B-Roll Content</h3>
                    <p className="text-[#96abdc]">Dynamic expanding banner for promotional videos</p>
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="mt-6 bg-black bg-opacity-30 rounded-lg p-8 animate-fade-in">
                    <div className="text-center">
                      <div className="w-full h-32 bg-[#708090] bg-opacity-50 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-lg font-semibold">Video Player Placeholder</span>
                      </div>
                      <p className="text-sm text-[#96abdc]">
                        This area will contain your video b-roll content that showcases gameplay, 
                        testimonials, or promotional material.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Control Button */}
            <button
              onClick={togglePlayPause}
              className="ml-4 bg-[#ed5925] hover:bg-[#d14a1f] text-white p-3 rounded-full transition-colors duration-200"
              aria-label={isPlaying ? 'Pause banner animation' : 'Play banner animation'}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdBanner;