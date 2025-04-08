import  { useState } from 'react';

const ContactDetail = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    streetAddress: '',
    postalCode: '',
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-[#1E1E1E] min-h-screen flex items-center justify-center p-4">
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-4xl  "
      >
        <h2 className="text-white text-2xl font-semibold text-center py-4">Contact details</h2>
        {/* <div className=''> */}
       

    
        {/* First Name */}
        <div className="m-3 mx-auto w-96 ">
          <input 
            type="Number"
            name="Number"
            value={formData.Number}
            onChange={handleChange}
            placeholder="Enter Number"
            className="mx-auto w-96 text-sm  bg-[#1E1E1E] border-2 border-[#3C3C3C] text-white p-2.5 rounded-sm placeholder-gray-500 focus:outline-none focus:border-blue-400"
            required
          />
          {/* <p className="text-red-600 text-xs mt-1">This field is mandatory.</p> */}
        </div>

        {/* Last Name */}
        <div className="w-96 mx-auto m-4 ">
          <input 
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className="w-full text-sm  bg-[#1E1E1E] border-2 border-[#3C3C3C] text-white p-2.5 rounded-sm placeholder-gray-500 focus:outline-none focus:border-blue-400"
            required
          />
          {/* <p className="text-red-600 text-xs mt-1">This field is mandatory.</p> */}
        </div>

       


        {/* Submit Button */}
        <div className="px-4 pb-4 flex justify-center">
          <button 
            type="submit"
            className="w-44 rounded-xl   bg-gray-800 text-white p-2 hover:bg-gray-700 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactDetail;