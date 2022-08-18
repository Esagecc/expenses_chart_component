let xmlhttp = new XMLHttpRequest();
let url = "http://127.0.0.1:5500/Data.json"
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        // console.log(data)
        day = data.map(function(elem){
            return elem.day;
        })
        amount = data.map(function(elem){
            return elem.amount;
        })
        // console.log(amount)

        const ctx = document.getElementById('canvas').getContext('2d');
        const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
        labels: day,
        datasets: [{
            data: amount,
            backgroundColor: [
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(186, 34%, 60%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)'
            ],
            borderRadius: '5'
        }]
        },
        options: {
            layout: {
                padding: {
                    left: -10,
                    right: -10
                }
            },
            onHover: function(e, chartElement) {
                if(chartElement.length == 1){
                    console.log(e.native.target.style.cursor = 'pointer');
                } 
                if(chartElement.length == 0){
                  e.hative.target.style.cursor = 'default';  
                }    
                },
        scales: {
            y: {
                beginAtZero: true
            },
            x: {
                grid: {
                   display: false,
                   drawBorder: false
                },
                angleLines: {
                    display: false
                  }
             },
             y: {
                grid: {
                   display: false,
                   drawBorder: false
                },
                ticks: {
                    display: false
                }
             },
        },
        plugins: {
            legend: {
                display: false
            },
            datasets: {
                onHover: function(e) {
                   e.target.style.cursor = 'pointer';
                }
             }
        }
    }
});

    }
}
