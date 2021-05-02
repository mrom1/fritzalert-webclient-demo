<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="8" md="5">
                <div class="storageCurrentStorageCardContainer">
                    <v-card>
                        <v-card-title>
                            Current Storage
                        </v-card-title>
                        <v-card-text>
                            <v-icon x-large>mdi-harddisk</v-icon>
                            23.32 GB / 52.12 GB
                        </v-card-text>
                        <v-divider class="mx-4"></v-divider>
                        <v-card-actions>
                            <v-card-text>
                                Last Update: {{ new Date().toGMTString() }}
                            </v-card-text>
                            <v-spacer />
                            <v-btn icon>
                                <v-icon>mdi-refresh</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
                <div class="storageSettingsCardContainer">
                    <v-card>
                        <v-card-title>
                            Storage Settings
                        </v-card-title>
                        <v-card-subtitle>
                            Configure storage settings.<br />Be careful, all changes will be applied on the node immediatly!
                        </v-card-subtitle>
                        <v-btn color="primary"
                               class="mx-4"
                               small>
                            Show current Settings
                        </v-btn>
                        <v-spacer />

                        <v-card-actions>
                            <v-card-subtitle>
                                Change Settings
                            </v-card-subtitle>
                            <v-spacer />
                            <v-btn icon
                                   @click="showChangeStorageSettings = !showChangeStorageSettings">
                                <v-icon>{{ showPickledFiles ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                            </v-btn>
                        </v-card-actions>
                        <v-expand-transition>
                            <div v-show="showChangeStorageSettings">
                                <v-text-field label="Maximal allowed storage for Pickled files"
                                              suffix="MB"
                                              hint="Pickled files are usually only a couple of Kilobytes large."
                                              persistent-hint
                                              class="mx-4"></v-text-field>
                                <v-text-field label="Maximal allowed storage for Pcap files"
                                              suffix="MB"
                                              hint="Pcap files are usually around five Megabytes large."
                                              persistent-hint
                                              class="mx-4"></v-text-field>
                                <v-text-field label="Maximal allowed storage for temporary files"
                                              suffix="MB"
                                              hint="The analyzer node automatically deletes files with no suspicious activity."
                                              persistent-hint
                                              class="mx-4"></v-text-field>
                                <v-text-field label="How long to save Pickled files?"
                                              hint="Warning: Older files will be deleted when applying these settings!"
                                              suffix="Days"
                                              persistent-hint
                                              class="mx-4"></v-text-field>
                                <v-text-field label="How long to save Pcap files?"
                                              hint="Warning: Older files will be deleted when applying these settings!"
                                              suffix="Days"
                                              persistent-hint
                                              class="mx-4"></v-text-field>
                                <v-col align="right" justify="center">
                                    <v-btn color="primary"
                                           class="mx-4">
                                        Submit
                                    </v-btn>
                                </v-col>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </div>
            </v-col>
            <v-spacer />
            <v-col md="7">
                <div class="storageStoredFilesCardContainer">
                    <v-card>
                        <v-card-title>
                            Stored files
                        </v-card-title>
                        <v-card-actions>
                            <v-card-subtitle>
                                Show pickled files
                            </v-card-subtitle>
                            <v-spacer />
                            <v-btn icon
                                   @click="showPickledFiles = !showPickledFiles">
                                <v-icon>{{ showPickledFiles ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                            </v-btn>
                        </v-card-actions>
                        <v-expand-transition>
                            <div v-show="showPickledFiles">
                                <DatatableFiles :headers="headers" :items="desserts" />
                            </div>
                        </v-expand-transition>
                        <v-divider class="mx-4"></v-divider>
                        <v-card-actions>
                            <v-card-subtitle>Show PCAP files</v-card-subtitle>
                            <v-spacer />
                            <v-btn icon
                                   @click="showPcapFiles = !showPcapFiles">
                                <v-icon>{{ showPcapFiles ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                            </v-btn>
                        </v-card-actions>
                        <v-expand-transition>
                            <div v-show="showPcapFiles">
                                <v-divider></v-divider>
                                <DatatableFiles :headers="headers" :items="desserts" />
                            </div>
                        </v-expand-transition>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { DatatableFiles } from '~/components/DatatableFiles'

    export default {

        data: () => ({
            showPickledFiles: false,
            showPcapFiles: false,
            showChangeStorageSettings: false,

            search: '',
            headers: [
                {
                    text: 'File',
                    align: 'start',
                    value: 'name',
                },
                {
                    text: 'Size',
                    value: 'filesize',
                },
                {
                    text: 'Date modified',
                    value: 'date',
                },
                {
                    text: '',
                    value: 'controls',
                    sortable: false,
                },
            ],
            desserts: [
                {
                    name: 'this_is_a_long_long__long_name',
                    filesize: 'Ice cream',
                    date: new Date().toLocaleString(),
                },
                {
                    name: 'Ice cream sandwich',
                    filesize: 'Ice cream',
                },
                {
                    name: 'Eclair',
                    filesize: 'Cookie',
                },
                {
                    name: 'Cupcake',
                    filesize: 'Pastry',
                },
                {
                    name: 'Gingerbread',
                    filesize: 'Cookie',
                },
                {
                    name: 'Jelly bean',
                    filesize: 'Candy',
                },
                {
                    name: 'Lollipop',
                    filesize: 'Candy',
                },
                {
                    name: 'Honeycomb',
                    filesize: 'Toffee',
                },
            ],
        }),

        methods: {
            onDownloadButtonClick(item) {
                console.log("clicked item: " + item.name);
            }
        }
    }
</script>

<style scoped>
    .storageCurrentStorageCardContainer {
        padding-top: 2em;
    }

    .storageSettingsCardContainer {
        padding-top: 2em;
    }

    .storageStoredFilesCardContainer {
        padding-top: 2em;
    }
</style>
