"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/router

const JobListings = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [experience, setExperience] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter(); // Initialize the router

  // Fetching job listings from the backend API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/employer"); // replace with your backend URL
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      search === "" || job.position.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "" || job.jobType === category;
    const matchesExperience =
      experience === "" ||
      job.position.toLowerCase().includes(experience.toLowerCase());
    return matchesSearch && matchesCategory && matchesExperience;
  });

  const JobCard = ({ job }) => {
    // Function to handle "Close Job" button click
    const handleCloseJob = () => {
      // Placeholder for closing the job logic
      console.log(`Closing job: ${job._id}`);
    };

    // Function to handle "View Applicants" button click
    const handleViewApplicants = () => {
      router.push(`/Admin/jobs/${job._id}`); // Navigate to applicants page for this job
    };

    return (
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">{job.position}</h3>
              <p className="text-gray-600 mb-4">
                {job.companyName} • {job.jobType}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {job.requiredSkills.split(",").map((skill, idx) => (
              <span
                key={idx}
                className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm"
              >
                {skill.trim()}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <div className="text-gray-600">
              <span className="font-semibold text-neutral-900">{job.budgetRange}</span> / year
            </div>
            <div className="flex gap-4">
            <button
  onClick={handleCloseJob} // On click, close the job
  className="bg-gray-200 border-2 border-yellow-600 text-gray-900 hover:bg-gray-300 hover:border-black hover:text-black px-4 py-2 rounded-lg transition-colors duration-300"
>
  Close Job
</button>


              <button
                onClick={handleViewApplicants} // On click, view job applicants
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
              >
                View Applicants
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="root">
      <section id="joblistings" className="bg-neutral-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         

          <div className="mb-8">
            <div className="bg-white rounded-lg shadow p-4 animate__animated animate__fadeIn">
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex-1 min-w-[200px]">
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className="flex-1 min-w-[200px]">
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    <option value="fullstack">Full Stack Development</option>
                    <option value="frontend">Frontend Development</option>
                    <option value="backend">Backend Development</option>
                    <option value="devops">DevOps</option>
                    <option value="mobile">Mobile Development</option>
                  </select>
                </div>
                <div className="flex-1 min-w-[200px]">
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  >
                    <option value="">Experience Level</option>
                    <option value="entry">Entry Level</option>
                    <option value="mid">Mid Level</option>
                    <option value="senior">Senior Level</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6" id="job-list">
            {filteredJobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="bg-neutral-800 hover:bg-neutral-900 text-white px-8 py-3 rounded-lg transition-colors duration-300 animate__animated animate__pulse animate__infinite">
              Load More Jobs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobListings;
