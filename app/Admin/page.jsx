 "use client"
import { FaPlusCircle, FaClipboardList, FaUsers, FaUserAlt } from 'react-icons/fa';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react";
import { FaGoogle } from 'react-icons/fa';

const Dashboard = () => {

  const { data: session, status } = useSession();
  if (status === "loading") {
    return  (
<div className="flex flex-col items-center justify-center min-h-screen bg-none text-gray-900">
  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-800 border-opacity-80 mb-6"></div>
  <h1 className="text-2xl font-bold text-yellow-600">
    Please wait, loading...
  </h1>
</div>)
  }
// If the user is not authenticated, show a sign-in prompt
    if (!session) {
       return (
         <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 bg-none text-gray-900">
     <h1 className="text-4xl font-extrabold text-red-800 mb-4 text-center">
       Login Required 🔒
     </h1>
     <p className="text-lg text-yellow-600 mb-6 text-center">
       You need to log in to access this page. Please log in to continue.
     </p>
     <div className="flex flex-wrap justify-center gap-4">
     <button
   onClick={() => signIn("google")}
   className="flex items-center bg-slate-900 text-white px-6 py-3 rounded-md hover:bg-slate-800 transition-all"
 >
   <FaGoogle className="mr-3 text-lg" />
   Sign In with Google
 </button>
       <button
         onClick={() => (window.location.href = '/')}
         className="px-6 py-3 bg-yellow-600 text-black font-semibold rounded-lg text-base shadow-md hover:bg-yellow-700 transform hover:scale-105 transition-transform"
       >
         Go to Homepage
       </button>
     </div>
   </div>
   
       );
     }
  if (session.user.email !== "reallywasi@gmail.com") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-none text-gray-900">
  <h1 className="text-4xl font-extrabold text-red-800 mb-4 text-center">
    Access Denied 🚫
  </h1>
  <p className="text-lg text-yellow-600 mb-6 text-center">
    You don’t have permission to view this page. Please sign out or go back to the homepage.
  </p>
  <div className="flex flex-wrap justify-center gap-4">
    <button
      onClick={() => signOut()}
      className="px-6 py-3 bg-red-800 text-white font-semibold rounded-lg text-base shadow-md hover:bg-red-900 transform hover:scale-105 transition-transform"
    >
      Sign Out
    </button>
    <button
      onClick={() => (window.location.href = '/')}
      className="px-6 py-3 bg-yellow-600 text-black font-semibold rounded-lg text-base shadow-md hover:bg-yellow-700 transform hover:scale-105 transition-transform"
    >
      Go to Homepage
    </button>
  </div>
</div> 
    );
  }



  return (




    <div className="min-h-screen p-10" suppressHydrationWarning>
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-neutral-800 mb-12">Wing Consultants</h1>

      {/* Dashboard Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {/* Add Job Card */}
        <Link href="/Admin/addjob">
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
            <FaPlusCircle className="text-4xl text-yellow-600 mx-auto" />
            <p className="text-neutral-200 mt-3">Add Job</p>
          </div>
        </Link>

        {/* View Jobs Card */}
        <Link href="/Admin/jobs">
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
            <FaClipboardList className="text-4xl text-yellow-600 mx-auto" />
            <p className="text-neutral-200 mt-3">View Jobs</p>
          </div>
        </Link>

        {/* View Applications Card */}
        <Link href="/Admin/candidates">
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
            <FaUsers className="text-4xl text-yellow-600 mx-auto" />
            <p className="text-neutral-200 mt-3">View Applications</p>
          </div>
        </Link>

        {/* View Candidates Card */}
        <Link href="/Admin/candidates">
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
            <FaUserAlt className="text-4xl text-yellow-600 mx-auto" />
            <p className="text-neutral-200 mt-3">All Candidates</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

