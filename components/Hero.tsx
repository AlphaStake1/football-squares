'use client';

import { useState } from 'react';
import { PlayCircle } from 'lucide-react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-gradient-to-br from-[#1b5e20] via-[#2e7d32] to-[#388e3c] text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Next Big{' '}
              <span className="text-[#ffd940]">Game-Day</span> Ritual
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 mb-8 leading-relaxed">
              Claim a square, cheer every quarter, win prizes.
            </p>
            <button
              className="bg-[#ffd940] text-[#1b5e20] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#ffed4a] hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-3"
              aria-label="Start playing Football Squares now"
            >
              <PlayCircle className="w-6 h-6" />
              Play a Free Squares Board Now
            </button>
          </div>

          {/* Quarterback Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div
              className={`relative transition-transform duration-500 ${
                isHovered ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Football Field Background */}
              <div className="w-80 h-80 bg-[#2e7d32] rounded-full relative overflow-hidden border-4 border-white shadow-2xl">
                {/* Field Lines */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-1 bg-white opacity-50"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <div className="h-full w-1 bg-white opacity-50"></div>
                </div>

                {/* Cartoon Quarterback */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl animate-bounce">🏈</div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 text-2xl animate-pulse">⭐</div>
                <div className="absolute bottom-4 left-4 text-2xl animate-pulse delay-1000">🎯</div>
                <div className="absolute top-1/4 left-4 text-xl animate-pulse delay-500">🏆</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;