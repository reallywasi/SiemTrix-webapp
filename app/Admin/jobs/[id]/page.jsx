// "use client"
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation'

// // Mock Data (Replace with actual API data fetching logic)
// const mockJobData = {
//   companyName: "WingConsultants",
//   contactPerson: "John Doe",
//   businessEmail: "contact@wingconsultants.com",
//   position: "Frontend Developer",
//   requiredSkills: "React, JavaScript, Tailwind CSS",
//   jobDescription: "Looking for a passionate Frontend Developer to join our dynamic team.",
//   budgetRange: "$40,000 - $60,000",
//   jobType: "Full-Time",
// };

// const mockApplicants = [
//   {
//     id: 1,
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john.doe@example.com',
//     phoneNumber: '123-456-7890',
//     location: 'New York, USA',
//     experience: '3 years',
//     currentRole: 'Junior Developer',
//     skills: ['React', 'CSS', 'JavaScript'],
//     expectedSalary: 50000,
//     resumeUrl: 'https://example.com/resume1.pdf',
//   },
// ];

// // Main Component
// const JobAndApplicants = () => {
//   const {id}  = useParams();
//   console.log(id)

//   useEffect(()=>{
//     const fetchJobData=async()=>{
//       const response=await fetch(`http://localhost:5000/api/employer/${id}`)
//       const data=await response.json();
//       console.log(data);
//     }
//     const fetchApplicants = async () => {
//       const response = await fetch(`http://localhost:5000/api/candidate/job/${id}`);
//       const data = await response.json();
//       console.log(data); // Assuming the applicant data is an array
//     };

//     fetchJobData();
//     fetchApplicants();
//   },[id]);

//     const [job, setJob] = useState(null);
//     const [applicants, setApplicants] = useState([]);
//     const [selectedApplicant, setSelectedApplicant] = useState(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);
  
//     useEffect(() => {
//       // Simulating an API call to fetch job details and applicants
//       setJob(mockJobData);
//       setApplicants(mockApplicants);
//     }, []);
  
//     const handleApplicantClick = (applicant) => {
//       setSelectedApplicant(applicant);
//       setIsModalOpen(true);
//     };
  
//     const closeModal = () => {
//       setIsModalOpen(false);
//       setSelectedApplicant(null);
//     };
  
//     return (
//       <div className="min-h-screen bg-gray-900 text-yellow-400">
//         {/* Job Info Section - Fixed */}
//         {job && (
//           <div className="container mx-auto p-8">
//             <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
//               {/* Work Type Badge */}
//               <div className="flex items-center justify-start space-x-4 mb-4">
//                 <span className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">{job.jobType}</span>
//                 <span className="text-gray-400 text-sm">{job.location}</span>
//               </div>
//               {/* Job Information */}
//               <h2 className="text-4xl font-semibold text-yellow-300">{job.position}</h2>
//               <p className="text-lg text-gray-400 mt-2">{job.companyName}</p>
//               <div className="mt-4 text-gray-300 space-y-2">
//                 <p><strong className="text-yellow-500">Contact Person:</strong> {job.contactPerson}</p>
//                 <p><strong className="text-yellow-500">Email:</strong> {job.businessEmail}</p>
//                 <p><strong className="text-yellow-500">Required Skills:</strong> {job.requiredSkills}</p>
//                 <p><strong className="text-yellow-500">Job Description:</strong> {job.jobDescription}</p>
//                 <p><strong className="text-yellow-500">Budget Range:</strong> {job.budgetRange}</p>
//               </div>
//             </div>
            
//             {/* Applicants Section - Scrollable */}
//             <div className="overflow-y-auto max-h-[60vh]">
//               <h2 className="text-2xl font-semibold text-yellow-300 mb-4">Applicants</h2>
//               <div className="grid grid-cols-1 gap-6">
//                 {applicants.map((applicant) => (
//                   <div
//                     key={applicant.id}
//                     onClick={() => handleApplicantClick(applicant)}
//                     className="bg-gray-700 hover:bg-gray-600 cursor-pointer p-6 rounded-lg shadow-md transition-all"
//                   >
//                     <p className="text-xl font-semibold">{applicant.firstName} {applicant.lastName}</p>
//                     <p className="text-gray-300">{applicant.currentRole} - {applicant.experience}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
  
//         {/* Modal - Applicant Details */}
//         {isModalOpen && selectedApplicant && (
//           <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//             <div className="bg-gray-800 text-yellow-400 p-8 rounded-lg shadow-xl w-1/3 relative">
//               <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400">
//                 &times;
//               </button>
//               <h3 className="text-2xl font-semibold mb-4">{selectedApplicant.firstName} {selectedApplicant.lastName}</h3>
//               <div className="text-gray-300">
//                 <p><strong>Email:</strong> {selectedApplicant.email}</p>
//                 <p><strong>Phone:</strong> {selectedApplicant.phoneNumber}</p>
//                 <p><strong>Location:</strong> {selectedApplicant.location}</p>
//                 <p><strong>Experience:</strong> {selectedApplicant.experience}</p>
//                 <p><strong>Current Role:</strong> {selectedApplicant.currentRole}</p>
//                 <p><strong>Expected Salary:</strong> ${selectedApplicant.expectedSalary}</p>
//                 <p><strong>Skills:</strong> {selectedApplicant.skills.join(', ')}</p>
//                 <p><strong>Resume:</strong> <a href={selectedApplicant.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">View Resume</a></p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   };
  

// export default JobAndApplicants;













































// "use client"
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation'

// // Main Component
// const JobAndApplicants = () => {
//   const { id } = useParams();
//   console.log(id);

//   const [job, setJob] = useState(null);
//   const [applicants, setApplicants] = useState([]);
//   const [selectedApplicant, setSelectedApplicant] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Fetching job details and applicants from the backend
//   useEffect(() => {
//     const fetchJobData = async () => {
//       const response = await fetch(`http://localhost:5000/api/employer/${id}`);
//       const data = await response.json();
//       console.log('Job Data:', data);
//       setJob(data); // Set job data into state
//     };
  
//     const fetchApplicants = async () => {
//       const response = await fetch(`http://localhost:5000/api/candidate/job/${id}`);
//       const data = await response.json();
//       console.log('Applicants Data:', data);
  
//       // Ensure data.candidates is an array
//       if (Array.isArray(data.candidates)) {
//         setApplicants(data.candidates); // Set applicants data from the candidates array
//       } else {
//         setApplicants([]); // If not an array, set empty array or handle accordingly
//       }
//     };
  
//     fetchJobData();
//     fetchApplicants();
//   }, [id]); // Re-run when `id` changes
  
//   const handleApplicantClick = (applicant) => {
//     setSelectedApplicant(applicant);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedApplicant(null);
//   };

//   return (


//     <div className="min-h-screen bg-gray-900 text-yellow-400">
//       {/* Job Info Section - Fixed */}
//       {job && (
//         <div className="container mx-auto p-8">
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
//             {/* Work Type Badge */}
//             <div className="flex items-center justify-start space-x-4 mb-4">
//               <span className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">{job.jobType}</span>
//               <span className="text-gray-400 text-sm">{job.location}</span>
//             </div>
//             {/* Job Information */}
//             <h2 className="text-4xl font-semibold text-yellow-300">{job.position}</h2>
//             <p className="text-lg text-gray-400 mt-2">{job.companyName}</p>
//             <div className="mt-4 text-gray-300 space-y-2">
//               <p><strong className="text-yellow-500">Contact Person:</strong> {job.contactPerson}</p>
//               <p><strong className="text-yellow-500">Email:</strong> {job.businessEmail}</p>
//               <p><strong className="text-yellow-500">Required Skills:</strong> {job.requiredSkills}</p>
//               <p><strong className="text-yellow-500">Job Description:</strong> {job.jobDescription}</p>
//               <p><strong className="text-yellow-500">Budget Range:</strong> {job.budgetRange}</p>
//             </div>
//           </div>

//           {/* Applicants Section - Scrollable */}
//           <div className="overflow-y-auto max-h-[60vh]">
//             <h2 className="text-2xl font-semibold text-yellow-300 mb-4">Applicants</h2>
//             <div className="grid grid-cols-1 gap-6">
//               {Array.isArray(applicants) && applicants.length > 0 ? (
//                 applicants.map((applicant) => (
//                   <div
//                     key={applicant._id}  // Ensure the unique key is set correctly
//                     onClick={() => handleApplicantClick(applicant)}
//                     className="bg-gray-700 hover:bg-gray-600 cursor-pointer p-6 rounded-lg shadow-md transition-all"
//                   >
//                     <p className="text-xl font-semibold">{applicant.firstName} {applicant.lastName}</p>
//                     <p className="text-gray-300">{applicant.currentRole} - {applicant.experience}</p>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-300">No applicants found.</p>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Modal - Applicant Details */}
//       {isModalOpen && selectedApplicant && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//           <div className="bg-gray-800 text-yellow-400 p-8 rounded-lg shadow-xl w-1/3 relative">
//             <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400">
//               &times;
//             </button>
//             <h3 className="text-2xl font-semibold mb-4">{selectedApplicant.firstName} {selectedApplicant.lastName}</h3>
//             <div className="text-gray-300">
//               <p><strong>Email:</strong> {selectedApplicant.email}</p>
//               <p><strong>Phone:</strong> {selectedApplicant.phoneNumber}</p>
//               <p><strong>Location:</strong> {selectedApplicant.location}</p>
//               <p><strong>Experience:</strong> {selectedApplicant.experience}</p>
//               <p><strong>Current Role:</strong> {selectedApplicant.currentRole}</p>
//               <p><strong>Expected Salary:</strong> ${selectedApplicant.expectedSalary}</p>
//               <p><strong>Skills:</strong> {selectedApplicant.skills.join(', ')}</p>
//               <p><strong>Resume:</strong> <a href={selectedApplicant.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">View Resume</a></p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>


//   );
// };

// export default JobAndApplicants;






















































































"use client"
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
// Main Component
const JobAndApplicants = () => {
  const { id } = useParams();
  console.log(id);

  const [job, setJob] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetching job details and applicants from the backend
  useEffect(() => {
    const fetchJobData = async () => {
      const response = await fetch(`http://localhost:5000/api/employer/${id}`);
      const data = await response.json();
      console.log('Job Data:', data);
      setJob(data); // Set job data into state
    };
  
    const fetchApplicants = async () => {
      const response = await fetch(`http://localhost:5000/api/candidate/job/${id}`);
      const data = await response.json();
      console.log('Applicants Data:', data);
  
      // Ensure data.candidates is an array
      if (Array.isArray(data.candidates)) {
        setApplicants(data.candidates); // Set applicants data from the candidates array
      } else {
        setApplicants([]); // If not an array, set empty array or handle accordingly
      }
    };
  
    fetchJobData();
    fetchApplicants();
  }, [id]); // Re-run when `id` changes
  
  const handleApplicantClick = (applicant) => {
    setSelectedApplicant(applicant);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedApplicant(null);
  };

  return (

    
    <div className="min-h-screen bg-gray-100 text-yellow-700">
  {/* Job Info Section - Fixed */}
  {job && (
    <div className="container mx-auto p-8">
      <div className="bg-white p-8 rounded-lg shadow-xl mb-12">
        {/* Job Title and Work Type Badge */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-5xl font-semibold text-yellow-600 leading-tight">{job.position}</h2>
            <p className="text-xl text-gray-600">{job.companyName}</p>
          </div>
          <span className="bg-yellow-700 text-white px-6 py-3 rounded-full text-base font-semibold">{job.jobType}</span>
        </div>
        
        {/* Job Information */}
        <div className="mt-6 text-gray-700 space-y-4">
          <p><strong className="text-yellow-600">Contact Person:</strong> {job.contactPerson}</p>
          <p><strong className="text-yellow-600">Email:</strong> {job.businessEmail}</p>
          <p><strong className="text-yellow-600">Required Skills:</strong> {job.requiredSkills}</p>
          <p><strong className="text-yellow-600">Job Description:</strong> {job.jobDescription}</p>
          <p><strong className="text-yellow-600">Budget Range:</strong> {job.budgetRange}</p>
        </div>
      </div>

      {/* Applicants Section - Scrollable */}
      <div className="overflow-y-auto max-h-[60vh]">
        <h2 className="text-3xl font-semibold text-yellow-600 mb-6">Applicants</h2>
        <div className="grid grid-cols-1 gap-8">
          {Array.isArray(applicants) && applicants.length > 0 ? (
            applicants.map((applicant) => (
              <div
                key={applicant._id}  // Ensure the unique key is set correctly
                onClick={() => handleApplicantClick(applicant)}
                className="bg-white hover:bg-gray-50 cursor-pointer p-8 rounded-lg shadow-lg transition-all border border-gray-200"
              >
           <div className="flex justify-between items-center">
  <div>
    <p className="text-xl font-semibold text-gray-800">{applicant.firstName} {applicant.lastName}</p>
    <p className="text-gray-600">{applicant.currentRole} - {applicant.experience}</p>
  </div>

  <div className="flex items-center space-x-4">
   {/* LinkedIn Icon with Circular Hover Effect */}
   <a href={applicant.linkedinUrl} target="_blank" rel="noopener noreferrer" className="group">
      <AiFillLinkedin className="w-8 h-8 text-blue-700 group-hover:bg-gray-200 group-hover:rounded-full p-1 transition-all duration-100" />
    </a>
    {/* GitHub Icon with Circular Hover Effect */}
    <a href={applicant.githubUrl} target="_blank" rel="noopener noreferrer" className="group">
      <FaGithub className="w-8 h-8 text-gray-800 group-hover:bg-gray-200 group-hover:rounded-full p-1 transition-all duration-100" />
    </a>

    {/* View Details Button */}
    <button
      onClick={(e) => { e.stopPropagation(); handleApplicantClick(applicant); }}
      className="text-yellow-700 hover:text-yellow-600 font-semibold text-sm py-2 px-4 rounded-lg border-2 border-yellow-700 hover:border-yellow-600"
    >
      View Details
    </button>
  </div>
</div>



              </div>
            ))
          ) : (
            <p className="text-gray-500">No applicants found.</p>
          )}
        </div>
      </div>
    </div>
  )}

  {/* Modal - Applicant Details */}
  {isModalOpen && selectedApplicant && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white text-yellow-700 p-10 rounded-lg shadow-xl w-1/2 relative">
        <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-yellow-700">
          &times;
        </button>
        <h3 className="text-3xl font-semibold mb-6">{selectedApplicant.firstName} {selectedApplicant.lastName}</h3>
        <div className="text-gray-700 space-y-4">
          <p><strong className="text-yellow-600">Email:</strong> {selectedApplicant.email}</p>
          <p><strong className="text-yellow-600">Phone:</strong> {selectedApplicant.phoneNumber}</p>
          <p><strong className="text-yellow-600">Location:</strong> {selectedApplicant.location}</p>
          <p><strong className="text-yellow-600">Experience:</strong> {selectedApplicant.experience}</p>
          <p><strong className="text-yellow-600">Current Role:</strong> {selectedApplicant.currentRole}</p>
          <p><strong className="text-yellow-600">Expected Salary:</strong> ${selectedApplicant.expectedSalary}</p>
          <p><strong className="text-yellow-600">Skills:</strong> {selectedApplicant.skills.join(', ')}</p>
          <p><strong className="text-yellow-600">Resume:</strong> <a href={selectedApplicant.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">View Resume</a></p>
        </div>
      </div>
    </div>
  )}
</div>

  


  );
};

export default JobAndApplicants;














