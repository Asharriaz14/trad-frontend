


import { useState, } from 'react';
import { AiFillBank } from 'react-icons/ai';
import { BiSolidCreditCardAlt } from 'react-icons/bi';
import {useNavigate} from 'react-router-dom';
// import { useSendMoneyMutation } from '../../redux/Transactionapi';

const WithdrawalForm = () => {

  const [amount, setAmount] = useState(0);
const navigate= useNavigate()
const handleback=()=>{
  navigate(-1)
}
  return (

    <div className="min-h-screen p-4 bg-[#1E1E1E] text-white flex items-center justify-center ">

      <div className="w-full max-w-4xl border-2 border-[#2C2C2C] flex bg-[#2C2C2C] rounded-lg overflow-hidden shadow-lg">
        {/* Deposit Methods Column */}
        <div className="w-1/3 border-2 p-2 border-r border-[#3C3C3C]">
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
              <span>USDT</span>
            </div>

            {/* Local Bank Transfer Method */}
            <div className="p-2 flex items-center cursor-pointer bg-[#1E1E1E]">
              <AiFillBank className="w-6 h-6 mr-3 rounded-full" />
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
        </div>

        <div className='w-2/3 px-10 py-3'>


          {/* <div className="max-w-md mx-auto p-6 bg-[#2C2C2C] rounded shadow"> */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white">Withdrawal</h1>
            <a href="#" className="text-sm text-blue-500">See all payment methods</a>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-white  mb-1">Payment method</label>
              <div className="relative">
                <select className="w-full p-2 border bg-[#1E1E1E] text-gray-300 border-gray-300 rounded appearance-none pr-8">
                  <option>Pakistan Local Bank Transfer</option>
                  <option>UBL Bank Transfer</option>
                  <option>National Bank Transfer</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-white mb-1">Currency</label>
              <div className="relative">
                <select className="w-full p-2 border bg-[#1E1E1E] text-gray-300 border-gray-300 rounded appearance-none pr-8">
                  <option>USD</option>
                  <option>PKR</option>
                  <option>Riyal</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#2C2C2C] border-dashed border-2 border-blue-400 p-4 mb-6">
            <p className="font-medium text-lg text-gray-400">Transactions will take longer on weekends and holidays</p>
            <p className="text-sm text-gray-400">It may take up to 2 days for the funds to arrive in your account due to delays on the provider's side</p>
          </div>

          <div className="mb-6 ">
            <label className="block text-sm text-white mb-1">From account</label>
            <div className="flex justify-between p-2 border border-gray-300 rounded">
              <span className="text-gray-700">MTS_174243184</span>
              <span className="text-gray-700">0.00 USD</span>
            </div>
          </div>
          <div>
            <label className="block text-sm text-white  my-2">Payment method</label>
            <div className="relative">
              <select className="w-full p-2 border bg-[#1E1E1E] text-gray-300 border-gray-300 rounded appearance-none pr-8">
                <option>Pakistan Local Bank Transfer</option>
                <option>UBL Bank Transfer</option>
                <option>National Bank Transfer</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-white mb-1">Amount</label>
            <div className="relative ">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 bg-[#1E1E1E] rounded text-2xl"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                USD
              </div>
            </div>
            <div className="text-xs text-white mt-1">
              35.00 - 2,800.00 USD
            </div>
          </div>

          <div className="flex justify-between mb-6">
            <span className="text-sm text-white">To be withdrawn</span>
            <span className="text-xl text-white font-bold">0.00 PKR</span>
          </div>
          <div className='flex justify-between'>


            <button
            onClick={handleback}
              type="button"
              className="bg-gray-700 hover:bg-gray-500 text-blue-400 px-4 py-2 rounded-lg transition"
            >

              Back
            </button>
            <button
              type="button"
              className="bg-gray-700 hover:bg-gray-500 text-blue-400 px-4 py-2 rounded-lg transition"
            >
              continue
            </button>
          </div>
        </div>


      </div>
    </div>

    // </div>
  );
};

export default WithdrawalForm;


