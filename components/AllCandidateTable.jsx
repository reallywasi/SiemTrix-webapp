"use client"

import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa"; // LinkedIn, GitHub, Resume icons
import { HiSearch } from "react-icons/hi"; // Search icon
import { IoFilter } from "react-icons/io5"; // Filter icon

const AllCandidateTable = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filterText, setFilterText] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [filterSkills, setFilterSkills] = useState("");

  // Fetch candidates data from API
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/candidate/candidates");
        const data = await response.json();
        setCandidates(data.candidates || []);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch candidates. Please try again.");
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  // Filter candidates based on text, role, and skills
  const filteredCandidates = candidates.filter((candidate) => {
    const matchesText =
      candidate.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
      candidate.lastName.toLowerCase().includes(filterText.toLowerCase()) ||
      candidate.currentRole.toLowerCase().includes(filterText.toLowerCase());

    const matchesRole = filterRole
      ? candidate.currentRole.toLowerCase().includes(filterRole.toLowerCase())
      : true;

    const matchesSkills = filterSkills
      ? candidate.skills.some((skill) =>
          skill.toLowerCase().includes(filterSkills.toLowerCase())
        )
      : true;

    return matchesText && matchesRole && matchesSkills;
  });

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-lg">Loading Candidates...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-lg text-red-500">{error}</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-yellow-600 mb-8">Candidates Information</h1>

      {/* Filter/Search Bar */}
      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <HiSearch className="text-yellow-600" />
          <input
            type="text"
            placeholder="Search by name or role"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="p-2 border-2 border-yellow-600 rounded-md w-64"
          />
        </div>

        <div className="flex items-center space-x-2">
          <IoFilter className="text-neutral-900" size={24} />
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="p-2 border-2 border-neutral-900 rounded-md"
          >
            <option value="">Filter by Role</option>
            {Array.from(new Set(candidates.map((c) => c.currentRole))).map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Filter by skill"
            value={filterSkills}
            onChange={(e) => setFilterSkills(e.target.value)}
            className="p-2 border-2 border-neutral-900 rounded-md w-64"
          />
        </div>
      </div>

      {/* Table of Candidates */}
      <table className="min-w-full table-auto bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-yellow-200 text-left">
            <th className="py-3 px-4 text-gray-700">Name</th>
            <th className="py-3 px-4 text-gray-700">Skills</th>
            <th className="py-3 px-4 text-gray-700">Email</th>
            <th className="py-3 px-4 text-gray-700">Phone</th>
            <th className="py-3 px-4 text-gray-700">Social Links</th>
            <th className="py-3 px-4 text-gray-700">Experience</th>
            <th className="py-3 px-4 text-gray-700">Resume</th>
          </tr>
        </thead>
        <tbody>
          {filteredCandidates.map((candidate) => (
            <tr key={candidate._id} className="border-t border-gray-200">
              {/* Name */}
              <td className="py-3 px-4 text-neutral-900">
                {candidate.firstName} {candidate.lastName}
              </td>

              {/* Skills */}
              <td className="py-3 px-4 text-neutral-900">
                <ul className="list-disc pl-6">
                  {candidate.skills.map((skill, index) => (
                    <li key={index} className="text-neutral-700">
                      {skill}
                    </li>
                  ))}
                </ul>
              </td>

              {/* Email */}
              <td className="py-3 px-4 text-neutral-900">{candidate.email}</td>

              {/* Phone */}
              <td className="py-3 px-4 text-neutral-900">{candidate.phoneNumber}</td>

              {/* Social Links */}
              <td className="py-3 px-4 text-neutral-900">
                <div className="flex space-x-4">
                  <a
                    href={candidate.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:text-yellow-700"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href={candidate.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:text-yellow-700"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </td>

              {/* Experience */}
              <td className="py-3 px-4 text-neutral-900">{candidate.experience}</td>

              {/* Resume */}
              <td className="py-3 px-4 text-neutral-900">
                <a
                  href={candidate.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 hover:text-yellow-700 flex items-center"
                >
                  <FaFileAlt className="mr-2" size={18} />
                  View Resume
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCandidateTable;