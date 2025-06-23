"use client"
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function DistractionTimelineChart({ distractionTimelineData }) {
  const distractionChartRef = useRef(null);
  const distractionChartInstance = useRef(null);

  useEffect(() => {
    if (distractionChartRef.current) {
      if (distractionChartInstance.current) {
        distractionChartInstance.current.destroy();
      }
      const { labels, distractionData, percentageData } = distractionTimelineData;
      distractionChartInstance.current = new Chart(distractionChartRef.current, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: 'Distraction Level (min)',
              data: distractionData,
              borderColor: '#EF4444',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              tension: 0.4,
              fill: true,
              yAxisID: 'y',
            },
            {
              label: 'Distraction Percentage (%)',
              data: percentageData,
              borderColor: '#F97316',
              backgroundColor: 'rgba(249, 115, 22, 0.1)',
              tension: 0.4,
              fill: true,
              yAxisID: 'y1',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'top' },
          },
          scales: {
            y: {
              beginAtZero: true,
              max: Math.max(...distractionData, 60),
              title: { display: true, text: 'Minutes' },
            },
            y1: {
              position: 'right',
              beginAtZero: true,
              max: 100,
              title: { display: true, text: 'Percentage (%)' },
              grid: { drawOnChartArea: false },
            },
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

    return () => {
      if (distractionChartInstance.current) {
        distractionChartInstance.current.destroy();
      }
    };
  }, [distractionTimelineData]);

  return (
    <div className="h-64 border border-red-500">
      <canvas id="distractionChart" ref={distractionChartRef} />
    </div>
  );
}

export default DistractionTimelineChart;