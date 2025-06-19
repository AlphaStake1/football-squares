import { Target, Square, Trophy } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Target,
      title: 'Pick a Board',
      description: 'Choose from available NFL game boards and find your perfect match.',
      color: 'bg-[#1b5e20]',
    },
    {
      icon: Square,
      title: 'Claim Your Square',
      description: 'Select your lucky square on the 10x10 grid and make it yours.',
      color: 'bg-[#4e2a1e]',
    },
    {
      icon: Trophy,
      title: 'Watch & Win',
      description: 'Cheer for your numbers as the game unfolds and collect your prizes.',
      color: 'bg-[#00a4ff]',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1b5e20] mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with Football Squares in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="text-center group hover:scale-105 transform transition-all duration-300"
            >
              {/* Step Number */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-[#ffd940] text-[#1b5e20] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#1b5e20] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#2e7d32] transition-colors duration-200 shadow-lg hover:shadow-xl">
            Start Playing Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;