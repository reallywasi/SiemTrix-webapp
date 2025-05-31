import React from 'react';

const DashboardOverview = () => {



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
          {/* Productivity Score */}
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Productivity Score</p>
                <p className="text-2xl font-bold text-green-600">87%</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">+12% from yesterday</p>
          </div>

          {/* Active Threats */}
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Threats</p>
                <p className="text-2xl font-bold text-red-600">3</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M5.062 19h13.876c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">2 high priority</p>
          </div>

          {/* Coding Time */}
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Coding Time</p>
                <p className="text-2xl font-bold text-blue-600">5.2h</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">Goal: 6h daily</p>
          </div>

          {/* Focus Sessions */}
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Focus Sessions</p>
                <p className="text-2xl font-bold text-purple-600">8</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">Avg: 45min each</p>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Activity Timeline */}
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Activity Timeline</h3>
            <div className="h-64">
              <canvas id="activityChart" className="w-full h-full" />
            </div>
          </div>

          {/* Time Distribution */}
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Time Distribution</h3>
            <div className="h-64">
              <canvas id="timeDistributionChart" className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Recent Activity & Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Security Alerts */}
          <div className="bg-white rounded-lg border border-gray-200/30 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Recent Security Alerts</h3>
              <span className="text-sm text-gray-500">Last 24h</span>
            </div>
            <div className="space-y-4">
              {/* Alert 1 */}
              <div className="flex items-center p-3 bg-red-50 rounded-lg border border-red-200/30">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M5.062 19h13.876c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Suspicious domain accessed</p>
                  <p className="text-xs text-gray-600">malware-site.com - 2:34 PM</p>
                </div>
              </div>

              {/* Alert 2 */}
              <div className="flex items-center p-3 bg-yellow-50 rounded-lg border border-yellow-200/30">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Unusual login time</p>
                  <p className="text-xs text-gray-600">Login at 3:22 AM</p>
                </div>
              </div>

              {/* Alert 3 */}
              <div className="flex items-center p-3 bg-orange-50 rounded-lg border border-orange-200/30">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.414-1.414" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Firewall rule triggered</p>
                  <p className="text-xs text-gray-600">Port scan detected - 11:45 AM</p>
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
        {/* VS Code */}
        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200/30">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">VS Code</p>
              <p className="text-xs text-gray-600">Code editing</p>
            </div>
          </div>
          <span className="text-sm font-semibold text-green-600">2.5h</span>
        </div>

        {/* GitHub */}
        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200/30">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">GitHub</p>
              <p className="text-xs text-gray-600">Repository management</p>
            </div>
          </div>
          <span className="text-sm font-semibold text-blue-600">1.8h</span>
        </div>

        {/* LeetCode */}
        <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200/30">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">LeetCode</p>
              <p className="text-xs text-gray-600">Problem solving</p>
            </div>
          </div>
          <span className="text-sm font-semibold text-purple-600">1.2h</span>
        </div>

        {/* Documentation */}
        <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg border border-indigo-200/30">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Documentation</p>
              <p className="text-xs text-gray-600">Reading & research</p>
            </div>
          </div>
          <span className="text-sm font-semibold text-indigo-600">0.9h</span>
        </div>
      </div>
    </div>        </div>
      </div>
    </section>
  );
};

export default DashboardOverview;

