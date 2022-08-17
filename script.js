let xmlhttp = new XMLHttpRequest();
let url = 


const ctx = document.getElementById('canvas').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
    
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'hsl(10, 79%, 65%)'
            ]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});