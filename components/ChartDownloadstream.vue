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
                    datasets: [
                        {
                            fill: true,
                            label: 'Kilobytes',
                            borderColor: ChartColors.orange,
                            backgroundColor: ChartColors.orange,
                            data: [10, 15, 20]
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
                                ticks: {
                                    beginAtZero: true
                                }
                            }
                        ]
                    }
                }
            }
        }
    }
</script>
