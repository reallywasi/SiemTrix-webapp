// import React from 'react';

// const CandidateForm = () => {
//   return (
//     <div className="animate__animated animate__fadeInLeft">
//       <form id="candidate-form" className="space-y-6">
//         {/* Personal Information Section */}
//         <div className="bg-neutral-50 p-8 rounded-xl shadow-lg">
//           <h3 className="text-2xl font-semibold mb-6">Personal Information</h3>

//           <div className="space-y-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
//                 <input
//                   type="text"
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
//                 <input
//                   type="text"
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
//               <input
//                 type="email"
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
//               <input
//                 type="tel"
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Current Location*</label>
//               <input
//                 type="text"
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Professional Details Section */}
//         <div className="bg-neutral-50 p-8 rounded-xl shadow-lg">
//           <h3 className="text-2xl font-semibold mb-6">Professional Details</h3>

//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience*</label>
//               <select
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//               >
//                 <option value="">Select Experience</option>
//                 <option value="0-2">0-2 years</option>
//                 <option value="2-5">2-5 years</option>
//                 <option value="5-8">5-8 years</option>
//                 <option value="8+">8+ years</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Current Role*</label>
//               <input
//                 type="text"
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Skills (comma separated)*</label>
//               <input
//                 type="text"
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//                 placeholder="e.g., React, Node.js, Python"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Expected Salary (Annual in USD)*</label>
//               <input
//                 type="text"
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Resume Upload*</label>
//               <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
//                 <div className="space-y-1 text-center">
//                   <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
//                     <path
//                       d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   <div className="flex text-sm text-gray-600">
//                     <label className="relative cursor-pointer bg-white rounded-md font-medium text-yellow-600 hover:text-yellow-500 focus-within:outline-none">
//                       <span>Upload a file</span>
//                       <input
//                         id="file-upload"
//                         name="file-upload"
//                         type="file"
//                         className="sr-only"
//                         accept=".pdf,.doc,.docx"
//                       />
//                     </label>
//                     <p className="pl-1">or drag and drop</p>
//                   </div>
//                   <p className="text-xs text-gray-500">PDF, DOC up to 10MB</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="text-center">
//           <button
//             type="submit"
//             className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 animate__animated animate__pulse animate__infinite"
//           >
//             Submit Application
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CandidateForm;

// "use client";
// import React, { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const CandidateForm = ({ jobId }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     location: "",
//     experience: "",
//     currentRole: "",
//     skills: "",
//     expectedSalary: "",
//     resumeUrl: "",
//     jobId:jobId
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Send data to backend API
//     try {
//       const response = await fetch(
//         "http://localhost:5000/api/candidate/apply",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );
// console.log(formData);
//       if (response.ok) {
//         alert("Application submitted successfully!");
//         toast.success("Application submitted successfully! You'll hear from us soon.", {
//           position: "top-right",
//           autoClose: 3000,
//         })
//         // Reset the form
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           phoneNumber: "",
//           location: "",
//           experience: "",
//           currentRole: "",
//           skills: "",
//           expectedSalary: "",
//           resumeUrl: "",
//           jobId: jobId,
//         });
//       } else {
//         alert("Failed to submit the application.");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Error submitting the form.");
//     }
//   };

//   return (
//     <div className="animate__animated animate__fadeInLeft">
//       {/* <p>Job ID: {jobId}</p> */}
//       <form id="candidate-form" className="space-y-6" onSubmit={handleSubmit}>
//         {/* Personal Information Section */}
//         <div className="bg-neutral-50 p-8 rounded-xl shadow-lg">
//           <h3 className="text-2xl font-semibold mb-6">Personal Information</h3>

//           <div className="space-y-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   First Name*
//                 </label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Last Name*
//                 </label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email Address*
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Phone Number*
//               </label>
//               <input
//                 type="tel"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Current Location*
//               </label>
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Professional Details Section */}
//         <div className="bg-neutral-50 p-8 rounded-xl shadow-lg">
//           <h3 className="text-2xl font-semibold mb-6">Professional Details</h3>

//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Years of Experience*
//               </label>
//               <select
//                 name="experience"
//                 value={formData.experience}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//               >
//                 <option value="">Select Experience</option>
//                 <option value="0-2">0-2 years</option>
//                 <option value="2-5">2-5 years</option>
//                 <option value="5-8">5-8 years</option>
//                 <option value="8+">8+ years</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Current Role*
//               </label>
//               <input
//                 type="text"
//                 name="currentRole"
//                 value={formData.currentRole}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Skills (comma separated)*
//               </label>
//               <input
//                 type="text"
//                 name="skills"
//                 value={formData.skills}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//                 placeholder="e.g., React, Node.js, Python"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Expected Salary (Annual in USD)*
//               </label>
//               <input
//                 type="text"
//                 name="expectedSalary"
//                 value={formData.expectedSalary}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Resume Upload*
//               </label>
//               <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
//                 <div className="space-y-1 text-center">
//                   <svg
//                     className="mx-auto h-12 w-12 text-gray-400"
//                     stroke="currentColor"
//                     fill="none"
//                     viewBox="0 0 48 48"
//                   >
//                     <path
//                       d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   <div className="flex text-sm text-gray-600">
//                     <label className="relative cursor-pointer bg-white rounded-md font-medium text-yellow-600 hover:text-yellow-500 focus-within:outline-none">
//                       <span>Upload a file</span>
//                       <input
//                         id="file-upload"
//                         name="resumeUrl"
//                         type="file"
//                         className="sr-only"
//                         accept=".pdf,.doc,.docx"
//                         onChange={handleChange}
//                       />
//                     </label>
//                     <p className="pl-1">or drag and drop</p>
//                   </div>
//                   <p className="text-xs text-gray-500">PDF, DOC up to 10MB</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="text-center">
//           <button
//             type="submit"
//             className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 animate__animated animate__pulse animate__infinite"
//           >
//             Submit Application
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CandidateForm;










"use client";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CandidateForm = ({ jobId }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
    experience: "",
    currentRole: "",
    skills: "",
    expectedSalary: "",
    resumeUrl: "",
    linkedinUrl:"",
    githubUrl:"",
    jobId: jobId,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to backend API
    try {
      const response = await fetch(
        "http://localhost:5000/api/candidate/apply",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Application submitted successfully! You'll hear from us soon.", {
          position: "top-right",
          autoClose: 3000,
        });

        // Reset the form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          location: "",
          experience: "",
          currentRole: "",
          skills: "",
          expectedSalary: "",
          resumeUrl: "",
          linkedinUrl:"",
          githubUrl:"",
          jobId: jobId,
        });
      } else {
        toast.error("Failed to submit the application. Please try again.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting the form. Please check your network and try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="animate__animated animate__fadeInLeft">
      <ToastContainer />
      <form id="candidate-form" className="space-y-6" onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <div className="bg-neutral-50 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Personal Information</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name*
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name*
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number*
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Location*
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
          </div>
        </div>

        {/* Professional Details Section */}
        <div className="bg-neutral-50 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Professional Details</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Years of Experience*
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              >
                <option value="">Select Experience</option>
                <option value="0-2">0-2 years</option>
                <option value="2-5">2-5 years</option>
                <option value="5-8">5-8 years</option>
                <option value="8+">8+ years</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Role*
              </label>
              <input
                type="text"
                name="currentRole"
                value={formData.currentRole}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Skills (comma separated)*
              </label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="e.g., React, Node.js, Python"
              />
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expected Salary (Annual in USD)*
              </label>
              <input
                type="text"
                name="expectedSalary"
                value={formData.expectedSalary}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    LinkedIn URL
  </label>
  <input
    type="url"
    name="linkedinUrl"
    value={formData.linkedinUrl}
    onChange={handleChange}
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
  />
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    GitHub URL
  </label>
  <input
    type="url"
    name="githubUrl"
    value={formData.githubUrl}
    onChange={handleChange}
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
  />
</div>


          </div>


        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 animate__animated animate__pulse animate__infinite"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default CandidateForm;

