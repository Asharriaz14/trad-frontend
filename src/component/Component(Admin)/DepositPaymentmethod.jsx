
// import { ChevronDown } from 'lucide-react';
import {  Check } from 'lucide-react';
import { AiFillBank } from 'react-icons/ai';
import { BiSolidCreditCardAlt } from 'react-icons/bi';
import { Link, useNavigate,  } from 'react-router-dom';

const DepositPaymentmethod = () => {
  const navigate= useNavigate()
     const handleback=()=>{
         navigate(-1)
         
     }
  return (
    <div className="min-h-screen p-4 bg-[#1E1E1E] text-white flex items-center justify-center ">
      <div className="w-full max-w-4xl border-2 border-[#2C2C2C]   flex bg-[#2C2C2C] rounded-lg overflow-hidden shadow-lg">
        {/* Deposit Methods Column */}
        <div className="w-1/3 border-2 p-2  border-r border-[#3C3C3C]">
          <div className="p-2 border-b border-[#3C3C3C]">
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
            <div className="p-2 flex items-center cursor-pointer bg-[#1E1E1E] ">
         
              <AiFillBank  className="w-6 h-6 mr-3 rounded-full "/>
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
          </div>

          <button
              onClick={handleback}
                className="bg-gray-700 hover:bg-gray-500 text-blue-400 px-4 py-2 mt-52 mx-1 rounded-lg transition"
              >
                Back
              </button>
          
        </div>

        {/* Deposit Instructions Column */}
        <div className="w-2/3 p-6">
          <div className="bg-green-600/20 text-green-400 p-3 rounded-lg mb-4 flex items-center">
            <Check className="mr-2" />
            <span>The connection is secured</span>
          </div>

          <h3 className="text-xl font-bold mb-4">
            How to make a deposit using bank transfer
          </h3>

          <ol className="space-y-3 mb-6 text-gray-300">
            <li>
              1. Please click continue to see our beneficiary bank details
            </li>
            <li>
              2. Please open your online banking in a new tab and initiate a transfer 
              using the provided credentials
            </li>
            <li>
              3. Please use ONLY the provided bank details. Aone do no bear 
              responsibility if client send to wrong account
            </li>
          </ol>

          <div className="text-sm text-gray-400 mb-4">
            <p>You may also carry out the transfer to the given credentials from your nearest bank branch or ATM machine</p>
          </div>

       

          <div className="mb-4">
            <div className="text-gray-400">Average deposit processing time:</div>
            <div>2 hours (up to 3 working days)</div>
          </div>
<Link to={"/wallet/deposit/account"}>
          <button className="w-full h-12 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Continue
          </button>
</Link>

          <div className="text-center text-sm text-gray-400 mt-2">
            Your bank may apply an administrative fee. Aone commission fee - 0%
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositPaymentmethod;