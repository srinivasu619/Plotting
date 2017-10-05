let CHART = document.getElementById("lineChart").getContext('2d');
const options = {
    title: {
        display: true,
        text: 'Literacy    Rate    Distribution',
        position:'top',
        fontStyle:'bold',
        fontSize:16,
        fontFamily:'Abel'
    },
    legend: {
        display: true,
        position:'bottom'
    },
    elements: {
        line: {
            tension: 0
        }
    },
    scales: {
        yAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'No. of people',
                fontSize: 14
            },

        }],
        xAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Age Group',
                fontSize: 14,
            },
            gridLines: {
                display: false
            }
        }]
    },
}
const data = {
    labels: ["0-9", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80-89", "90-99"],
    datasets: [{
            label: "Illiterate People",
            fill: false,
            borderColor: '#e85f71',
            borderWidth: 2,
            data: [2154044, 263628, 453345, 506509, 336998, 200936, 156216, 73183, 25349, 6824]
        },
        {
            label: "Literate People",
            fill: false,
            borderColor: 'rgba(61, 204, 159, 1)',
            borderWidth: 2,
            data: [776096, 2727150, 2332440, 1704497, 1095469, 558569, 294697, 124732, 31480, 6176]
        }
    ]
};
Chart.defaults.global.animation = {
    easing:'linear',
    duration:500
}
let lineChart = new Chart(CHART, {
    type: 'line',
    data: data,
    options: options
});
CHART = document.getElementById("lineChart1").getContext('2d');
lineChart = new Chart(CHART, {
    type: 'line',
    data: data,
    options: options
});
CHART = document.getElementById("lineChart2").getContext('2d');
lineChart = new Chart(CHART, {
    type: 'line',
    data: data,
    options: options
});