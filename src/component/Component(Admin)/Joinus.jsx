
import { X, Copy } from 'lucide-react';

// import { Link } from 'react-router-dom';
import { useState } from 'react';
// import { Copy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Joinus = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyAll = () => {
      const textToCopy = `https://one.AoneTrade.org/a/88cn3enm4c`
  
  
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    };

    
    

    
    
  return (
    <div className="fixed inset-0 bg-[#23282B] flex items-center justify-center pt-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        {/* Header */}
        <div className="p-6 pb-0 flex  justify-between items-start ">
          <h2 className="text-2xl font-bold text-gray-700">Invite friends and earn money</h2>
        
          <button className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
         
        </div>
        
        {/* Referral Link Section */}
        <div className="mx-6 my-4 bg-amber-50 p-4 rounded-lg">
          <p className="text-center text-gray-700 mb-2">https://one.AoneTrade.org/a/88cn3enm4c</p>
          <div className="flex justify-center">
            <button
            onClick={handleCopyAll}
            className=" 
            text-blue-500 hover:text-blue-700 font-medium">
                   {/* <Copy className="mr-2" /> */}
                   {copied ? 'Copied!' : 'Copy link'}
            </button>

            
          
          </div>
        </div>
        
        {/* How it works Section */}
        <div className="px-6 pb-2">
          <h3 className="text-xl font-bold text-center mb-4 text-gray-700">How it works?</h3>
          
          <div className="flex justify-between items-start mb-4">
            {/* Step 1 */}
            <div className="flex flex-col items-center w-1/3">
              <div className="bg-[#253333] h-14 w-14 rounded-full p-3 mb-2">
              <Link color="white" size={24} />
              </div>
              <p className="text-center text-sm">Share your unique link with friends</p>
            </div>
            
            {/* Arrow */}
            <div className="flex items-center justify-center mt-3">
              <div className="text-gray-400">→</div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center w-1/3">
              <div className="bg-[#253333] rounded-full p-3 mb-2 relative">
                <div className="text-white font-bold transform -rotate-12">\\\\\\</div>
                <div className="absolute inset-0 flex items-center justify-center">
                </div>
              </div>
              <p className="text-center text-sm">Your friends become traders</p>
            </div>
            
            {/* Arrow */}
            <div className="flex items-center justify-center mt-3">
              <div className="text-gray-400">→</div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center w-1/3">
              <div className="bg-[#253333] rounded-full p-3 mb-2">
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                  ))}
                </div>
                <div className="h-1 bg-white mt-1 rounded-full"></div>
              </div>
              <p className="text-center text-sm">You get rewarded for their every trade</p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-4 flex justify-center">
            <Link to={"/"}>
          <button className="text-blue-500 hover:text-blue-700 font-medium">Join US</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Joinus;