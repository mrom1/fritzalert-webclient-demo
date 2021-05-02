<template>
    <v-row justify="center" align="center">
        <v-spacer />
        <v-col cols="12" sm="8" md="6">

            <div class="chartDownloadstreamContainer">
                <v-card>
                    <v-card-title class="headline">
                        Download
                    </v-card-title>
                    <v-card-text>
                        <ChartDownloadstream />
                    </v-card-text>
                </v-card>

            </div>
        </v-col>
        <v-spacer />
        <v-col cols="12" sm="8" md="6">

            <div class="chartUploadstreamContainer">
                <v-card>
                    <v-card-title class="headline">
                        Upload
                    </v-card-title>
                    <v-card-text>
                        <ChartUploadstream />
                    </v-card-text>
                </v-card>
                </div>
        </v-col>
    </v-row>
</template>

<script>
    import { ChartDownloadstream } from '~/components/ChartDownloadstream'
    import { ChartUploadstream } from '~/components/ChartUploadstream'

    export default {
    }
</script>


<style scoped>
    .chartDownloadstreamContainer {
        padding-top: 2em;
    }
    .chartUploadstreamContainer {
        padding-top: 2em;
    }
</style>
