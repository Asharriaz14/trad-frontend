

import React, { useState } from 'react';
import { useSendmesagesMutation } from '../redux/messagesapi';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [sendMessage, { isLoading, isSuccess, isError, error }] = useSendmesagesMutation();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendMessage(formData).unwrap();
      // Reset form after successful submission
      if (!isError) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }
    } catch (err) {
      console.error('Failed to send message:', err);
    }
  };

  return (
    <div className="w-full bg-black text-white py-10 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative Dots */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="h-2 w-2 rounded-full bg-teal-400"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col">
            <p className="text-sm mb-2">Contact Us</p>
            <h2 className="text-4xl font-bold text-white mb-4">GET IN TOUCH WITH US</h2>
            <p className="text-gray-300 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut 
              labore e dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation 
              ullamco
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="border border-gray-700 rounded-lg p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Our Location</h3>
                  <p className="text-sm">Alhafeez excutive third floor office</p>
                  <p className="text-sm">No#10 G11 Lahore, Pakistan.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="border border-gray-700 rounded-lg p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone Number</h3>
                  <p className="text-sm">(+92)324 9999009</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="border border-gray-700 rounded-lg p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email Address</h3>
                  <p className="text-sm"><span className="text-red-500">info@</span>Aonetrade.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-lg">
            {isSuccess && (
              <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Message sent successfully!
              </div>
            )}
            
            {isError && (
              <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Error: {error?.data?.message || "Failed to send message"}
              </div>
            )}
            
            <div className="flex flex-col space-y-4">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800"
                required
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email" 
                className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800"
                required
              />
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone" 
                className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800"
                required
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message" 
                rows={5} 
                className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800"
                required
              ></textarea>
              <button 
                type="submit"
                disabled={isLoading}
                className={`${isLoading ? 'bg-gray-500' : 'bg-gray-900 hover:bg-gray-800'} text-white py-3 rounded-lg transition`}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;