'use client';

import { useState } from 'react';
import { ExternalLink, Users, Plus, BookOpen, BarChart3 } from 'lucide-react';

const FantasyLinksGrid = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [votes, setVotes] = useState({
    start: 127,
    join: 89
  });

  const handleVote = (option: 'start' | 'join') => {
    if (hasVoted) return;
    
    setSelectedOption(option);
    setHasVoted(true);
    setVotes(prev => ({
      ...prev,
      [option]: prev[option] + 1
    }));
  };

  const totalVotes = votes.start + votes.join;
  const startPercentage = Math.round((votes.start / totalVotes) * 100);
  const joinPercentage = Math.round((votes.join / totalVotes) * 100);

  const fantasyLinks = [
    {
      name: 'ESPN Fantasy',
      url: 'https://www.espn.com/fantasy/football/',
      description: 'The most popular fantasy platform with comprehensive stats, expert analysis, and social features.',
      color: 'bg-[#ed5925]',
      logo: 'ESPN',
    },
    {
      name: 'NFL Fantasy',
      url: 'https://fantasy.nfl.com/',
      description: 'Official NFL fantasy football with real-time scoring and exclusive NFL content and insights.',
      color: 'bg-[#002244]',
      logo: 'NFL',
    },
    {
      name: 'Yahoo Fantasy',
      url: 'https://football.fantasysports.yahoo.com/',
      description: 'User-friendly interface with great mobile app and innovative features for fantasy football.',
      color: 'bg-[#96abdc]',
      logo: 'YAHOO',
    },
    {
      name: 'Sleeper',
      url: 'https://sleeper.com/',
      description: 'Modern fantasy platform with social features, custom scoring, and dynasty league support.',
      color: 'bg-[#004953]',
      logo: 'SLEEPER',
    },
    {
      name: 'CBS Sports Fantasy',
      url: 'https://www.cbssports.com/fantasy/football/',
      description: 'Comprehensive fantasy platform with expert advice, rankings, and detailed player analysis.',
      color: 'bg-[#8d594d]',
      logo: 'CBS',
    },
    {
      name: 'DraftSharks',
      url: 'https://www.draftsharks.com/',
      description: 'Advanced fantasy tools with draft kits, rankings, and expert analysis for serious players.',
      color: 'bg-[#708090]',
      logo: 'SHARKS',
    },
  ];

  return (
    <section id="fantasy" className="py-20 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Polling Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#002244] mb-4">
            Join or Start a Fantasy League
          </h2>
          <p className="text-xl text-[#708090] max-w-3xl mx-auto">
            Help us understand what you're looking for in crypto-powered fantasy football
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BarChart3 className="w-8 h-8 text-[#ed5925]" />
              <h3 className="text-3xl font-bold text-[#002244]">
                Community Poll
              </h3>
            </div>
            <p className="text-lg text-[#708090] max-w-2xl mx-auto">
              Would you be interested in starting your own crypto fantasy league or joining an existing one?
            </p>
          </div>

          {!hasVoted ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button 
                onClick={() => handleVote('start')}
                className="bg-gradient-to-r from-[#ed5925] to-[#96abdc] text-white px-8 py-4 rounded-full font-bold text-lg hover:from-[#d14a1f] hover:to-[#7a95d1] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center gap-3 min-w-[200px] justify-center"
              >
                <Plus className="w-6 h-6" />
                Start a League
              </button>
              <button 
                onClick={() => handleVote('join')}
                className="bg-[#004953] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#003a42] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center gap-3 min-w-[200px] justify-center"
              >
                <Users className="w-6 h-6" />
                Join a League
              </button>
            </div>
          ) : (
            <div className="mb-8">
              <div className="text-center mb-6">
                <p className="text-lg font-semibold text-[#002244] mb-2">
                  Thanks for voting! Here are the current results:
                </p>
                <p className="text-sm text-[#708090]">
                  {totalVotes} total votes
                </p>
              </div>

              <div className="space-y-4 max-w-md mx-auto">
                {/* Start League Results */}
                <div className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  selectedOption === 'start' 
                    ? 'border-[#ed5925] bg-gradient-to-r from-[#ed5925] to-[#96abdc] bg-opacity-10' 
                    : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Plus className="w-5 h-5 text-[#ed5925]" />
                      <span className="font-semibold text-[#002244]">Start a League</span>
                      {selectedOption === 'start' && (
                        <span className="text-xs bg-[#ed5925] text-white px-2 py-1 rounded-full">Your Vote</span>
                      )}
                    </div>
                    <span className="font-bold text-[#002244]">{startPercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-[#ed5925] to-[#96abdc] h-3 rounded-full transition-all duration-500"
                      style={{ width: `${startPercentage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-[#708090] mt-1">{votes.start} votes</p>
                </div>

                {/* Join League Results */}
                <div className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  selectedOption === 'join' 
                    ? 'border-[#004953] bg-[#004953] bg-opacity-10' 
                    : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#004953]" />
                      <span className="font-semibold text-[#002244]">Join a League</span>
                      {selectedOption === 'join' && (
                        <span className="text-xs bg-[#004953] text-white px-2 py-1 rounded-full">Your Vote</span>
                      )}
                    </div>
                    <span className="font-bold text-[#002244]">{joinPercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-[#004953] h-3 rounded-full transition-all duration-500"
                      style={{ width: `${joinPercentage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-[#708090] mt-1">{votes.join} votes</p>
                </div>
              </div>
            </div>
          )}

          <div className="text-center">
            <button className="bg-white border-2 border-[#708090] text-[#708090] px-6 py-3 rounded-full font-semibold hover:bg-[#708090] hover:text-white transition-all duration-200 inline-flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Learn More
            </button>
          </div>
        </div>

        {/* External Fantasy Sites Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-[#002244] mb-4">
            Check Out Other Fantasy Football Sites
          </h3>
          <p className="text-lg text-[#708090] max-w-2xl mx-auto">
            Explore these popular fantasy platforms for additional leagues and features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fantasyLinks.map((link, index) => (
            <div
              key={link.name}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
            >
              {/* Header with Platform Name */}
              <div className={`${link.color} h-20 flex items-center justify-center`}>
                <div className="text-center">
                  <div className="text-white font-bold text-lg mb-1">
                    {link.name}
                  </div>
                  <div className="text-white text-xs opacity-75 font-semibold tracking-wider">
                    {link.logo}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[#708090] mb-6 leading-relaxed">
                  {link.description}
                </p>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ed5925] to-[#96abdc] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#d14a1f] hover:to-[#7a95d1] transition-all duration-200 group-hover:scale-105 transform"
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