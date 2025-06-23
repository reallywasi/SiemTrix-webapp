"use client"


// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';

// const FocusAndDistraction = () => {
//   const distractionChartRef = useRef(null);
//   const focusBreakChartRef = useRef(null);
//   const tabActivityChartRef = useRef(null);
//   const distractionChartInstance = useRef(null);
//   const focusBreakChartInstance = useRef(null);
//   const tabActivityChartInstance = useRef(null);

//   useEffect(() => {
//     // Distraction Timeline Chart
//     if (distractionChartRef.current) {
//       if (distractionChartInstance.current) {
//         distractionChartInstance.current.destroy();
//       }
//       distractionChartInstance.current = new Chart(distractionChartRef.current, {
//         type: 'line',
//         data: {
//           labels: ['6AM', '8AM', '10AM', '12PM', '2PM', '4PM', '6PM', '8PM', '10PM'],
//           datasets: [{
//             label: 'Distraction Level',
//             data: [10, 20, 30, 50, 40, 60, 45, 70, 30],
//             borderColor: '#EF4444',
//             backgroundColor: 'rgba(239, 68, 68, 0.1)',
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

//     // Focus vs Break Cycles Chart
//     if (focusBreakChartRef.current) {
//       if (focusBreakChartInstance.current) {
//         focusBreakChartInstance.current.destroy();
//       }
//       focusBreakChartInstance.current = new Chart(focusBreakChartRef.current, {
//         type: 'bar',
//         data: {
//           labels: ['9AM', '11AM', '1PM', '3PM', '5PM', '7PM'],
//           datasets: [
//             {
//               label: 'Focus Time',
//               data: [45, 60, 30, 50, 40, 55],
//               backgroundColor: '#3B82F6',
//               borderColor: '#3B82F6',
//               borderWidth: 1
//             },
//             {
//               label: 'Break Time',
//               data: [15, 10, 20, 15, 20, 10],
//               backgroundColor: '#F59E0B',
//               borderColor: '#F59E0B',
//               borderWidth: 1
//             }
//           ]
//         },
//         options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: {
//             legend: { position: 'top' }
//           },
//           scales: {
//             x: { stacked: true },
//             y: { stacked: true, beginAtZero: true }
//           }
//         }
//       });
//     }

//     // Browser Tab Activity Chart
//     if (tabActivityChartRef.current) {
//       if (tabActivityChartInstance.current) {
//         tabActivityChartInstance.current.destroy();
//       }
//       tabActivityChartInstance.current = new Chart(tabActivityChartRef.current, {
//         type: 'line',
//         data: {
//           labels: ['10:00', '10:15', '10:30', '10:45', '11:00'],
//           datasets: [{
//             label: 'Tab Switches',
//             data: [30, 45, 20, 50, 35],
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
//       if (distractionChartInstance.current) distractionChartInstance.current.destroy();
//       if (focusBreakChartInstance.current) focusBreakChartInstance.current.destroy();
//       if (tabActivityChartInstance.current) tabActivityChartInstance.current.destroy();
//     };
//   }, []);

//   return (
//     <section id="focus-distraction" className="min-h-screen p-6 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Focus & Distraction</h1>
//           <p className="text-gray-600">Monitor distractions and optimize your focus patterns</p>
//         </div>

//         {/* Key Metrics Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Entertainment Time</p>
//                 <p className="text-2xl font-bold text-red-600">2.3h</p>
//               </div>
//               <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
//                 <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-10 5h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">29% of total time</p>
//           </div>

//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Context Switches</p>
//                 <p className="text-2xl font-bold text-orange-600">47</p>
//               </div>
//               <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
//                 <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
//                 </svg>
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">6 switches/hour</p>
//           </div>

//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Tab Switching Rate</p>
//                 <p className="text-2xl font-bold text-yellow-600">23/h</p>
//               </div>
//               <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
//                 <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
//                 </svg>
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">Above average</p>
//           </div>

//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Focus vs Break</p>
//                 <p className="text-2xl font-bold text-blue-600">3:1</p>
//               </div>
//               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                 <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                 </svg>
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">Good balance</p>
//           </div>
//         </div>

//         {/* Charts Row */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Distraction Timeline</h3>
//             <div className="h-64">
//               <canvas id="distractionTimelineChart" ref={distractionChartRef} />
//             </div>
//           </div>

//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Focus vs Break Cycles</h3>
//             <div className="h-64">
//               <canvas id="focusBreakChart" ref={focusBreakChartRef} />
//             </div>
//           </div>
//         </div>

//         {/* Top Distracting Websites & Context Switches */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-lg font-semibold text-gray-900">Top Distracting Websites</h3>
//               <span className="text-sm text-gray-500">Today</span>
//             </div>
//             <div className="space-y-4">
//               <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200/30">
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
//                     <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-10 5h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">YouTube</p>
//                     <p className="text-xs text-gray-600">Video streaming</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm font-semibold text-red-600">1h 25m</p>
//                   <p className="text-xs text-gray-500">18% of total</p>
//                 </div>
//               </div>

//               <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200/30">
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
//                     <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">Netflix</p>
//                     <p className="text-xs text-gray-600">Entertainment</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm font-semibold text-red-600">45m</p>
//                   <p className="text-xs text-gray-500">9% of total</p>
//                 </div>
//               </div>

//               <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200/30">
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
//                     <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">Instagram</p>
//                     <p className="text-xs text-gray-600">Social media</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm font-semibold text-orange-600">32m</p>
//                   <p className="text-xs text-gray-500">7% of total</p>
//                 </div>
//               </div>

//               <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200/30">
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
//                     <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">Reddit</p>
//                     <p className="text-xs text-gray-600">News & discussion</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm font-semibold text-yellow-600">28m</p>
//                   <p className="text-xs text-gray-500">6% of total</p>
//                 </div>
//               </div>

//               <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200/30">
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
//                     <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">Twitter</p>
//                     <p className="text-xs text-gray-600">Social media</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm font-semibold text-orange-600">18m</p>
//                   <p className="text-xs text-gray-500">4% of total</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-lg font-semibold text-gray-900">Most Frequent Context Switches</h3>
//               <span className="text-sm text-gray-500">Today</span>
//             </div>
//             <div className="space-y-4">
//               <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200/30">
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
//                     <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">VS Code → YouTube</p>
//                     <p className="text-xs text-gray-600">Coding to entertainment</p>
//                   </div>
//                 </div>
//                 <span className="text-sm font-semibold text-red-600">12 times</span>
//               </div>

//               <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200/30">
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
//                     <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">GitHub → Instagram</p>
//                     <p className="text-xs text-gray-600">Work to social media</p>
//                   </div>
//                 </div>
//                 <span className="text-sm font-semibold text-orange-600">8 times</span>
//               </div>

//               <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200/30">
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
//                     <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">LeetCode → Reddit</p>
//                     <p className="text-xs text-gray-600">Problem solving to browsing</p>
//                   </div>
//                 </div>
//                 <span className="text-sm font-semibold text-yellow-600">6 times</span>
//               </div>

//               <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200/30">
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
//                     <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">Documentation → Twitter</p>
//                     <p className="text-xs text-gray-600">Learning to social media</p>
//                   </div>
//                 </div>
//                 <span className="text-sm font-semibold text-blue-600">5 times</span>
//               </div>

//               <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200/30">
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
//                     <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">Terminal → Netflix</p>
//                     <p className="text-xs text-gray-600">Command line to streaming</p>
//                   </div>
//                 </div>
//                 <span className="text-sm font-semibold text-purple-600">4 times</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Real-time Alerts & Browser Tab Activity */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-lg font-semibold text-gray-900">Real-time Distraction Alerts</h3>
//               <div className="flex items-center">
//                 <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
//                 <span className="text-sm text-green-600 font-medium">Active</span>
//               </div>
//             </div>
//             <div className="space-y-4">
//               <div className="flex items-start p-4 bg-red-50 rounded-lg border border-red-200/30">
//                 <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
//                   <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
//                   </svg>
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex items-center justify-between">
//                     <p className="text-sm font-medium text-gray-900">Extended YouTube Session</p>
//                     <span className="text-xs text-red-600 font-medium">ACTIVE</span>
//                   </div>
//                   <p className="text-xs text-gray-600 mt-1">You've been watching videos for 25 minutes</p>
//                   <p className="text-xs text-gray-500 mt-1">Started at 2:15 PM</p>
//                 </div>
//               </div>

//               <div className="flex items-start p-4 bg-yellow-50 rounded-lg border border-yellow-200/30">
//                 <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
//                   <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex items-center justify-between">
//                     <p className="text-sm font-medium text-gray-900">High Tab Switching</p>
//                     <span className="text-xs text-yellow-600 font-medium">WARNING</span>
//                   </div>
//                   <p className="text-xs text-gray-600 mt-1">15 tab switches in the last 10 minutes</p>
//                   <p className="text-xs text-gray-500 mt-1">Consider focusing on one task</p>
//                 </div>
//               </div>

//               <div className="flex items-start p-4 bg-orange-50 rounded-lg border border-orange-200/30">
//                 <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
//                   <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex items-center justify-between">
//                     <p className="text-sm font-medium text-gray-900">Break Reminder</p>
//                     <span className="text-xs text-orange-600 font-medium">INFO</span>
//                   </div>
//                   <p className="text-xs text-gray-600 mt-1">You've been coding for 90 minutes</p>
//                   <p className="text-xs text-gray-500 mt-1">Consider taking a 15-minute break</p>
//                 </div>
//               </div>

//               <div className="flex items-start p-4 bg-blue-50 rounded-lg border border-blue-200/30">
//                 <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
//                   <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex items-center justify-between">
//                     <p className="text-sm font-medium text-gray-900">Good Focus Session</p>
//                     <span className="text-xs text-blue-600 font-medium">POSITIVE</span>
//                   </div>
//                   <p className="text-xs text-gray-600 mt-1">45 minutes of uninterrupted coding</p>
//                   <p className="text-xs text-gray-500 mt-1">Keep up the great work!</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-lg font-semibold text-gray-900">Browser Tab Activity</h3>
//               <span className="text-sm text-gray-500">Last hour</span>
//             </div>
//             <div className="h-64 mb-6">
//               <canvas id="tabActivityChart" ref={tabActivityChartRef} />
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200/30">
//                 <p className="text-2xl font-bold text-gray-900">156</p>
//                 <p className="text-sm text-gray-600">Total Switches</p>
//               </div>
//               <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200/30">
//                 <p className="text-2xl font-bold text-gray-900">12</p>
//                 <p className="text-sm text-gray-600">Peak Tabs Open</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FocusAndDistraction;





import React, { useEffect, useState } from 'react';
import GraphCalculations from '@/components/graphs/GraphCalculations';
import DistractionTimelineChart from '@/components/graphs/DistractionTimelineChart';
import FocusDistractionChart from '@/components/graphs/FocusDistractionChart';

function FocusAndDistraction() {
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
        const today = new Date().toISOString().split('T')[0]; // 2025-06-01
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

  if (loading) {
    return <div className="min-h-screen p-6 bg-gray-50">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen p-6 bg-gray-50">Error: {error}</div>;
  }

  const { metrics, distractionTimelineData } = GraphCalculations({ dashboardData });

  return (
    <section id="focus-distraction" className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Focus & Distraction</h1>
          <p className="text-gray-600">Monitor distractions and optimize your focus patterns</p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Entertainment Time</p>
                <p className="text-2xl font-bold text-red-600">{dashboardData.distractionTime}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4l-8-8-10 5h12a2 2 0 002-2V7a2 0 00-2-2H5a2 0 00-2 2 v10a2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">{metrics.entertainmentPercentage}% of total time</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Context Switches</p>
                <p className="text-2xl font-bold text-orange-600">{metrics.contextSwitches}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">{(metrics.contextSwitches / 8).toFixed(1)} switches/hour</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tab Switching Rate</p>
                <p className="text-2xl font-bold text-yellow-600">{metrics.tabSwitchingRate}/h</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2 v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">Progress</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Focus vs Distraction</p>
                <p className="text-2xl font-bold text-gray-600">-</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002 2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">No cycle data available</p>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Distraction Timeline</h3>
            <DistractionTimelineChart distractionTimelineData={distractionTimelineData} />
          </div>
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Focus and Distraction Cycles</h3>
            <FocusDistractionChart dashboardData={dashboardData} />
          </div>
        </div>

        {/* Top Distracting Websites & Context Switches */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Work</h3>
              <span className="text-sm text-gray-500">Today</span>
            </div>
            <div className="space-y-4">
              {dashboardData.distractionData?.map((interval, index) => {
                const totalTimeMinutes =
                  parseFloat(dashboardData.productivityTime || 0) +
                  parseFloat(dashboardData.distractionTime || 0);
                const percentage =
                  totalTimeMinutes > 0
                    ? ((interval.durationMinutes / totalTimeMinutes) * 100).toFixed(2)
                    : 0;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200/30"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                        <svg
                          className="w-5 h-5 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                              interval.name === 'YouTube'
                                ? 'M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-10 5h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                                : 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
                            }
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{interval.name}</p>
                        <p className="text-xs text-gray-600">Entertainment</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-red-600">{interval.duration}</p>
                      <p className="text-xs text-gray-500">{percentage}% of total</p>
                    </div>
                  </div>
                );
              })}
              {(!dashboardData.distractionData || dashboardData.distractionData.length === 0) && (
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200/30">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">No distractions recorded</p>
                      <p className="text-xs text-gray-600">-</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Most Frequent Context Switches</h3>
              <span className="text-sm text-gray-500">Today</span>
            </div>
            <div className="space-y-4">
              {(() => {
                const switches = [];
                for (let i = 1; i < dashboardData.timeline.length; i++) {
                  const prev = dashboardData.timeline[i - 1];
                  const curr = dashboardData.timeline[i];
                  if (prev.category !== curr.category) {
                    switches.push({
                      from: prev.category,
                      to: curr.category,
                      count: 1,
                    });
                  }
                }
                const aggregated = switches.reduce((acc, { from, to }) => {
                  const key = `${from} → ${to}`;
                  acc[key] = (acc[key] || 0) + 1;
                  return acc;
                }, {});
                return Object.entries(aggregated)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 5)
                  .map(([key, count], index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200/30"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                          <svg
                            className="w-4 h-4 text-orange-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{key}</p>
                          <p className="text-xs text-gray-600">
                            {key.includes('Work') && key.includes('Entertainment')
                              ? 'Productive to distracting'
                              : 'Category switch'}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-orange-600">{count} times</span>
                    </div>
                  ));
              })()}
              {dashboardData.timeline.length < 2 && (
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200/30">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">No switches recorded</p>
                      <p className="text-xs text-gray-600">-</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Real-time Alerts */}
        <div className="bg-white rounded-lg border border-gray-200/30 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Real-time Distraction Alerts</h3>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600 font-medium">Inactive</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200/30">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">No alerts available</p>
                  <span className="text-xs text-gray-600 font-medium">-</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">No real-time distraction data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FocusAndDistraction;