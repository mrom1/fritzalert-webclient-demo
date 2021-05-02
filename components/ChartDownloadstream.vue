<template>
    <div class="bandwithChartContainer">
        <LineChart :chart-data="bandwithChartData" :options="bandwithChartOptions" :height="300" />
    </div>
</template>

<script>
    import { ChartColors } from './charts/ChartColors'
    import { LineChart } from './charts/LineChart'

    export default {
        components: {
            LineChart
        },

        data() {
            return {
                bandwithChartData: {
                    labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                    datasets: [
                        {
                            fill: true,
                            label: 'Kilobytes',
                            borderColor: ChartColors.orange,
                            backgroundColor: ChartColors.orange,
                            data: [10, 15, 20, 22, 18, 23, 30, 32, 35, 29, 22]
                        }
                    ]
                },
                bandwithChartOptions: {
                    responsive: true,
                    legend: {
                        display: false,
                    },
                    title: {
                        display: true,
                        text: 'Current Downloadstream in KB/s',
                    },
                    scales: {
                        yAxes: [
                            {
                                gridLines: {
                                    display: true,
                                    color: ChartColors.grey,
                                },

                                ticks: {
                                    beginAtZero: true,
                                    max: 50
                                }
                            }
                        ],
                        xAxes: [
                            {
                                gridLines: {
                                    display: true,
                                    color: ChartColors.grey,
                                },

                                ticks: {
                                    display: false
                                }
                            }
                        ]
                    }
                }
            }
        }
    }
</script>
