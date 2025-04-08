
// import { ChevronDown} from 'lucide-react';
import { useState } from 'react';
import { AiFillBank } from 'react-icons/ai';
import { BiSolidCreditCardAlt } from 'react-icons/bi';
import { Copy } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Depositpaymentaccount = () => {
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
            <h2 className="text-xl font-bold">Deposit</h2>
          </div>
          
          <div className="divide-y divide-[#3C3C3C]">
            {/* USDT Method */}
            <div className="p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C]">
              <img 
                src="https://cryptologos.cc/logos/tether-usdt-logo.png" 
                alt="USDT icon" 
                className="w-6 h-6 mr-3 rounded-full"
              />
              <span>USDT</span>
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
              <span>Credit/Debit Card</span>
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
              <span>Crypto Payment</span>
            </div>

            {/* Ethereum Method */}
            <div className="p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C]">
              <img 
                src="https://cryptologos.cc/logos/ethereum-eth-logo.png" 
                alt="Ethereum icon" 
                className="w-6 h-6 mr-3 rounded-full"
              />
              <span>Ethereum</span>
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
        {/* 1. FxPro Partner's Account Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">1. FxPro partner's account information</h2>
          <div className="bg-[#3C3C3C] rounded-lg p-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">A/c no</span>
              <span>13347900396403</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Branch</span>
              <span>HABIB BANK LTD. (HBL)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Name</span>
              <span>Shafi Trader</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Payment Reference</span>
              <span>Others or Miscellaneous</span>
            </div>
          
          </div>
          <button 
            onClick={handleCopyAll}
            className="w-full bg-blue-600 text-white h-10 rounded-lg flex items-center justify-center hover:bg-blue-700 transition"
          >
            <Copy className="mr-2" />
            {copied ? 'Copied!' : 'Copy all'}
          </button>
        </div>

        {/* 2. Make a payment */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">2. Make a payment using your banking app or ATM</h2>
          <div className="bg-yellow-600/20 text-yellow-400 p-3 rounded-lg text-sm">
            <p>• Please carefully note the Bank and Payment Reference in your transfer as this will help ensure your funds are correctly allocated.</p>
            <p className="mt-2">• If the details provided are incorrect, your deposit may be delayed or rejected. FxPro reserves the right to ask additional information and/or supporting documentation.</p>
          </div>
        </div>

        {/* 3. Confirm Payment */}
        <div className="space-y-4">
          <h2 className="text-xl my-2 font-semibold">3. Have you made a payment? Then confirm it</h2>
          <Link to={"/wallet/deposit/money"}>
          <button className="w-full h-10 bg-blue-600 text-white  rounded-lg hover:bg-blue-700 transition">
            Yes, I made a payment
          </button>
          </Link>
        </div>
      </div>
</div>
       
      </div>
    </div>
  );
};

export default Depositpaymentaccount;