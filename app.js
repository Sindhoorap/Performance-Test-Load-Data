const labels = ['1 min', '4 min', '8 min', '9 min','19 min','26 min','28 min','29 min','30 min','32 min', '42 min','44 min','51 min'];

const data = {
    labels: labels,
    datasets: [
        {
            label: 'VOD',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
            hoverBorderColor: 'rgba(255, 99, 132, 1)',
            data: [0, 10, 10, 0,0,10,0,0,0,0, 100,0,20], // VOD percentages
        },
        {
            label: 'SLE',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(54, 162, 235, 0.4)',
            hoverBorderColor: 'rgba(54, 162, 235, 1)',
            data: [0, 10, 0, 0,0,0,0,0, 0,0,100,0,0], // SLE percentages
        },
        {
            label: 'Signup',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255, 206, 86, 0.4)',
            hoverBorderColor: 'rgba(255, 206, 86, 1)',
            data: [0, 10, 10, 10,100,0,100,10,100,10, 100,10,10], // Signup percentages
        },
    ],
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Profile 1 - BAU'
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time (min)' // Updated x-axis title
                }
            },
            y: {
                title: {
                    display: true,
                    text: '% of peak' // Updated y-axis title
                },
                suggestedMin: 0,
                suggestedMax: 100
            }
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    let datasetLabel = data.datasets[tooltipItem.datasetIndex].label;
                    let label = data.labels[tooltipItem.index];
                    let value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    return datasetLabel + ': ' + value + '% (' + label + ')';
                },
            },
        },
    },
};

window.onload = function () {
    let ctx = document.getElementById('loadChart').getContext('2d');
    new Chart(ctx, config);
};



