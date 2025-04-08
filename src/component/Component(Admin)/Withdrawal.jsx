
// import { ChevronDown} from 'lucide-react';
import { useState } from 'react';
import { AiFillBank } from 'react-icons/ai';
import { BiSolidCreditCardAlt } from 'react-icons/bi';
import { Copy } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Withdrawal = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyAll = () => {
      const textToCopy = `A/c no: 13347900396403
  Branch: HABIB BANK LTD. (HBL)
  Name: Shafi Trader
  Payment Reference: Others or Miscellaneous;`
  
  
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    };

    const navigate= useNavigate()
    const handleback=()=>{
        navigate(-1)
        
    }

  return (
    <div className="min-h-screen p-4 bg-[#1E1E1E] text-white flex items-center justify-center ">
      <div className="w-full max-w-4xl border-2 border-[#2C2C2C]   flex bg-[#2C2C2C] rounded-lg overflow-hidden shadow-lg">
        {/* Deposit Methods Column */}
        <div className="w-1/3 border-2 p-2  border-r border-[#3C3C3C]">
          <div className="p-4 border-b border-[#3C3C3C]">
            <h2 className="text-xl font-bold">Withdrawal</h2>
          </div>
          
          <div className="divide-y divide-[#3C3C3C]">
            {/* USDT Method */}
            <div className="p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C]">
              <img 
                src="https://cryptologos.cc/logos/tether-usdt-logo.png" 
                alt="USDT icon" 
                className="w-6 h-6 mr-3 rounded-full"
              />
              <span>Skrill</span>
            </div>

            {/* Local Bank Transfer Method */}
            <div className="p-2 flex items-center cursor-pointer bg-[#1E1E1E]">
         
              <AiFillBank  className="w-6 h-6 mr-3 rounded-full"/>
              <span>Local Bank Transfer</span>
            </div>

            {/* Credit/Debit Card Method */}
            <div className="p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C]">
              <div className="flex mr-3">
            
                <BiSolidCreditCardAlt className='w-6 h-6' />
              </div>
              <span>Neteller</span>
            </div>

            {/* Crypto Payment Method */}
            <div className="p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C]">
              <div className="flex mr-3">
               
                <img 
                  src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" 
                  alt="Binance icon" 
                  className="w-6 h-6 -mr-1 rounded-full"
                />
           
              </div>
              <span>Binance pay</span>
            </div>

            {/* Ethereum Method */}
            <div className="p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C]">
              <img 
                src="https://cryptologos.cc/logos/ethereum-eth-logo.png" 
                alt="Ethereum icon" 
                className="w-6 h-6 mr-3 rounded-full"
              />
              <span>Stic pay</span>
            </div>

            <button
              onClick={handleback}
                className="bg-gray-700 hover:bg-gray-500 text-blue-400 px-4 py-2 mt-64 mx-1 rounded-lg transition"
              >
                Back
              </button>

          </div>

        </div>

<div className='w-2/3 px-10 py-3 '>
<div className="w-full max-w-md bg-[#2C2C2C] rounded-lg mx-2 space-y-1">
   

        {/* 2. Make a payment */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">How to Make a Withdrawal Using Bank Transfer</h2>
          <div className="bg-yellow-600/20 text-yellow-400 p-3 rounded-lg text-sm">
            <p>•Click Continue to enter bank details for withdrawal..</p>
            <p className="mt-2">• Open your online banking in a new tab and initiate a transfer to your registered bank account.</p>
            <p className="mt-2">• Ensure you use ONLY the provided bank details. Aone is not responsible for funds sent to the wrong account.</p>
          </div>
        </div>

<div className='flex justify-end '>
<Link to={"/profile/withdrawal/form"}>
        <button
                className="bg-gray-700 flex hover:bg-gray-500 text-blue-400 px-4 py-2 mt-64 mx-1 rounded-lg transition"
                >
                Next
              </button>
                  </Link>
                  </div>
       
      </div>
</div>
       
      </div>
    </div>
  );
};

export default Withdrawal;