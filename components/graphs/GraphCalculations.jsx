export default function GraphCalculations({ dashboardData }) {
  const calculateMetrics = () => {
    const totalTimeMinutes =
      parseFloat(dashboardData.productivityTime || 0) +
      parseFloat(dashboardData.distractionTime || 0);
    const entertainmentPercentage =
      totalTimeMinutes > 0
        ? ((parseFloat(dashboardData.distractionTime || 0) / totalTimeMinutes) * 100).toFixed(0)
        : 0;

    let contextSwitches = 0;
    for (let i = 1; i < dashboardData.timeline.length; i++) {
      if (dashboardData.timeline[i].category !== dashboardData.timeline[i - 1].category) {
        contextSwitches++;
      }
    }

    let tabSwitches = 0;
    for (let i = 1; i < dashboardData.timeline.length; i++) {
      const current = dashboardData.timeline[i];
      const previous = dashboardData.timeline[i - 1];
      if (
        current.category !== previous.category ||
        current.activity_type !== previous.activity_type
      ) {
        tabSwitches++;
      }
    }
    const timeframeHours = 15;
    const tabSwitchingRate = timeframeHours > 0 ? (tabSwitches / timeframeHours).toFixed(0) : 0;

    return {
      entertainmentPercentage,
      contextSwitches,
      tabSwitchingRate,
    };
  };

  const processDistractionTimeline = () => {
    if (!dashboardData.distractionIntervals?.length) {
      console.log('GraphCalculations: No distraction intervals, returning empty data');
      return { labels: [], distractionData: [], percentageData: [] };
    }

    const startHour = 0;
    const endHour = 23;
    const labels = [];
    const distractionData = Array(endHour - startHour + 1).fill(0);
    const totalData = Array(endHour - startHour + 1).fill(0);
    const percentageData = [];

    for (let hour = startHour; hour <= endHour; hour++) {
      const istHour = (hour + 5.5) % 24;
      const hourStr = Math.floor(istHour).toString().padStart(2, '0');
      const minStr = istHour % 1 === 0.5 ? '30' : '00';
      labels.push(`${hourStr}:${minStr}`);
    }

    dashboardData.timeline.forEach((entry, i) => {
      const startTime = new Date(entry.time).getTime();
      const nextEntry = dashboardData.timeline[i + 1];
      const endTime = nextEntry ? new Date(nextEntry.time).getTime() : startTime + 60000;
      const durationMinutes = (endTime - startTime) / (1000 * 60);
      const hourIndex = Math.floor(new Date(entry.time).getUTCHours() - startHour);

      if (hourIndex >= 0 && hourIndex < distractionData.length) {
        totalData[hourIndex] += durationMinutes;
        if (entry.category_type?.toLowerCase() === 'distracting') {
          distractionData[hourIndex] += durationMinutes;
        }
      }
    });

    for (let i = 0; i < distractionData.length; i++) {
      const percentage = totalData[i] > 0 ? (distractionData[i] / totalData[i]) * 100 : 0;
      percentageData.push(percentage.toFixed(0));
    }

    const result = { labels, distractionData, percentageData };
    console.log('DistractionTimeline Data:', result);
    return result;
  };

  return {
    metrics: calculateMetrics(),
    distractionTimelineData: processDistractionTimeline(),
  };
}