<template>
    <v-container>
        <v-text-field v-model="search"
                      class="mx-4"
                      append-icon="mdi-magnify"
                      label="Search"
                      single-line
                      hide-details></v-text-field>
        <template>
            <v-data-table :headers="headers"
                          :items="items"
                          :items-per-page="5"
                          :search="search"
                          item-key="name"
                          class="elevation-1"
                          :footer-props="{
                        showFirstLastPage: true,
                        firstIcon: 'mdi-arrow-collapse-left',
                        lastIcon: 'mdi-arrow-collapse-right',
                        prevIcon: 'mdi-minus',
                        nextIcon: 'mdi-plus'
                                    }">
                <template v-slot:item.controls="props">
                    <v-btn class="mx-2" fab small
                           @click="onDownloadButtonClick(props.item)">
                        <v-icon>mdi-download</v-icon>
                    </v-btn>

                </template>
            </v-data-table>
        </template>
    </v-container>
</template>


<script>
    export default {
        props: ['headers', 'items'],

        data: () => ({
            showPickledFiles: false,
            showPcapFiles: false,
            search: '',
        }),
        methods: {
            onDownloadButtonClick(item) {
                console.log('item clicked: ' + item.name);
            }
        }
    }
</script>
