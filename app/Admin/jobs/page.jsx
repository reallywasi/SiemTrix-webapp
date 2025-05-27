"use client"
import React from 'react';
import EmployerJobCard from '../../../components/EmployerJobCard';
import { useSession, signIn, signOut } from "next-auth/react";

const Page = () => {
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
      onClick={() => (window.location.href = '/login')}
      className="px-6 py-3 bg-red-800 text-white font-semibold rounded-lg text-base shadow-md hover:bg-red-900 transform hover:scale-105 transition-transform"
    >
      Login
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
    <div className='h-[80vh] overflow-y-scroll'>
      <EmployerJobCard />
    </div>
  );
};

export default Page;
