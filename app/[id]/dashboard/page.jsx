// "use client"
// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';

// const DashboardOverview = () => {
//   const activityChartRef = useRef(null);
//   const timeDistChartRef = useRef(null);
//   const activityChartInstance = useRef(null);
//   const timeDistChartInstance = useRef(null);

//   useEffect(() => {
//     // Activity Chart
//     if (activityChartRef.current) {
//       if (activityChartInstance.current) {
//         activityChartInstance.current.destroy();
//       }
//       activityChartInstance.current = new Chart(activityChartRef.current, {
//         type: 'line',
//         data: {
//           labels: ['6AM', '8AM', '10AM', '12PM', '2PM', '4PM', '6PM', '8PM', '10PM'],
//           datasets: [{
//             label: 'Productive Activity',
//             data: [20, 45, 80, 90, 75, 85, 60, 40, 25],
//             borderColor: '#10B981',
//             backgroundColor: 'rgba(16, 185, 129, 0.1)',
//             tension: 0.4,
//             fill: true
//           }, {
//             label: 'Distracting Activity',
//             data: [10, 15, 25, 20, 35, 30, 45, 60, 40],
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

//     // Time Distribution Chart
//     if (timeDistChartRef.current) {
//       if (timeDistChartInstance.current) {
//         timeDistChartInstance.current.destroy();
//       }
//       timeDistChartInstance.current = new Chart(timeDistChartRef.current, {
//         type: 'pie',
//         data: {
//           labels: ['Coding', 'Research', 'Meetings', 'Breaks'],
//           datasets: [{
//             data: [40, 30, 20, 10],
//             backgroundColor: ['#10B981', '#3B82F6', '#F59E0B', '#EF4444'],
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

//     // Cleanup
//     return () => {
//       if (activityChartInstance.current) activityChartInstance.current.destroy();
//       if (timeDistChartInstance.current) timeDistChartInstance.current.destroy();
//     };
//   }, []);

//   return (
//     <section id="dashboard-overview" className="min-h-screen p-6 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
//           <p className="text-gray-600">Real-time insights into your digital activity and security status</p>
//         </div>

//         {/* Key Metrics Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Productivity Score</p>
//                 <p className="text-2xl font-bold text-green-600">87%</p>
//               </div>
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
//                 <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h greatly8m0 0v8m0-8l-8 8-4-4-6 6" />
//                 </svg>
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">+12% from yesterday</p>
//           </div>

//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Active Threats</p>
//                 <p className="text-2xl font-bold text-red-600">3</p>
//               </div>
//               <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
//                 <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M5.062 19h13.876c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
//                 </svg>
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">2 high priority</p>
//           </div>

//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Coding Time</p>
//                 <p className="text-2xl font-bold text-blue-600">5.2h</p>
//               </div>
//               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                 <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//                 </svg>
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">Goal: 6h daily</p>
//           </div>

//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Focus Sessions</p>
//                 <p className="text-2xl font-bold text-purple-600">8</p>
//               </div>
//               <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
//                 <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                 </svg>
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">Avg: 45min each</p>
//           </div>
//         </div>

//         {/* Charts Row */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Activity Timeline</h3>
//             <div className="h-64">
//               <canvas id="activityChart" ref={activityChartRef} className="w-full h-full" />
//             </div>
//           </div>

//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Time Distribution</h3>
//             <div className="h-64">
//               <canvas id="timeDistributionChart" ref={timeDistChartRef} className="w-full h-full" />
//             </div>
//           </div>
//         </div>

//         {/* Recent Activity & Alerts */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold text-gray-900">Recent Security Alerts</h3>
//               <span className="text-sm text-gray-500">Last 24h</span>
//             </div>
//             <div className="space-y-4">
//               <div className="flex items-center p-3 bg-red-50 rounded-lg border border-red-200/30">
//                 <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
//                   <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M5.062 19h13.876c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
//                   </svg>
//                 </div>
//                 <div className="flex-1">
//                   <p className="text-sm font-medium text-gray-900">Suspicious domain accessed</p>
//                   <p className="text-xs text-gray-600">malware-site.com - 2:34 PM</p>
//                 </div>
//               </div>

//               <div className="flex items-center p-3 bg-yellow-50 rounded-lg border border-yellow-200/30">
//                 <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
//                   <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <div className="flex-1">
//                   <p className="text-sm font-medium text-gray-900">Unusual login time</p>
//                   <p className="text-xs text-gray-600">Login at 3:22 AM</p>
//                 </div>
//               </div>

//               <div className="flex items-center p-3 bg-orange-50 rounded-lg border border-orange-200/30">
//                 <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
//                   <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.414-1.414" />
//                   </svg>
//                 </div>
//                 <div className="flex-1">
//                   <p className="text-sm font-medium text-gray-900">Firewall rule triggered</p>
//                   <p className="text-xs text-gray-600">Port scan detected - 11:45 AM</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg border border-gray-200/30 p-6">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold text-gray-900">Top Productive Activities</h3>
//               <span className="text-sm text-gray-500">Today</span>
//             </div>
//             <div className="space-y-4">
//               <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200/30">
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
//                     <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">VS Code</p>
//                     <p className="text-xs text-gray-600">Code editing</p>
//                   </div>
//                 </div>
//                 <span className="text-sm font-semibold text-green-600">2.5h</span>
//               </div>

//               <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200/30">
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
//                     <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">GitHub</p>
//                     <p className="text-xs text-gray-600">Repository management</p>
//                   </div>
//                 </div>
//                 <span className="text-sm font-semibold text-blue-600">1.8h</span>
//               </div>

//               <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200/30">
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
//                     <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">LeetCode</p>
//                     <p className="text-xs text-gray-600">Problem solving</p>
//                   </div>
//                 </div>
//                 <span className="text-sm font-semibold text-purple-600">1.2h</span>
//               </div>

//               <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg border border-indigo-200/30">
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
//                     <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">Documentation</p>
//                     <p className="text-xs text-gray-600">Reading & research</p>
//                   </div>
//                 </div>
//                 <span className="text-sm font-semibold text-indigo-600">0.9h</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DashboardOverview;








"use client";
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const DashboardOverview = () => {
  const activityChartRef = useRef(null);
  const timeDistChartRef = useRef(null);
  const activityChartInstance = useRef(null);
  const timeDistChartInstance = useRef(null);
  const [dashboardData, setDashboardData] = useState({
    productivityTime: "0m",
    distractionTime: "0m",
    focusScore: "0%",
    activities: [],
    distractionIntervals: [],
    timeline: [],
    focusDates: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/logs/productivity?date=2025-05-31"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setDashboardData({
          productivityTime: data.productivityTime || "0m",
          distractionTime: data.distractionTime || "0m",
          focusScore: data.focusScore || "0%",
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

  // Process timeline for Activity Chart
  const processTimelineData = () => {
    if (!dashboardData.timeline.length) {
      return { labels: [], productiveData: [], distractingData: [] };
    }

    // Create time slots (30-second intervals for 19:11–19:23Z)
    const startTime = new Date("2025-05-31T19:11:00Z").getTime();
    const endTime = new Date("2025-05-31T19:23:00Z").getTime();
    const interval = 30 * 1000; // 30 seconds in ms
    const labels = [];
    const productiveData = [];
    const distractingData = [];

    for (let time = startTime; time <= endTime; time += interval) {
      const date = new Date(time);
      const hours = date.getUTCHours();
      const minutes = date.getUTCMinutes().toString().padStart(2, "0");
      const seconds = date.getUTCSeconds().toString().padStart(2, "0");
      labels.push(`${hours}:${minutes}:${seconds}`);
      productiveData.push(0);
      distractingData.push(0);
    }

    // Assign timeline entries to slots
    dashboardData.timeline.forEach((entry) => {
      const entryTime = new Date(entry.time).getTime();
      const slotIndex = Math.floor((entryTime - startTime) / interval);
      if (slotIndex >= 0 && slotIndex < labels.length) {
        const duration = 1; // Assume 1 unit per entry (adjust if duration available)
        if (entry.productivity === "Productive") {
          productiveData[slotIndex] += duration;
        } else if (entry.productivity === "Distracting") {
          distractingData[slotIndex] += duration;
        }
      }
    });

    return { labels, productiveData, distractingData };
  };

  // Process time distribution for Pie Chart
  const processTimeDistribution = () => {
    const categoryMap = {};

    // Aggregate productive activities
    dashboardData.activities.forEach((activity) => {
      const category = activity.activity_type !== "Other" ? activity.activity_type : activity.name;
      categoryMap[category] = (categoryMap[category] || 0) + activity.durationMinutes;
    });

    // Aggregate distracting activities
    dashboardData.distractionIntervals.forEach((interval) => {
      const category = interval.name;
      categoryMap[category] = (categoryMap[category] || 0) + interval.durationMinutes;
    });

    const labels = Object.keys(categoryMap);
    const data = Object.values(categoryMap);
    const backgroundColors = labels.map((label, index) => {
      const colors = ["#10B981", "#EF4444", "#3B82F6", "#F59E0B", "#8B5CF6"];
      return colors[index % colors.length];
    });

    return { labels, data, backgroundColors };
  };

  // Render Charts
  useEffect(() => {
    if (loading || error) return;

    // Activity Chart
    if (activityChartRef.current) {
      if (activityChartInstance.current) {
        activityChartInstance.current.destroy();
      }
      const { labels, productiveData, distractingData } = processTimelineData();
      activityChartInstance.current = new Chart(activityChartRef.current, {
        type: "line",
        data: {
          labels,
          datasets: [
            {
              label: "Productive Activity",
              data: productiveData,
              borderColor: "#10B981",
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              tension: 0.4,
              fill: true,
            },
            {
              label: "Distracting Activity",
              data: distractingData,
              borderColor: "#EF4444",
              backgroundColor: "rgba(239, 68, 68, 0.1)",
              tension: 0.4,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: "top" },
          },
          scales: {
            y: { beginAtZero: true, max: Math.max(...productiveData, ...distractingData, 10) },
            x: {
              ticks: {
                autoSkip: true,
                maxTicksLimit: 10,
              },
            },
          },
        },
      });
    }

    // Time Distribution Chart
    if (timeDistChartRef.current) {
      if (timeDistChartInstance.current) {
        timeDistChartInstance.current.destroy();
      }
      const { labels, data, backgroundColors } = processTimeDistribution();
      timeDistChartInstance.current = new Chart(timeDistChartRef.current, {
        type: "pie",
        data: {
          labels,
          datasets: [
            {
              data,
              backgroundColor: backgroundColors,
              borderColor: "#ffffff",
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: "top" },
          },
        },
      });
    }

    // Cleanup
    return () => {
      if (activityChartInstance.current) activityChartInstance.current.destroy();
      if (timeDistChartInstance.current) timeDistChartInstance.current.destroy();
    };
  }, [dashboardData, loading, error]);

  if (loading) {
    return <div className="min-h-screen p-6 bg-gray-50">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen p-6 bg-gray-50">Error: {error}</div>;
  }

  return (
    <section id="dashboard-overview" className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
          <p className="text-gray-600">Real-time insights into your digital activity and security status</p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Productivity Score</p>
                <p className="text-2xl font-bold text-green-600">{dashboardData.focusScore}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">Trend unavailable</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Threats</p>
                <p className="text-2xl font-bold text-red-600">-</p>
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
                    d="M12 9v2m0 4h.01M5.062 19h13.876c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">No data available</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Coding Time</p>
                <p className="text-2xl font-bold text-blue-600">{dashboardData.productivityTime}</p>
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
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">Goal: 6h daily</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Focus Sessions</p>
                <p className="text-2xl font-bold text-purple-600">-</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">No data available</p>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Activity Timeline</h3>
            <div className="h-64">
              <canvas id="activityChart" ref={activityChartRef} className="w-full h-full" />
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Time Distribution</h3>
            <div className="h-64">
              <canvas id="timeDistributionChart" ref={timeDistChartRef} className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Recent Activity & Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Recent Security Alerts</h3>
              <span className="text-sm text-gray-500">Last 24h</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200/30">
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
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">No alerts available</p>
                  <p className="text-xs text-gray-600">-</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Top Productive Activities</h3>
              <span className="text-sm text-gray-500">Today</span>
            </div>
            <div className="space-y-4">
              {dashboardData.activities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200/30"
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{activity.name}</p>
                      <p className="text-xs text-gray-600">{activity.category}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-green-600">{activity.duration}</span>
                </div>
              ))}
              {dashboardData.activities.length === 0 && (
                <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200/30">
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
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">No activities available</p>
                    <p className="text-xs text-gray-600">-</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardOverview;
