"use client"
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function FocusDistractionChart({ dashboardData }) {
  const focusDistractionChartRef = useRef(null);
  const focusDistractionChartInstance = useRef(null);

  // Process Focus and Distraction Cycle data
  const processFocusDistractionCycles = () => {
    if (!dashboardData?.timeline?.length) {
      console.log('FocusDistractionChart: Timeline is empty, returning empty data');
      return { labels: [], focusData: [], distractionData: [] };
    }

    // Create hourly buckets (0:00–23:59 UTC, covering full day)
    const startHour = 0; // 5:30 AM IST
    const endHour = 23; // 5:29 AM IST next day
    const labels = [];
    const focusData = Array(endHour - startHour + 1).fill(0);
    const distractionData = Array(endHour - startHour + 1).fill(0);

    for (let hour = startHour; hour <= endHour; hour++) {
      const istHour = (hour + 5.5) % 24; // Convert UTC to IST
      const hourStr = Math.floor(istHour).toString().padStart(2, '0');
      const minStr = istHour % 1 === 0.5 ? '30' : '00';
      labels.push(`${hourStr}:${minStr}`);
    }

    // Aggregate durations by hour
    for (let i = 0; i < dashboardData.timeline.length - 1; i++) {
      const current = dashboardData.timeline[i];
      const next = dashboardData.timeline[i + 1];
      const startTime = new Date(current.time).getTime();
      const endTime = next ? new Date(next.time).getTime() : startTime + 60000; // Assume 1 min if last
      const durationMinutes = (endTime - startTime) / (1000 * 60);
      const hourIndex = Math.floor(new Date(current.time).getUTCHours() - startHour);

      if (hourIndex >= 0 && hourIndex < focusData.length) {
        const normalizedCategoryType = current.category_type?.toLowerCase();
        console.log('Processing entry:', { current, hourIndex, durationMinutes, normalizedCategoryType });
        if (normalizedCategoryType === 'productive') {
          focusData[hourIndex] += durationMinutes;
        } else if (normalizedCategoryType === 'distracting') {
          distractionData[hourIndex] += durationMinutes;
        }
      }
    }

    const result = { labels, focusData, distractionData };
    console.log('FocusDistractionChart Data:', result);
    return result;
  };

  const chartData = processFocusDistractionCycles();

  useEffect(() => {
    if (focusDistractionChartRef.current) {
      if (focusDistractionChartInstance.current) {
        focusDistractionChartInstance.current.destroy();
      }

      // Use mock data if chartData is empty for debugging
      const dataToUse = chartData.labels.length
        ? chartData
        : {
            labels: ['09:00', '10:00', '11:00'],
            focusData: [30, 45, 20],
            distractionData: [10, 15, 5],
          };

      focusDistractionChartInstance.current = new Chart(focusDistractionChartRef.current, {
        type: 'bar',
        data: {
          labels: dataToUse.labels,
          datasets: [
            {
              label: 'Focus',
              data: dataToUse.focusData,
              backgroundColor: '#10B981',
              stack: 'Stack 0',
            },
            {
              label: 'Distraction',
              data: dataToUse.distractionData,
              backgroundColor: '#EF4444',
              stack: 'Stack 0',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Focus and Distraction Cycles' },
          },
          scales: {
            x: {
              stacked: true,
              ticks: { autoSkip: true, maxTicksLimit: 10 },
            },
            y: {
              stacked: true,
              beginAtZero: true,
              title: { display: true, text: 'Minutes' },
            },
          },
        },
      });
    }

    return () => {
      if (focusDistractionChartInstance.current) {
        focusDistractionChartInstance.current.destroy();
      }
    };
  }, [chartData]); // Re-run when chartData changes

  return (
    <div className="h-64 border border-red-500">
      <canvas id="focusDistractionChart" ref={focusDistractionChartRef} />
    </div>
  );
}

export default FocusDistractionChart;