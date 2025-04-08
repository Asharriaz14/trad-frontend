

// import React from 'react';
import { Link } from 'react-router-dom';
import MarketTickers from './MarketTickers';

const TradingFeatures = () => {

  const features = [
    {
      title: 'TIGHT SPREADS',
      subtitle: 'From 0',
      description: 'Your trading costs stay predictable and low, even in high-volatility markets.'
    },
    {
      title: 'HIGH LEVERAGE',
      subtitle: '1:Unlimited',
      description: 'Flexible leverage to suit any trading style, from low-risk to high-reward strategies.',
      highlight: true
    },
    {
      title: 'ACCESS',
      subtitle: '2100+ Assets',
      description: 'Trade any instrument you want! Missing something? Let us know, and we\'ll add it.'
    },
    {
      title: 'DEDICATED SUPPORT',
      subtitle: '24/5',
      description: 'We are here for guidance and support whenever you need it.'
    },
    {
      title: 'TRADING APP',
      subtitle: '5* Rated',
      description: 'Trade on the go with an intuitive award-winning app packed with features.'
    },
    {
      title: 'TRADING COMPETITION',
      subtitle: '$10,000',
      description: 'Join our Exclusive Promo. Get a Credit Bonus, Trade & Win Big!'
    }
  ];

  return (
    <div>

<MarketTickers/>
  
    <div className="container mx-auto max-w-7xl mt-20 px-4 py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`
              border rounded-lg p-6 relative overflow-hidden group
              transition-all duration-300 
              ${feature.highlight ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}
            `}
          >
            {/* Hover effect blue line */}
            <div className="absolute top-0 left-0 w-10 h-1 bg-blue-500 
              group-hover:w-[150px] transition-all duration-500 ease-in-out">
            </div>

            {feature.highlight && (
              <span className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                New Offering
              </span>
            )}
            <h3 className="text-md font-semibold text-black mb-2 uppercase tracking-wider">
              {feature.title}
            </h3>
            <h2 className="text-3xl font-bold mb-4">{feature.subtitle}</h2>
            <h5 className="text-black text-sm font-normal">{feature.description}</h5>
          </div>
        ))}
      </div>

{/* container */}
      <div className="bg-blue-600 h-56 my-5 flex items-center justify-between px-10 py-6">
      <h1 className="text-white text-4xl font-bold">
        Trade Forex, Indices, Stocks and 
        <br />
        more with Aone - the worlds
        <br />
        No. 1 broker
      </h1>
      <Link to={"/register"}>
      <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
        Trade like a Pro
      </button>
      </Link>
    </div>
    </div>
    </div>
  );
};

export default TradingFeatures;