"use client"
import { FaHome, FaTachometerAlt, FaUserFriends, FaPlusCircle, FaCog } from 'react-icons/fa';
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react";
import { FaGoogle } from 'react-icons/fa';

const Layout = ({ children }) => {
  const { data: session, status } = useSession();
  if (status === "loading") {
      return  (
  <div className="flex flex-col items-center justify-center min-h-[80vh] bg-none text-gray-900">
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
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 bg-none text-gray-900">
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
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-neutral-900 text-yellow-500 p-6 shadow-2xl rounded-l-lg border-r-2 border-yellow-500">
        <ul>
          {/* Homepage Link */}
          <li className="mb-8 flex items-center text-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-white rounded-lg transition-all duration-200 p-3">
            <FaHome className="mr-4 text-2xl text-yellow-300" />
            <a href="/" className="font-semibold">Homepage</a>
          </li>
          {/* Dashboard Link */}
          <li className="mb-8 flex items-center text-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-white rounded-lg transition-all duration-200 p-3">
            <FaTachometerAlt className="mr-4 text-2xl text-yellow-300" />
            <Link href="/Admin" className="font-semibold">Dashboard</Link>
          </li>
          {/* Candidates Link */}
          <li className="mb-8 flex items-center text-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-white rounded-lg transition-all duration-200 p-3">
            <FaTachometerAlt className="mr-4 text-2xl text-yellow-300" />
            <Link href="/Admin/jobs" className="font-semibold">All Jobs</Link>
          </li>

          <li className="mb-8 flex items-center text-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-white rounded-lg transition-all duration-200 p-3">
            <FaUserFriends className="mr-4 text-2xl text-yellow-300" />
            <a href="/Admin/candidates" className="font-semibold">Candidates</a>
          </li>
          {/* Add Job Link */}
          <li className="mb-8 flex items-center text-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-white rounded-lg transition-all duration-200 p-3">
            <FaPlusCircle className="mr-4 text-2xl text-yellow-300" />
            <Link href="/Admin/addjob" className="font-semibold">+ Job</Link>
          </li>
          {/* Settings Link */}
          <li className="mb-8 flex items-center text-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-white rounded-lg transition-all duration-200 p-3">
            <FaCog className="mr-4 text-2xl text-yellow-300" />
            <a href="/settings" className="font-semibold">Settings</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 h-screen overflow-auto p-8">
        {/* Main content box */}
        <div className="bg-white rounded-xl shadow-xl  overflow-auto border-2 border-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
