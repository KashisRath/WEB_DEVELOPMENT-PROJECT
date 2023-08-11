// Sample data for the analytics chart
const campaignLabels = ['Campaign 1', 'Campaign 2', 'Campaign 3', 'Campaign 4', 'Campaign 5'];
const campaignData = [150, 230, 420, 310, 280];

// Get the canvas element for the chart
const analyticsChartCanvas = document.getElementById('analytics-chart');

// Create the chart
const analyticsChart = new Chart(analyticsChartCanvas, {
    type: 'bar',
    data: {
        labels: campaignLabels,
        datasets: [{
            label: 'Engagement',
            data: campaignData,
            backgroundColor: '#FF5733',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
