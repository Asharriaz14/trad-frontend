// // import React, { useState } from 'react';
// // import { XMarkIcon, CameraIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';

// // const VerifyResidence = ({ onClose }) => {
// //   const [selectedDocument, setSelectedDocument] = useState('');

// //   return (
// //     <div className="fixed inset-0 bg-[#23282B] bg-opacity-50 flex items-center justify-center z-50">
// //       <div className="bg-white w-full max-w-md rounded-lg shadow-lg overflow-hidden">
// //         {/* Header */}
// //         <div className="flex items-center justify-between p-4 border-b">
// //           <h2 className="text-lg font-medium">Verify residence</h2>
// //           <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
// //             <XMarkIcon className="w-5 h-5" />
// //           </button>
// //         </div>

// //         {/* Content */}
// //         <div className="p-4">
// //           <div className="flex items-start mb-4">
// //             <div className="mr-2 mt-0.5">
// //               <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
// //                 <div className="w-2 h-2 rounded-full bg-blue-500"></div>
// //               </div>
// //             </div>
// //             <p className="text-sm text-gray-600">
// //               The document for Proof of Residence must be different from the document used to verify identity.
// //             </p>
// //           </div>

// //           <p className="text-sm font-medium mb-3">Please upload only one of the following Proof of Residence documents:</p>

// //           <div className="space-y-2 mb-4">
// //             <div className="flex items-center">
// //               <input
// //                 type="radio"
// //                 id="card"
// //                 name="document"
// //                 value="card"
// //                 onChange={() => setSelectedDocument('card')}
// //                 className="w-4 h-4 text-blue-600"
// //               />
// //               <label htmlFor="card" className="ml-2 text-sm text-gray-700">Credit card and bank</label>
// //             </div>
// //             <div className="flex items-center">
// //               <input
// //                 type="radio"
// //                 id="driving"
// //                 name="document"
// //                 value="driving"
// //                 onChange={() => setSelectedDocument('driving')}
// //                 className="w-4 h-4 text-blue-600"
// //               />
// //               <label htmlFor="driving" className="ml-2 text-sm text-gray-700">Driving license (front and back)</label>
// //             </div>
// //             <div className="flex items-center">
// //               <input
// //                 type="radio"
// //                 id="license"
// //                 name="document"
// //                 value="license"
// //                 onChange={() => setSelectedDocument('license')}
// //                 className="w-4 h-4 text-blue-600"
// //               />
// //               <label htmlFor="license" className="ml-2 text-sm text-gray-700">Government identification (such as national ID or Passport)</label>
// //             </div>
// //             <div className="flex items-center">
// //               <input
// //                 type="radio"
// //                 id="utility"
// //                 name="document"
// //                 value="utility"
// //                 onChange={() => setSelectedDocument('utility')}
// //                 className="w-4 h-4 text-blue-600"
// //               />
// //               <label htmlFor="utility" className="ml-2 text-sm text-gray-700">Utility bill (gas, electric, water, waste, mobile phone, internet, or cable bill) issued in the last 3 months</label>
// //             </div>
// //           </div>

// //           <div className="mb-4">
// //             <p className="text-sm font-medium mb-3">Take a photo of your chosen document</p>
// //             <div className="flex items-start mb-4">
// //               <div className="mr-2 mt-0.5">
// //                 <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
// //                   <div className="w-2 h-2 rounded-full bg-blue-500"></div>
// //                 </div>
// //               </div>
// //               <p className="text-sm text-gray-600">
// //                 Make sure the document shows your full name, full address and issue date clearly.
// //               </p>
// //             </div>

// //             <div className="grid grid-cols-2 gap-4 mb-4">
// //               <div>
// //                 <div className="border rounded p-3 h-32 flex flex-col items-center justify-center">
// //                   <div className="border-b border-dashed w-full pb-2 mb-2">
// //                     <div className="bg-gray-200 h-12 w-full rounded"></div>
// //                   </div>
// //                   <div className="text-xs text-gray-500 text-center">
// //                     <p className="font-medium text-green-600">Do:</p>
// //                     <p>Photo is clear and sharp</p>
// //                     <p>All corners are visible</p>
// //                     <p>Text is large and clearly readable</p>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div>
// //                 <div className="border rounded p-3 h-32 flex flex-col items-center justify-center">
// //                   <div className="border-b border-dashed w-full pb-2 mb-2">
// //                     <div className="bg-gray-200 h-12 w-full rounded"></div>
// //                   </div>
// //                   <div className="text-xs text-gray-500 text-center">
// //                     <p className="font-medium text-red-600">Don't:</p>
// //                     <p>Photo is blurry and not focused</p>
// //                     <p>Flash glare makes text hard to read</p>
// //                     <p>Top and/or bottom are cut off</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="flex items-center justify-center border-2 border-dashed border-gray-300 p-6 rounded-lg">
// //               <div className="text-center">
// //                 <div className="flex justify-center mb-2">
// //                   <ArrowUpTrayIcon className="h-6 w-6 text-white" />
// //                 </div>
// //                 <p className="text-sm text-gray-500 mb-1">Upload your Proof of Residence document</p>
// //                 <div className="flex justify-center mt-4">
// //                   <button className="flex items-center text-blue-500 text-sm">
// //                     <CameraIcon className="h-4 w-4 mr-1" />
// //                     <span>Upload documents with your phone</span>
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Footer */}
// //         <div className="p-4 flex justify-end bg-gray-50">
// //           <button
// //             className="px-4 py-2 bg-yellow-400 text-gray-900 font-medium rounded-lg hover:bg-yellow-500 focus:outline-none"
// //           >
// //             Submit document
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VerifyResidence;


import React, { useState } from 'react';
import { useUploadresidencedocMutation } from '../../redux/residenceapi';

const VerifyResidence = ({ onClose }) => {

  
  const [residencedocument, setresidenceDocument] = useState([]);
  const [uploadresidencedoc, { isLoading, isSuccess, error }] = useUploadresidencedocMutation();

  const handleFileChange = (e) => {
    setresidenceDocument(Array.from(e.target.files)); // convert FileList to array
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    residencedocument.forEach((doc) => {
      formData.append('residencedocument', doc); // same field name for multiple
    });

    await uploadresidencedoc(formData);
  };

// const VerifyResidence = ({ onClose }) => {
  // const [selectedDocument, setSelectedDocument] = useState(null);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#23282B] z-50">
      <div className="bg-[#2C3235] rounded-md w-full max-w-lg shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-medium text-lg text-white">Verify residence</h2>
          <button onClick={onClose} className="bg-[#2C3235] hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-4">
          {/* Info box */}
          <div className="bg-blue-50 border border-blue-100 rounded-md p-3 mb-4 flex">
            <div className="flex-shrink-0 mt-0.5 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-gray-700">
              The document provided for Proof of Residence must not be the same as the one used for Proof of Identity.
            </p>
          </div>

          <p className="text-sm font-medium mb-3 text-white">
            Please upload only one of the following Proof of Residence documents:
          </p>

          {/* Document options */}
          <div className="space-y-2 mb-6">
         
           

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <label className="text-sm text-white">Bank / card statement (issued in the last 6 months)</label>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <label className="text-sm text-white">Utility bill (gas, phone, gas, water, electric, mobile phone, internet, or cable bill) issued in the last 3 months</label>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <label className="text-sm text-white">Tax return certificate from the Federal Board of Revenue (FBR)</label>
            </div>
          </div>

          <p className="text-sm font-medium mb-3 text-white">Take a photo of your chosen document</p>
          
          {/* Photo instructions */}
          <div className="bg-blue-50 border border-blue-100 rounded-md p-3 mb-4 flex">
            <div className="flex-shrink-0 mt-0.5 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-gray-700">
              Make sure the document shows your full name, full address.
            </p>
          </div>

          {/* Upload area */}
          {/* <div className="border border-dashed border-gray-300 rounded-md py-6 px-4 flex flex-col items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="text-sm text-gray-500">Upload your Proof of Residence document</p>
          </div> */}

          {/* Submit button */}
          {/* <div className="flex justify-end">
            <button 
              className="bg-blue-600 text-black font-medium px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Submit document
            </button>
          </div> */}

           <form onSubmit={handleSubmit} className="space-y-4">



<div>
  <label className="block text-sm font-medium">Upload Documents (2 or more)</label>
  <input
    type="file"
    multiple
    onChange={handleFileChange}
    className="mt-1 w-full border p-2 rounded"
    accept="image/*,application/pdf"
    required
  />
</div>

<button
  type="submit"
  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
  disabled={isLoading}
>
  {isLoading ? 'Uploading...' : 'Submit'}
</button>

{isSuccess && <p className="text-green-600 mt-2">Document uploaded successfully!</p>}
{error && <p className="text-red-600 mt-2">Error uploading document</p>}
</form>

        </div>
      </div>
    </div>
  );
};

export default VerifyResidence;



