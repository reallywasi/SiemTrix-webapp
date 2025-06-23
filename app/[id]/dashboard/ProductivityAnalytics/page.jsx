// "use client"
// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';

// const ProductivityAnalytics = () => {
//   const dailyActivityChartRef = useRef(null);
//   const weeklyFocusChartRef = useRef(null);
//   const codingBreakdownChartRef = useRef(null);
//   const averageCodingChartRef = useRef(null);
//   const dailyActivityChartInstance = useRef(null);
//   const weeklyFocusChartInstance = useRef(null);
//   const codingBreakdownChartInstance = useRef(null);
//   const averageCodingChartInstance = useRef(null);

//   useEffect(() => {
//     // Daily Activity Timeline Chart
//     if (dailyActivityChartRef.current) {
//       if (dailyActivityChartInstance.current) {
//         dailyActivityChartInstance.current.destroy();
//       }
//       dailyActivityChartInstance.current = new Chart(dailyActivityChartRef.current, {
//         type: 'line',
//         data: {
//           labels: ['6AM', '8AM', '10AM', '12PM', '2PM', '4PM', '6PM', '8PM', '10PM'],
//           datasets: [{
//             label: 'Productive Activity',
//             data: [30, 50, 80, 90, 70, 85, 60, 40, 20],
//             borderColor: '#10B981',
//             backgroundColor: 'rgba(16, 185, 129, 0.1)',
//             tension: 0.4,
//             fill: true
//           }]
//         },
//         options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: {
//             legend: { position: 'top' }
//           },
//           scales: {
//             y: { beginAtZero: true, max: 100 }
//           }
//         }
//       });
//     }

//     // Weekly Focus Score Chart
//     if (weeklyFocusChartRef.current) {
//       if (weeklyFocusChartInstance.current) {
//         weeklyFocusChartInstance.current.destroy();
//       }
//       weeklyFocusChartInstance.current = new Chart(weeklyFocusChartRef.current, {
//         type: 'bar',
//         data: {
//           labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//           datasets: [{
//             label: 'Focus Score',
//             data: [85, 88, 90, 87, 84, 89, 86],
//             backgroundColor: '#3B82F6',
//             borderColor: '#3B82F6',
//             borderWidth: 1
//           }]
//         },
//         options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: {
//             legend: { position: 'top' }
//           },
//           scales: {
//             y: { beginAtZero: true, max: 100 }
//           }
//         }
//       });
//     }

//     // Coding Time Breakdown Chart
//     if (codingBreakdownChartRef.current) {
//       if (codingBreakdownChartInstance.current) {
//         codingBreakdownChartInstance.current.destroy();
//       }
//       codingBreakdownChartInstance.current = new Chart(codingBreakdownChartRef.current, {
//         type: 'pie',
//         data: {
//           labels: ['Active Coding', 'Debugging', 'Research', 'Testing'],
//           datasets: [{
//             data: [195, 105, 80, 55],
//             backgroundColor: ['#10B981', '#3B82F6', '#A78BFA', '#F59E0B'],
//             borderColor: '#ffffff',
//             borderWidth: 2
//           }]
//         },
//         options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: {
//             legend: { position: 'top' }
//           }
//         }
//       });
//     }

//     // Average Daily Coding Time Chart
//     if (averageCodingChartRef.current) {
//       if (averageCodingChartInstance.current) {
//         averageCodingChartInstance.current.destroy();
//       }
//       averageCodingChartInstance.current = new Chart(averageCodingChartRef.current, {
//         type: 'line',
//         data: {
//           labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
//           datasets: [{
//             label: 'Average Coding Time (hrs)',
//             data: [5.5, 6.0, 6.2, 6.5],
//             borderColor: '#10B981',
//             backgroundColor: 'rgba(16, 185, 129, 0.1)',
//             tension: 0.4,
//             fill: true
//           }]
//         },
//         options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: {
//             legend: { position: 'top' }
//           },
//           scales: {
//             y: { beginAtZero: true }
//           }
//         }
//       });
//     }

//     // Cleanup
//     return () => {
//       if (dailyActivityChartInstance.current) dailyActivityChartInstance.current.destroy();
//       if (weeklyFocusChartInstance.current) weeklyFocusChartInstance.current.destroy();
//       if (codingBreakdownChartInstance.current) codingBreakdownChartInstance.current.destroy();
//       if (averageCodingChartInstance.current) averageCodingChartInstance.current.destroy();
//     };
//   }, []);

//   return (
//     <section id="productivity-analytics" className="min-h-screen p-6 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Productivity Analytics</h1>
//           <p className="text-gray-600">Track your productive time and optimize your workflow</p>
//         </div>

//         {/* Key Metrics Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Total Productive Time</p>
//                 <p className="text-2xl font-bold text-green-600">6.5h</p>
//               </div>
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
//                 <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">+1.2h from yesterday</p>
//           </div>

//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Daily Focus Score</p>
//                 <p className="text-2xl font-bold text-blue-600">87%</p>
//               </div>
//               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                 <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                 </svg>
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">Above average (75%)</p>
//           </div>

//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Coding Sessions</p>
//                 <p className="text-2xl font-bold text-purple-600">12</p>
//               </div>
//               <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
//                 <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//                 </svg>
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">Avg: 32min each</p>
//           </div>

//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Long Focus Sessions</p>
//                 <p className="text-2xl font-bold text-orange-600">4</p>
//               </div>
//               <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
//                 <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                 </svg>
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">1hr uninterrupted</p>
//           </div>
//         </div>

//         {/* Charts Row */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Activity Timeline</h3>
//             <div className="h-64">
//               <canvas id="dailyActivityChart" ref={dailyActivityChartRef} />
//             </div>
//           </div>

//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Focus Score</h3>
//             <div className="h-64">
//               <canvas id="weeklyFocusChart" ref={weeklyFocusChartRef} />
//             </div>
//           </div>
//         </div>

//         {/* Top Productive Activities & Coding Time Breakdown */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-lg font-semibold text-gray-900">Top Productive Websites & Apps</h3>
//               <span className="text-sm text-gray-500">Today</span>
//             </div>
//             <div className="space-y-4">
//               <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200/30">
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
//                     <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">Visual Studio Code</p>
//                     <p className="text-xs text-gray-600">Code Editor</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm font-semibold text-green-600">2h 45m</p>
//                   <p className="text-xs text-gray-500">42% of total</p>
//                 </div>
//               </div>

//               <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200/30">
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
//                     <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">GitHub</p>
//                     <p className="text-xs text-gray-600">Version Control</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm font-semibold text-blue-600">1h 32m</p>
//                   <p className="text-xs text-gray-500">23% of total</p>
//                 </div>
//               </div>

//               <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200/30">
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
//                     <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">LeetCode</p>
//                     <p className="text-xs text-gray-600">Problem Solving</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm font-semibold text-purple-600">1h 18m</p>
//                   <p className="text-xs text-gray-500">20% of total</p>
//                 </div>
//               </div>

//               <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg border border-indigo-200/30">
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
//                     <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">Stack Overflow</p>
//                     <p className="text-xs text-gray-600">Learning & Research</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm font-semibold text-indigo-600">55m</p>
//                   <p className="text-xs text-gray-500">14% of total</p>
//                 </div>
//               </div>

//               <div className="flex items-center justify-between p-3 bg-teal-50 rounded-lg border border-teal-200/30">
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
//                     <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">Terminal</p>
//                     <p className="text-xs text-gray-600">Command Line</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm font-semibold text-teal-600">42m</p>
//                   <p className="text-xs text-gray-500">11% of total</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-6">Coding Time Breakdown</h3>
//             <div className="h-64 mb-6">
//               <canvas id="codingBreakdownChart" ref={codingBreakdownChartRef} />
//             </div>
//             <div className="space-y-3">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
//                   <span className="text-sm text-gray-700">Active Coding</span>
//                 </div>
//                 <span className="text-sm font-semibold text-gray-900">3h 15m</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
//                   <span className="text-sm text-gray-700">Debugging</span>
//                 </div>
//                 <span className="text-sm font-semibold text-gray-900">1h 45m</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
//                   <span className="text-sm text-gray-700">Research</span>
//                 </div>
//                 <span className="text-sm font-semibold text-gray-900">1h 20m</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
//                   <span className="text-sm text-gray-700">Testing</span>
//                 </div>
//                 <span className="text-sm font-semibold text-gray-900">55m</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Productivity Trends & Distraction Intervals */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-lg font-semibold text-gray-900">Average Daily Coding Time</h3>
//               <span className="text-sm text-gray-500">Last 30 days</span>
//             </div>
//             <div className="h-64">
//               <canvas id="averageCodingChart" ref={averageCodingChartRef} />
//             </div>
//           </div>

//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-lg font-semibold text-gray-900">Distraction Intervals</h3>
//               <span className="text-sm text-gray-500">Today</span>
//             </div>
//             <div className="space-y-4">
//               <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200/30">
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
//                     <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">YouTube Break</p>
//                     <p className="text-xs text-gray-600">2:15 PM - 2:35 PM</p>
//                   </div>
//                 </div>
//                 <span className="text-sm font-semibold text-red-600">20m</span>
//               </div>

//               <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200/30">
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
//                     <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">Social Media</p>
//                     <p className="text-xs text-gray-600">12:45 PM - 1:00 PM</p>
//                   </div>
//                 </div>
//                 <span className="text-sm font-semibold text-orange-600">15m</span>
//               </div>

//               <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200/30">
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
//                     <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">Email Check</p>
//                     <p className="text-xs text-gray-600">10:30 AM - 10:40 AM</p>
//                   </div>
//                 </div>
//                 <span className="text-sm font-semibold text-yellow-600">10m</span>
//               </div>

//               <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200/30">
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
//                     <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">News Reading</p>
//                     <p className="text-xs text-gray-600">9:15 AM - 9:40 AM</p>
//                   </div>
//                 </div>
//                 <span className="text-sm font-semibold text-red-600">25m</span>
//               </div>

//               <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200/30">
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm font-medium text-gray-700">Total Distraction Time</span>
//                   <span className="text-sm font-bold text-gray-900">1h 10m</span>
//                 </div>
//                 <div className="mt-2">
//                   <div className="w-full bg-gray-200 rounded-full h-2">
//                     <div className="bg-red-500 h-2 rounded-full" style={{ width: '18%' }}></div>
//                   </div>
//                   <p className="text-xs text-gray-500 mt-1">18% of total work time</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductivityAnalytics;









'use client';
import React, { useEffect, useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Legend);

const ProductivityAnalytics = () => {
  const [dashboardData, setDashboardData] = useState({
    productivityTime: '0m',
    distractionTime: '0m',
    focusScore: '0%',
    activities: [],
    distractionIntervals: [],
    timeline: [],
    focusDates: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const today = '2025-05-31'; // Fixed date for consistency
        const response = await fetch(
          `http://localhost:5000/api/logs/productivity?date=${today}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log('API Response:', data);
        setDashboardData({
          productivityTime: data.productivityTime || '0m',
          distractionTime: data.distractionTime || '0m',
          focusScore: data.focusScore || '0%',
          activities: data.activities || [],
          distractionIntervals: data.distractionIntervals || [],
          timeline: data.timeline || [],
          focusDates: data.focusDates || [],
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Process Data for Charts and Metrics
  const processDailyActivityTimeline = () => {
    if (!dashboardData.timeline.length) {
      console.log('Daily Activity: Empty timeline, using mock data');
      return {
        labels: ['6AM', '8AM', '10AM', '12PM', '2PM', '4PM', '6PM', '8PM', '10PM'],
        data: [30, 50, 80, 90, 70, 85, 60, 40, 20],
      };
    }

    const startHour = 0; // 5:30 AM IST
    const endHour = 23; // 5:29 AM IST next day
    const labels = [];
    const productiveData = Array(endHour - startHour + 1).fill(0);

    for (let hour = startHour; hour <= endHour; hour++) {
      const istHour = (hour + 5.5) % 24;
      const hourStr = Math.floor(istHour).toString().padStart(2, '0');
      const minStr = istHour % 1 === 0.5 ? '30' : '00';
      labels.push(`${hourStr}:${minStr}`);
    }

    for (let i = 0; i < dashboardData.timeline.length - 1; i++) {
      const current = dashboardData.timeline[i];
      const next = dashboardData.timeline[i + 1];
      if (current.category_type?.toLowerCase() !== 'productive') continue;
      const startTime = new Date(current.time).getTime();
      const endTime = next ? new Date(next.time).getTime() : startTime + 60000;
      const durationMinutes = (endTime - startTime) / (1000 * 60);
      const hourIndex = Math.floor(new Date(current.time).getUTCHours() - startHour);
      if (hourIndex >= 0 && hourIndex < productiveData.length) {
        productiveData[hourIndex] += durationMinutes;
      }
    }

    console.log('Daily Activity Data:', { labels, data: productiveData });
    return { labels, data: productiveData };
  };

  const processWeeklyFocusScore = () => {
    if (!dashboardData.focusDates.length) {
      console.log('Weekly Focus: Empty focusDates, using mock data');
      return {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        data: [85, 88, 90, 87, 84, 89, 86],
      };
    }

    // Assume focusDates contains { date: "2025-05-26", score: 85 } for past 7 days
    const labels = [];
    const scores = [];
    const today = new Date('2025-06-01');
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      labels.push(date.toLocaleDateString('en-US', { weekday: 'short' }));
      const focusEntry = dashboardData.focusDates.find(d => d.date === dateStr);
      scores.push(focusEntry ? focusEntry.score : 0);
    }

    console.log('Weekly Focus Data:', { labels, data: scores });
    return { labels, data: scores };
  };

  const processCodingTimeBreakdown = () => {
    if (!dashboardData.timeline.length) {
      console.log('Coding Breakdown: Empty timeline, using mock data');
      return {
        labels: ['Active Coding', 'Debugging', 'Research', 'Testing'],
        data: [195, 105, 80, 55],
      };
    }

    const categories = {
      'Active Coding': 0,
      Debugging: 0,
      Research: 0,
      Testing: 0,
    };

    for (let i = 0; i < dashboardData.timeline.length - 1; i++) {
      const current = dashboardData.timeline[i];
      const next = dashboardData.timeline[i + 1];
      if (current.category_type?.toLowerCase() !== 'productive') continue;
      const startTime = new Date(current.time).getTime();
      const endTime = next ? new Date(next.time).getTime() : startTime + 60000;
      const durationMinutes = (endTime - startTime) / (1000 * 60);
      const activity = current.activity_type;
      if (activity in categories) {
        categories[activity] += durationMinutes;
      }
    }

    const labels = Object.keys(categories);
    const data = Object.values(categories);
    console.log('Coding Breakdown Data:', { labels, data });
    return { labels, data };
  };

  const processAverageDailyCodingTime = () => {
    if (!dashboardData.timeline.length) {
      console.log('Average Coding: Empty timeline, using mock data');
      return {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        data: [5.5, 6.0, 6.2, 6.5],
      };
    }

    const weeks = [[], [], [], []];
    const today = new Date('2025-06-01');
    for (let i = 27; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const weekIndex = Math.floor(i / 7);
      weeks[weekIndex].push(date.toISOString().split('T')[0]);
    }

    const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    const data = weeks.map((week, index) => {
      let totalCodingHours = 0;
      let days = 0;
      week.forEach(date => {
        const dailyTimeline = dashboardData.timeline.filter(entry =>
          entry.time.startsWith(date) && entry.category_type?.toLowerCase() === 'productive' &&
          ['Active Coding', 'Debugging', 'Research', 'Testing'].includes(entry.activity_type)
        );
        let dailyMinutes = 0;
        for (let j = 0; j < dailyTimeline.length - 1; j++) {
          const startTime = new Date(dailyTimeline[j].time).getTime();
          const endTime = new Date(dailyTimeline[j + 1].time).getTime();
          dailyMinutes += (endTime - startTime) / (1000 * 60);
        }
        if (dailyTimeline.length) {
          totalCodingHours += dailyMinutes / 60;
          days++;
        }
      });
      return days > 0 ? (totalCodingHours / days).toFixed(1) : 0;
    });

    console.log('Average Coding Data:', { labels, data });
    return { labels, data };
  };

  const calculateMetrics = () => {
    let totalProductiveMinutes = 0;
    let totalDistractionMinutes = 0;
    let codingSessions = 0;
    let longFocusSessions = 0;

    for (let i = 0; i < dashboardData.timeline.length - 1; i++) {
      const current = dashboardData.timeline[i];
      const next = dashboardData.timeline[i + 1];
      const startTime = new Date(current.time).getTime();
      const endTime = next ? new Date(next.time).getTime() : startTime + 60000;
      const durationMinutes = (endTime - startTime) / (1000 * 60);
      const isProductive = current.category_type?.toLowerCase() === 'productive';
      if (isProductive) {
        totalProductiveMinutes += durationMinutes;
        if (['Active Coding', 'Debugging', 'Research', 'Testing'].includes(current.activity_type)) {
          codingSessions++;
        }
        if (durationMinutes >= 60) {
          longFocusSessions++;
        }
      } else {
        totalDistractionMinutes += durationMinutes;
      }
    }

    const totalTime = totalProductiveMinutes + totalDistractionMinutes;
    const focusScore = totalTime > 0 ? ((totalProductiveMinutes / totalTime) * 100).toFixed(0) : 0;
    const productiveHours = (totalProductiveMinutes / 60).toFixed(1);
    const averageSessionDuration = codingSessions > 0 ? (totalProductiveMinutes / codingSessions).toFixed(0) : 0;

    console.log('Metrics:', { productiveHours, focusScore, codingSessions, longFocusSessions, averageSessionDuration });
    return { productiveHours, focusScore, codingSessions, longFocusSessions, averageSessionDuration };
  };

  const getTopProductiveApps = () => {
    const appDurations = {};
    for (let i = 0; i < dashboardData.timeline.length - 1; i++) {
      const current = dashboardData.timeline[i];
      if (current.category_type?.toLowerCase() !== 'productive') continue;
      const next = dashboardData.timeline[i + 1];
      const startTime = new Date(current.time).getTime();
      const endTime = next ? new Date(next.time).getTime() : startTime + 60000;
      const durationMinutes = (endTime - startTime) / (1000 * 60);
      const app = current.activity_type || 'Unknown';
      appDurations[app] = (appDurations[app] || 0) + durationMinutes;
    }

    const totalProductiveMinutes = Object.values(appDurations).reduce((sum, val) => sum + val, 0);
    const apps = Object.entries(appDurations)
      .map(([name, duration]) => ({
        name,
        duration: `${Math.floor(duration / 60)}h ${Math.round(duration % 60)}m`,
        percentage: totalProductiveMinutes > 0 ? ((duration / totalProductiveMinutes) * 100).toFixed(0) : 0,
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 5);

    console.log('Top Productive Apps:', apps);
    return apps;
  };

  if (loading) return <div className="min-h-screen p-6 bg-gray-50">Loading...</div>;
  if (error) return <div className="min-h-screen p-6 bg-gray-50">Error: {error}</div>;

  const dailyActivity = processDailyActivityTimeline();
  const weeklyFocus = processWeeklyFocusScore();
  const codingBreakdown = processCodingTimeBreakdown();
  const averageCoding = processAverageDailyCodingTime();
  const metrics = calculateMetrics();
  const topApps = getTopProductiveApps();

  const totalDistractionMinutes = dashboardData.distractionIntervals.reduce(
    (sum, interval) => sum + (interval.durationMinutes || 0),
    0
  );
  const totalWorkMinutes = parseFloat(dashboardData.productivityTime) + parseFloat(dashboardData.distractionTime);
  const distractionPercentage = totalWorkMinutes > 0 ? ((totalDistractionMinutes / totalWorkMinutes) * 100).toFixed(0) : 0;

  return (
    <section id="productivity-analytics" className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Productivity Analytics</h1>
          <p className="text-gray-600">Track your productive time and optimize your workflow</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Productive Time</p>
                <p className="text-2xl font-bold text-green-600">{metrics.productiveHours}h</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">Today</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Daily Focus Score</p>
                <p className="text-2xl font-bold text-blue-600">{metrics.focusScore}%</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">Today</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Coding Sessions</p>
                <p className="text-2xl font-bold text-purple-600">{metrics.codingSessions}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">Avg: {metrics.averageSessionDuration}m each</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Long Focus Sessions</p>
                <p className="text-2xl font-bold text-orange-600">{metrics.longFocusSessions}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">≥1h uninterrupted</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Activity Timeline</h3>
            <div className="h-64">
              <Line
                data={{
                  labels: dailyActivity.labels,
                  datasets: [{
                    label: 'Productive Activity',
                    data: dailyActivity.data,
                    borderColor: '#10B981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.4,
                    fill: true,
                  }],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { position: 'top' } },
                  scales: { y: { beginAtZero: true, max: Math.max(...dailyActivity.data, 100) } },
                }}
              />
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Focus Score</h3>
            <div className="h-64">
              <Bar
                data={{
                  labels: weeklyFocus.labels,
                  datasets: [{
                    label: 'Focus Score',
                    data: weeklyFocus.data,
                    backgroundColor: '#3B82F6',
                    borderColor: '#3B82F6',
                    borderWidth: 1,
                  }],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { position: 'top' } },
                  scales: { y: { beginAtZero: true, max: 100 } },
                }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Top Productive Websites & Apps</h3>
              <span className="text-sm text-gray-500">Today</span>
            </div>
            <div className="space-y-4">
              {topApps.map((app, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-lg border border-gray-200/30 ${
                    index === 0 ? 'bg-green-50' :
                    index === 1 ? 'bg-blue-50' :
                    index === 2 ? 'bg-purple-50' :
                    index === 3 ? 'bg-indigo-50' : 'bg-teal-50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                      index === 0 ? 'bg-green-100' :
                      index === 1 ? 'bg-blue-100' :
                      index === 2 ? 'bg-purple-100' :
                      index === 3 ? 'bg-indigo-100' : 'bg-teal-100'
                    }`}>
                      <svg className={`w-5 h-5 ${
                        index === 0 ? 'text-green-600' :
                        index === 1 ? 'text-blue-600' :
                        index === 2 ? 'text-purple-600' :
                        index === 3 ? 'text-indigo-600' : 'text-teal-600'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                          index === 0 ? 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' :
                          index === 1 ? 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' :
                          index === 2 ? 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' :
                          index === 3 ? 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' :
                          'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
                        } />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{app.name}</p>
                      <p className="text-xs text-gray-600">Productive</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-semibold ${
                      index === 0 ? 'text-green-600' :
                      index === 1 ? 'text-blue-600' :
                      index === 2 ? 'text-purple-600' :
                      index === 3 ? 'text-indigo-600' : 'text-teal-600'
                    }`}>{app.duration}</p>
                    <p className="text-xs text-gray-500">{app.percentage}% of total</p>
                  </div>
                </div>
              ))}
              {!topApps.length && (
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200/30">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">No productive apps recorded</p>
                      <p className="text-xs text-gray-600">-</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Coding Time Breakdown</h3>
            <div className="h-64 mb-6">
              <Pie
                data={{
                  labels: codingBreakdown.labels,
                  datasets: [{
                    data: codingBreakdown.data,
                    backgroundColor: ['#10B981', '#3B82F6', '#A78BFA', '#F59E0B'],
                    borderColor: '#ffffff',
                    borderWidth: 2,
                  }],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { position: 'top' } },
                }}
              />
            </div>
            <div className="space-y-3">
              {codingBreakdown.labels.map((label, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-2 ${
                      index === 0 ? 'bg-green-500' :
                      index === 1 ? 'bg-blue-500' :
                      index === 2 ? 'bg-purple-500' : 'bg-orange-500'
                    }`}></div>
                    <span className="text-sm text-gray-700">{label}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    {Math.floor(codingBreakdown.data[index] / 60)}h {Math.round(codingBreakdown.data[index] % 60)}m
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Average Daily Coding Time</h3>
              <span className="text-sm text-gray-500">Last 30 days</span>
            </div>
            <div className="h-64">
              <Line
                data={{
                  labels: averageCoding.labels,
                  datasets: [{
                    label: 'Average Coding Time (hrs)',
                    data: averageCoding.data,
                    borderColor: '#10B981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.4,
                    fill: true,
                  }],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { position: 'top' } },
                  scales: { y: { beginAtZero: true } },
                }}
              />
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Distraction Intervals</h3>
              <span className="text-sm text-gray-500">Today</span>
            </div>
            <div className="space-y-4">
              {dashboardData.distractionIntervals.map((interval, index) => {
                const start = new Date(interval.startTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
                const end = new Date(new Date(interval.startTime).getTime() + interval.durationMinutes * 60000)
                  .toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
                return (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg border border-gray-200/30 ${
                      index === 0 ? 'bg-red-50' :
                      index === 1 ? 'bg-orange-50' :
                      index === 2 ? 'bg-yellow-50' : 'bg-red-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        index === 0 ? 'bg-red-100' :
                        index === 1 ? 'bg-orange-100' :
                        index === 2 ? 'bg-yellow-100' : 'bg-red-100'
                      }`}>
                        <svg className={`w-4 h-4 ${
                          index === 0 ? 'text-red-600' :
                          index === 1 ? 'text-orange-600' :
                          index === 2 ? 'text-yellow-600' : 'text-red-600'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                            index === 0 ? 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' :
                            index === 1 ? 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' :
                            'M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                          } />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{interval.name}</p>
                        <p className="text-xs text-gray-600">{start} - {end}</p>
                      </div>
                    </div>
                    <span className={`text-sm font-semibold ${
                      index === 0 ? 'text-red-600' :
                      index === 1 ? 'text-orange-600' :
                      index === 2 ? 'text-yellow-600' : 'text-red-600'
                    }`}>{interval.duration}</span>
                  </div>
                );
              })}
              {!dashboardData.distractionIntervals.length && (
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200/30">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">No distractions recorded</p>
                      <p className="text-xs text-gray-600">-</p>
                    </div>
                  </div>
                </div>
              )}
              <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200/30">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Total Distraction Time</span>
                  <span className="text-sm font-bold text-gray-900">
                    {Math.floor(totalDistractionMinutes / 60)}h {totalDistractionMinutes % 60}m
                  </span>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: `${distractionPercentage}%` }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{distractionPercentage}% of total work time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductivityAnalytics;
