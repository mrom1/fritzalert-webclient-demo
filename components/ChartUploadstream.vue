<template>
    <div class="bandwithChartContainer">
        <LineChart :chart-data="bandwithChartData" :options="bandwithChartOptions" :height="300" />
    </div>
</template>

<script>
    import { ChartColors } from './charts/ChartColors'
    import { LineChart } from './charts/LineChart'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        components: {
            LineChart
        },

        computed: {
            bandwithChartData() {
                return {
                    labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                    datasets: [
                        {
                            fill: true,
                            cubicInterpolationMode: "default",
                            steppedLine: false,
                            label: 'Kilobytes',
                            borderColor: ChartColors.blue,
                            backgroundColor: ChartColors.blue,
                            //data: this.currentDownloadstreamUsage
                            data: [5, 7, 6, 8, 12, 9, 5, 3, 6, 10, 8]
                        }
                    ],
                }
            },
            ...mapGetters([
                'currentDownloadstreamUsage'
            ])
        },

        mounted() {
            this.$store.dispatch('startPollingDownloadstreamUsage')
        },

        data() {
            return {
                bandwithChartOptions: {
                    responsive: true,
                    legend: {
                        display: false,
                    },
                    title: {
                        display: true,
                        text: 'Current Uploadstream in KB/s',
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
        },

    }
</script>
