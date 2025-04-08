

import { useState } from 'react';
import { Check, Eye, EyeOff } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCreateAccountMutation } from '../../redux/createaccountapi';
import {useNavigate} from "react-router-dom"
const OpenNewAccountType = () => {
  
  // Form state
  const [formData, setFormData] = useState({
    accountType: '', // Default account type
    leverage: '1:2',
    currency: 'USD',
    password: ''
  });
  
  const navigate= useNavigate()
  const handleback=()=>{
    navigate(-1)
  }
  // UI state
  const [showPassword, setShowPassword] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState('standard');
  
  // RTK Query mutation hook
  const [createAccount, { isLoading }] = useCreateAccountMutation();

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle account type selection
  const handleAccountSelect = (accountType) => {
    setSelectedAccount(accountType);
    setFormData(prevState => ({
      ...prevState,
      accountType
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Validate form data
      if (!formData.password) {
        toast.error('Please enter a password');
        return;
      }
      console.log(formData)
      // Submit data using RTK Query mutation
      const result = await createAccount(formData).unwrap();
      
      console.log(formData)
      console.log(formData.accountType)
      // Show success message
      toast.success('Account created successfully!');
      console.log(result)
      // Optional: Reset form
      setFormData({
        accountType: 'standard',
        leverage: '1:2',
        currency: 'USD',
        password: ''
      });
      
    } catch (error) {
      // Handle error
      toast.error(error?.data?.message || 'Failed to create account');
      console.error('Error creating account:', error);
    }
  };

  // Available options
  const leverageOptions = [
    '1:2', '1:20', '1:50', '1:100', '1:200', '1:400',
    '1:500', '1:600', '1:800', '1:1100', '1:1200', '1:unlimited'
  ];
  
  const currencies = ["PKR", "USD", "Riyal"];


  return (
    <div className="min-h-screen bg-[#23282B] p-4 0 m-auto">
      <div className="container mx-auto">
        {/* Back button area */}
        <div className="flex items-center mb-6">
          <button onClick={handleback} className="text-white mr-4">←</button>
          <h1 className="text-4xl font-bold text-white">Open New Account</h1>
          <div className="ml-auto">
            <select className="border rounded px-2 py-1">
              <option>MT5</option>
            </select>
          </div>
        </div>

        {/* Account Types Grid - Static boxes */}
        <div className="grid grid-cols-5 gap-4 h-[300px] mb-6">
          {/* Standard Account */}
          <div
            onClick={() => handleAccountSelect('standard')}
            className={`
              border rounded-lg p-4 cursor-pointer relative bg-[#2C3235]
              ${selectedAccount === 'standard' ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-200'}
            `}
          >
            <div className="absolute top-0 bg-[#00B894] text-xs px-2 py-1 text-white rounded-br-lg">
              Recommended
            </div>

            <h2 className="text-2xl font-bold text-center text-white mb-2">Standard Account</h2>
            <p className="text-sm text-white mb-4 h-12 text-center">Most popular! A great account for all types of traders</p>

            <div className="space-y-2">
              <div className="flex justify-between border-y-2 border-gray-400">
                <span className="text-gray-400">Minimum deposit</span>
                <span className="font-semibold text-white">10 USD</span>
              </div>
              <div className="flex justify-between border-b-2 border-gray-400">
                <span className="text-gray-400">Spread</span>
                <span className="font-semibold text-white">From 0.20</span>
              </div>
              <div className="flex justify-between border-b-2 border-gray-400">
                <span className="text-gray-400">Commission</span>
                <span className="font-semibold text-white">No commission</span>
              </div>
            </div>

            {selectedAccount === 'standard' && (
              <div className="absolute bottom-2 right-2 text-blue-500">
                <Check size={20} />
              </div>
            )}
          </div>

          {/* Pro Account */}
          <div
            onClick={() => handleAccountSelect('pro')}
            className={`
              border rounded-lg p-4 cursor-pointer relative bg-[#2C3235]
              ${selectedAccount === 'pro' ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-200'}
            `}
          >
            <div className="absolute top-0 bg-gray-500 text-xs px-2 py-1 text-white rounded-br-lg">
              Instant or market execution
            </div>

            <h2 className="text-2xl font-bold text-center text-white mb-2">Pro</h2>
            <p className="text-sm text-white mb-4 h-12 text-center">Zero commission and low spreads with both instant or market execution.</p>

            <div className="space-y-2">
              <div className="flex justify-between border-y-2 border-gray-400">
                <span className="text-gray-400">Minimum deposit</span>
                <span className="font-semibold text-white">500 USD</span>
              </div>
              <div className="flex justify-between border-b-2 border-gray-400">
                <span className="text-gray-400">Spread</span>
                <span className="font-semibold text-white">From 0.10</span>
              </div>
              <div className="flex justify-between border-b-2 border-gray-400">
                <span className="text-gray-400">Commission</span>
                <span className="font-semibold text-white">No commission</span>
              </div>
            </div>

            {selectedAccount === 'pro' && (
              <div className="absolute bottom-2 right-2 text-blue-500">
                <Check size={20} />
              </div>
            )}
          </div>

          {/* Raw spread Account */}
          <div
            onClick={() => handleAccountSelect('rawSpread')}
            className={`
              border rounded-lg p-4 cursor-pointer relative bg-[#2C3235]
              ${selectedAccount === 'rawSpread' ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-200'}
            `}
          >
            <div className="absolute top-0 bg-red-500 text-xs px-2 py-1 text-white rounded-br-lg">
              Professional
            </div>

            <h2 className="text-2xl font-bold text-center text-white mb-2">Raw spread</h2>
            <p className="text-sm text-white mb-4 h-12 text-center">Low raw spreads and a low fixed commission</p>

            <div className="space-y-2">
              <div className="flex justify-between border-y-2 border-gray-400">
                <span className="text-gray-400">Minimum deposit</span>
                <span className="font-semibold text-white">500 USD</span>
              </div>
              <div className="flex justify-between border-b-2 border-gray-400">
                <span className="text-gray-400">Spread</span>
                <span className="font-semibold text-white">From 0.00</span>
              </div>
              <div className="flex justify-between border-b-2 border-gray-400">
                <span className="text-gray-400">Commission</span>
                <span className="font-semibold text-white">To 3.50 USD</span>
              </div>
            </div>

            {selectedAccount === 'rawSpread' && (
              <div className="absolute bottom-2 right-2 text-blue-500">
                <Check size={20} />
              </div>
            )}
          </div>

          {/* Zero Account 1 */}
          <div
            onClick={() => handleAccountSelect('zero')}
            className={`
              border rounded-lg p-4 cursor-pointer relative bg-[#2C3235]
              ${selectedAccount === 'zero' ? 'border-blue-500 ring-2 ring-blue-300' : 'border-2 border-red-700'}
            `}
          >
            <div className="absolute top-0 bg-red-500 text-xs px-2 py-1 text-white rounded-br-lg">
              Professional
            </div>

            <h2 className="text-2xl font-bold text-center text-white mb-2">Zero</h2>
            <p className="text-sm text-white mb-4 h-12 text-center">Get 0 spreads for 95% of the day on 30 pairs</p>

            <div className="space-y-2">
              <div className="flex justify-between border-y-2 border-gray-400">
                <span className="text-gray-400">Minimum deposit</span>
                <span className="font-semibold text-white">500USD</span>
              </div>
              <div className="flex justify-between border-b-2 border-gray-400">
                <span className="text-gray-400">Spread</span>
                <span className="font-semibold text-white">From 0.00</span>
              </div>
              <div className="flex justify-between border-b-2 border-gray-400">
                <span className="text-gray-400">Commission</span>
                <span className="font-semibold text-white">0.05 USD</span>
              </div>
            </div>

            {selectedAccount === 'zero' && (
              <div className="absolute bottom-2 right-2 text-blue-500">
                <Check size={20} />
              </div>
            )}
          </div>

          {/* Standard Cent Account */}
          <div
            onClick={() => handleAccountSelect('standardCent')}
            className={`
              border rounded-lg p-4 cursor-pointer relative bg-[#2C3235]
              ${selectedAccount === 'standardCent' ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-200'}
            `}
          >
            <div className="absolute top-0 bg-blue-500 text-xs px-2 py-1 text-white rounded-br-lg">
              Best
            </div>

            <h2 className="text-2xl font-bold text-center text-white mb-2">Standard Cent</h2>
            <p className="text-sm text-white mb-4 h-12 text-center">Standard account with micro lots instead</p>

            <div className="space-y-2">
              <div className="flex justify-between border-y-2 border-gray-400">
                <span className="text-gray-400">Minimum deposit</span>
                <span className="font-semibold text-white">10 USD</span>
              </div>
              <div className="flex justify-between border-b-2 border-gray-400">
                <span className="text-gray-400">Spread</span>
                <span className="font-semibold text-white">From 0.30</span>
              </div>
              <div className="flex justify-between border-b-2 border-gray-400">
                <span className="text-gray-400">No Commission</span>
                <span className="font-semibold text-white">From</span>
              </div>
            </div>

            {selectedAccount === 'standardCent' && (
              <div className="absolute bottom-2 right-2 text-blue-500">
                <Check size={20} />
              </div>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            {/* leverage */}
            <div>
              <label className="block text-lg text-white my-2">Max leverage <span className='text-red-500'>*</span></label>
              <div className="relative">
                <select
                  className="w-full p-2 border-2 text-white bg-[#1E1E1E] border-gray-700 rounded appearance-none pr-8"
                  value={formData.leverage}
                  name="leverage"
                  onChange={handleChange}
                >
                  {leverageOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* currency */}
            <div>
              <label className="block text-lg text-white my-2">Currency <span className='text-red-500'>*</span></label>
              <div className="relative">
                <select
                  className="w-full p-2 bg-[#1E1E1E] text-gray-300 border-2 border-gray-700 rounded appearance-none pr-8"
                  value={formData.currency}
                  name="currency"
                  onChange={handleChange}
                >
                  {currencies.map(currency => (
                    <option key={currency} value={currency}>{currency}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* password */}
          <div className="mb-6">
            <label className="block text-lg text-white my-2">Create a password for the account</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                name="password"
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full p-2 border-2 text-white border-gray-700 bg-[#1E1E1E] rounded text-md"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOff size={20} className="text-gray-500" />
                ) : (
                  <Eye size={20} className="text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className={`bg-[#23282B] text-xl hover:text-white hover:bg-[#F19e03] w-full border-2 border-[#F19e03] font-semibold text-[#F19e03] px-4 py-2 rounded-lg transition ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Creating account...' : 'Create an account'}
          </button>
        </form>
        
        {/* Toast container for notifications */}
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      </div>
    </div>
  );
};

export default OpenNewAccountType;