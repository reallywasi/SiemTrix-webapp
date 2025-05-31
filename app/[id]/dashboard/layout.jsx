"use client"

import {
  FaHome,
  FaTachometerAlt,
  FaUserFriends,
  FaPlusCircle,
  FaCog,
  FaShieldAlt,
  FaChartBar,
  FaEye,
  FaLightbulb,
  FaClock,
  FaBell,
  FaFileAlt,
} from "react-icons/fa";

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


<div className="w-42 bg-gray-800  p-6 shadow-2xl rounded-l-lg ">
  <ul className="space-y-1">
    {/* Dashboard Overview */}
    <li>
      <Link
        href="/Admin/dashboard-overview"
        className="flex flex-col items-center px-3 py-4 bg-blue-50 text-blue-600 rounded-lg transition duration-200 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 hover:text-white"
      >
        <FaTachometerAlt className="w-6 h-6 mb-1 text-blue-600 group-hover:text-yellow-300" />
        <span className="text-sm font-medium">Dashboard Overview</span>
      </Link>
    </li>

    {/* Security Monitoring */}
    <li>
      <Link
        href="/Admin/security-monitoring"
        className="flex flex-col items-center px-3 py-4 text-gray-300 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition duration-200"
      >
        <FaShieldAlt className="w-6 h-6 mb-1 text-gray-300 group-hover:text-yellow-300" />
        <span className="text-sm font-medium">Security Monitoring</span>
      </Link>
    </li>

    {/* Productivity Analytics */}
    <li>
      <Link
        href="/Admin/productivity-analytics"
        className="flex flex-col items-center px-3 py-4 text-gray-300 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition duration-200"
      >
        <FaChartBar className="w-6 h-6 mb-1 text-gray-300 group-hover:text-yellow-300" />
        <span className="text-sm font-medium">Productivity Analytics</span>
      </Link>
    </li>

    {/* Focus & Distraction */}
    <li>
      <Link
        href="/Admin/focus-distraction"
        className="flex flex-col items-center px-3 py-4 text-gray-300 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition duration-200"
      >
        <FaEye className="w-6 h-6 mb-1 text-gray-300 group-hover:text-yellow-300" />
        <span className="text-sm font-medium">Focus & Distraction</span>
      </Link>
    </li>

    {/* Behavioral Insights */}
    <li>
      <Link
        href="/Admin/behavioral-insights"
        className="flex flex-col items-center px-3 py-4 text-gray-300 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition duration-200"
      >
        <FaLightbulb className="w-6 h-6 mb-1 text-gray-300 group-hover:text-yellow-300" />
        <span className="text-sm font-medium">Behavioral Insights</span>
      </Link>
    </li>

    {/* Time Analysis */}
    <li>
      <Link
        href="/Admin/time-analysis"
        className="flex flex-col items-center px-3 py-4 text-gray-300 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition duration-200"
      >
        <FaClock className="w-6 h-6 mb-1 text-gray-300 group-hover:text-yellow-300" />
        <span className="text-sm font-medium">Time Analysis</span>
      </Link>
    </li>

    {/* Alerts & Notifications */}
    <li>
      <Link
        href="/Admin/alerts-notifications"
        className="flex flex-col items-center px-3 py-4 text-gray-300 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition duration-200"
      >
        <FaBell className="w-6 h-6 mb-1 text-gray-300 group-hover:text-yellow-300" />
        <span className="text-sm font-medium">Alerts & Notifications</span>
      </Link>
    </li>

    {/* Settings */}
    <li>
      <Link
        href="/settings"
        className="flex flex-col items-center px-3 py-4 text-gray-300 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition duration-200"
      >
        <FaCog className="w-6 h-6 mb-1 text-gray-300 group-hover:text-yellow-300" />
        <span className="text-sm font-medium">Settings</span>
      </Link>
    </li>

    {/* Reports */}
    <li>
      <Link
        href="/Admin/reports"
        className="flex flex-col items-center px-3 py-4 text-gray-300 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition duration-200"
      >
        <FaFileAlt className="w-6 h-6 mb-1 text-gray-300 group-hover:text-yellow-300" />
        <span className="text-sm font-medium">Reports</span>
      </Link>
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
