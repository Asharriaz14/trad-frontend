

// import React from 'react';

import { Link } from "react-router-dom";
import FAQ from "./faqs";

const AoneStatsInterface = () => {
  return (
    <div>

  
    <div className="relative container mx-auto max-w-7xl bg-black my-5 overflow-hidden">
      {/* Background Blue Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-1/3 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Grid */}
      <div className="  relative grid grid-cols-1 md:grid-cols-4 gap-8 p-8 max-w-7xl mx-auto ">
        {/* Client Accounts */}
        <div className="bg-black/50 hover:scale-110 border border-white/10 rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute inset-0 bg-blue-600/10 opacity-20 -z-10 p-10"></div>
          <h2 className="text-6xl font-bold text-white mb-4 ">11,200+</h2>
          <h6 className="text-xl  font-medium text-white ">Client accounts</h6>
          <p className="text-white/80 text-lg">
            Aone has been providing online trading services to clients since 1999 and it currently serves 173 countries worldwide.
          </p>
        </div>

        {/* Awards */}
        <div className="bg-black/50 border hover:scale-110  border-white/10 rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute inset-0 bg-blue-600/10 opacity-20 -z-10"></div>
          <h2 className="text-6xl font-bold text-white mb-4">123+</h2>
          
          <h6 className="text-xl  font-medium text-white ">Awards</h6>
          <p className="text-white/80 text-lg">
            Aone has received constant recognition in the industry, winning over 123 international awards to date for the quality of its services.
          </p>
        </div>

        {/* Customer Service */}
        <div className="bg-black/50 border border-white/10 hover:scale-110  rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute inset-0 bg-blue-600/10 opacity-20 -z-10"></div>
          <h2 className="text-6xl font-bold text-white mb-4">5-star</h2>
          
          <h6 className="text-xl  font-medium text-white ">Customer service</h6>
          <p className="text-white/80 text-lg">
            Our dedicated, multilingual customer service team works 24/5 to provide you with an exceptional level of support.
          </p>
        </div>

        {/* Industry Regulations */}
        <div className=" bg-black/50 border hover:scale-110  border-white/10 rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute inset-0 h-72 bg-blue-600/10 opacity-20 -z-10"></div>
          <h2 className="text-6xl font-bold text-center text-white mb-4">5</h2>
          
          <h6 className="text-xl  font-medium text-white ">Industry regulation</h6>
          <p className="text-white/80 text-lg ">
            Aone operates under strict regulatory oversight across multiple jurisdictions, including authorisation by the FCA in the UK  .
          </p>
        </div>
        
      </div>
    </div>

<FAQ/>

{/* Trade like A pro */}
    <div className=" container mx-auto flex items-center justify-center my-32 bg-white px-4">
    <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Trade Like A Pro!
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-8 px-4">
          Trade CFDs on a wide range of instruments, including popular Aone
          pairs, Futures, Indices, Metals, Energy, Shares and ETFs and 
          experience the global markets at your fingertips.
        </p>
        <Link to={"/register"}>
        <button 
          className="
          bg-blue-500 text-white 
          px-8 py-3 
          rounded-full 
          text-base 
          font-semibold 
          hover:bg-blue-600 
          transition-colors 
          duration-300 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-500 
          focus:ring-offset-2
          "
          >
          Register with the Pros
        </button>
          </Link>
      </div>
    </div>
    </div>



  );
};

export default AoneStatsInterface;


   