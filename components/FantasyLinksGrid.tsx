'use client';

import { ExternalLink } from 'lucide-react';

const FantasyLinksGrid = () => {
  const fantasyLinks = [
    {
      name: 'ESPN Fantasy',
      url: 'https://www.espn.com/fantasy/football/',
      description: 'The most popular fantasy platform with comprehensive stats, expert analysis, and social features.',
      color: 'bg-red-500',
    },
    {
      name: 'NFL Fantasy',
      url: 'https://fantasy.nfl.com/',
      description: 'Official NFL fantasy football with real-time scoring and exclusive NFL content and insights.',
      color: 'bg-blue-600',
    },
    {
      name: 'Yahoo Fantasy',
      url: 'https://football.fantasysports.yahoo.com/',
      description: 'User-friendly interface with great mobile app and innovative features for fantasy football.',
      color: 'bg-purple-600',
    },
    {
      name: 'Sleeper',
      url: 'https://sleeper.com/',
      description: 'Modern fantasy platform with social features, custom scoring, and dynasty league support.',
      color: 'bg-green-600',
    },
    {
      name: 'CBS Sports Fantasy',
      url: 'https://www.cbssports.com/fantasy/football/',
      description: 'Comprehensive fantasy platform with expert advice, rankings, and detailed player analysis.',
      color: 'bg-blue-800',
    },
  ];

  return (
    <section id="fantasy" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1b5e20] mb-4">
            Ready for Fantasy Football?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take your game to the next level with these top fantasy football platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fantasyLinks.map((link, index) => (
            <div
              key={link.name}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
            >
              {/* Header with Logo Placeholder */}
              <div className={`${link.color} h-20 flex items-center justify-center`}>
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {link.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {link.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {link.description}
                </p>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#ffd940] text-[#1b5e20] px-6 py-3 rounded-lg font-semibold hover:bg-[#ffed4a] transition-colors duration-200 group-hover:scale-105 transform"
                  aria-label={`Open ${link.name} in new tab`}
                >
                  Play Now
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FantasyLinksGrid;