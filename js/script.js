



    var ctx = document.getElementById('donutChart').getContext('2d');
    var donutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Avance del curso', 'Faltante', 'Calificación baja'],
            datasets: [{
                label: 'Avance del curso',
                data: [70, 20, 10], // Porcentajes de avance, faltante y baja calificación
                backgroundColor: ['#28a745', '#6c757d', '#4b8c2f'], // Verde, Gris, Verde Oscuro
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                        }
                    }
                }
            }
        }
    });
