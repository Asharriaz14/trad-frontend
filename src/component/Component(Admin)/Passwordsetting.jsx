import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Passwordsetting = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');
  
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatNewPassword, setShowRepeatNewPassword] = useState(false);

  const togglePasswordVisibility = (field) => {
    switch(field) {
      case 'current':
        setShowCurrentPassword(!showCurrentPassword);
        break;
      case 'new':
        setShowNewPassword(!showNewPassword);
        break;
      case 'repeat':
        setShowRepeatNewPassword(!showRepeatNewPassword);
        break;
    }
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    // Add password change logic here
    if (newPassword !== repeatNewPassword) {
      alert("Passwords do not match");
      return;
    }
    // Implement password change API call
  };

  return (
    <div className="min-h-screen bg-[#23282B]  flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#23282B] rounded-lg p-6 shadow-lg">
        <h2 className="text-white text-2xl font-bold mb-4 text-center">Change password</h2>
        <p className="text-gray-400 text-sm mb-6 text-center">
          Please note that after changing your password, you will be automatically logged out of all devices
        </p>

        <form onSubmit={handleChangePassword} className="space-y-4">
          <div className="relative">
            <input 
              type={showCurrentPassword ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Current password"
              className="w-full bg-[#1E1E1E] text-white p-3 rounded border-1 hover:border-blue-500 border-gray-700 pr-10"
              required
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('current')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showCurrentPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="relative">
            <input 
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New password"
              className="w-full bg-[#1E1E1E] text-white p-3 rounded border-1 hover:border-blue-500 border-gray-700 pr-10"
              required
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('new')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 border-1 hover:border-blue-500 text-gray-400 hover:text-white"
            >
              {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="relative">
            <input 
              type={showRepeatNewPassword ? "text" : "password"}
              value={repeatNewPassword}
              onChange={(e) => setRepeatNewPassword(e.target.value)}
              placeholder="Repeat new password"
              className="w-full bg-[#1E1E1E] text-white p-3 border-1 hover:border-blue-500 rounded  border-gray-700 pr-10"
              required
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('repeat')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showRepeatNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button 
            type="submit"
            className="w-full bg-gray-600 text-white p-3 rounded hover:bg-gray-700 transition duration-300"
          >
            Change password
          </button>


        </form>
      </div>
    </div>
  );
};

export default Passwordsetting;