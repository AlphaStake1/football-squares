'use client';

import { Clock, TrendingUp } from 'lucide-react';

const SidebarAds = () => {
  const newsItems = [
    {
      id: 'news-1',
      title: 'NFL Week 12 Predictions',
      summary: 'Expert analysis on this week\'s biggest matchups and upset potential.',
      time: '2 hours ago',
      category: 'Analysis',
    },
    {
      id: 'news-2',
      title: 'Fantasy Waiver Wire Gems',
      summary: 'Hidden players that could make or break your playoff push.',
      time: '4 hours ago',
      category: 'Fantasy',
    },
  ];

  const adSlots = [
    {
      id: 'ad-1',
      title: 'Premium Ad Slot',
      size: '300x250',
      description: 'Banner Advertisement',
    },
    {
      id: 'ad-2', 
      title: 'Sponsored Content',
      size: '300x600',
      description: 'Skyscraper Advertisement',
    },
  ];

  return (
    <aside className="w-80 bg-white border-l border-gray-200 min-h-screen sticky top-16 overflow-y-auto sidebar-ads">
      <div className="p-6">
        {/* News Section */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-[#002244] mb-4 text-center flex items-center justify-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#ed5925]" />
            Latest News
          </h3>
          
          <div className="space-y-4">
            {newsItems.map((news) => (
              <article
                key={news.id}
                className="bg-[#faf9f5] rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200 cursor-pointer border border-gray-100"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs bg-[#004953] text-white px-2 py-1 rounded-full">
                    {news.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[#708090]">
                    <Clock className="w-3 h-3" />
                    {news.time}
                  </div>
                </div>
                
                <h4 className="font-semibold text-[#002244] mb-2 text-sm leading-tight">
                  {news.title}
                </h4>
                
                <p className="text-xs text-[#708090] leading-relaxed">
                  {news.summary}
                </p>
                
                <button className="text-xs text-[#ed5925] hover:text-[#d14a1f] font-medium mt-2 hover:underline">
                  Read More →
                </button>
              </article>
            ))}
          </div>
        </div>

        {/* Sponsored Content Section */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-bold text-[#002244] mb-6 text-center">
            Sponsored Content
          </h3>
          
          <div className="space-y-6">
            {adSlots.map((ad, index) => (
              <div
                key={ad.id}
                className="border-2 border-dashed border-[#708090] rounded-lg p-6 text-center bg-[#faf9f5] hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="text-[#708090] mb-3">
                  <div className="w-12 h-12 bg-[#ed5925] bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#ed5925] font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <h4 className="font-semibold text-[#002244] mb-2">
                    {ad.title}
                  </h4>
                  <p className="text-sm text-[#708090] mb-2">
                    {ad.description}
                  </p>
                  <span className="text-xs bg-[#004953] text-white px-2 py-1 rounded">
                    {ad.size}
                  </span>
                </div>
                
                <div className="mt-4 p-4 bg-white border border-gray-200 rounded">
                  <div className="text-xs text-[#708090] mb-2">Advertisement Space</div>
                  <div className={`w-full bg-gradient-to-br from-[#ed5925] to-[#96abdc] opacity-20 rounded flex items-center justify-center ${
                    ad.size === '300x600' ? 'h-48' : 'h-24'
                  }`}>
                    <span className="text-[#002244] font-semibold text-sm">
                      Your Ad Here
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact for Advertising */}
        <div className="mt-8 p-4 bg-[#004953] rounded-lg text-center">
          <h4 className="text-white font-bold mb-2">Advertise With Us</h4>
          <p className="text-[#96abdc] text-sm mb-4">
            Reach thousands of engaged football fans
          </p>
          <button className="bg-[#ed5925] hover:bg-[#d14a1f] text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200">
            Contact Sales
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SidebarAds;