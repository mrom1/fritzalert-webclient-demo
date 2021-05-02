<template>
    <v-row justify="center" align="center">
        <v-col md="8">
            <div class="helpCardContainer">
                <v-card>
                    <v-card-title class="headline">
                        Frequently Asked Questions
                    </v-card-title>
                    <v-card-subtitle>
                        This section is supposed to give an overview on common questions.<br />
                        If you run into software related problems like compiling, feel free to contact me on <a href="https://github.com">Github</a> :-)
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-row justify="center" align="center">
                            <v-col md="8">
                                <v-card-text>
                                    Which operating system of FRITZ!Box has this been tested on?
                                </v-card-text>
                            </v-col>
                            <v-spacer />
                            <v-col justify="center" align="right">
                                <v-btn icon
                                       class="mx-2"
                                       @click="showHelpTextFritzOS = !showHelpTextFritzOS">
                                    <v-icon>{{ showHelpTextFritzOS ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-expand-transition>
                        <div v-show="showHelpTextFritzOS"
                             class="mx-4">
                            <v-card-text>
                                The backend of FRITZ!Alert depends on the python package <a href="">fritzcap</a>.<br />
                                I tested this software on the FRITZ!OS Version 06.34. In theory every version supported by fritzcap should work.<br />
                                The device I used to test this software is a rather old FRITZ!Box 7360SL.
                            </v-card-text>
                        </div>
                    </v-expand-transition>

                    <v-card-action>
                        <v-row justify="center" align="center">
                            <v-col md="8">
                                <v-card-text class="mx-2">
                                    What device can I use as a server to set this up?
                                </v-card-text>
                            </v-col>
                            <v-spacer />
                            <v-col justify="center" align="right">
                                <v-btn icon
                                       class="mx-4"
                                       @click="showHelpTextSupportedDevices = !showHelpTextSupportedDevices">
                                    <v-icon>{{ showHelpTextSupportedDevices ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-action>
                    <v-expand-transition>
                        <div v-show="showHelpTextSupportedDevices"
                             class="mx-4">
                            <v-card-text>
                                Looking at it from a processing power point of view, a RaspberryPI is fine. </br>
                                However, from a storage point of view you should use a additional hard drive in this case.
                            </v-card-text>
                        </div>
                    </v-expand-transition>

                    <v-card-action>
                        <v-row justify="center" align="center">
                            <v-col md="8">
                                <v-card-text class="mx-2">
                                    How much storage should my server have?
                                </v-card-text>
                            </v-col>
                            <v-spacer />
                            <v-col justify="center" align="right">
                                <v-btn icon
                                       class="mx-4"
                                       @click="showHelpTextRecommendedStorage = !showHelpTextRecommendedStorage">
                                    <v-icon>{{ showHelpTextRecommendedStorage ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-action>
                    <v-expand-transition>
                        <div v-show="showHelpTextRecommendedStorage"
                             class="mx-4">
                            <v-card-text>
                                This enterly depends on how you configure your system. This means how many clients you have in your network
                                aswell as how much suspicious activity is going on. As a general rule of thumb you should allocate at least 10 GB
                                for this and check on it frequently in the beginning.
                            </v-card-text>
                        </div>
                    </v-expand-transition>

                    <v-card-action>
                        <v-row justify="center" align="center">
                            <v-col>
                                <v-card-text class="mx-2">
                                    What is a pickled file?
                                </v-card-text>
                            </v-col>
                            <v-spacer />
                            <v-col justify="center" align="right">
                                <v-btn icon
                                       class="mx-4"
                                       @click="showHelpTextPickledFile = !showHelpTextPickledFile">
                                    <v-icon>{{ showHelpTextPickledFile ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-action>
                    <v-expand-transition>
                        <div v-show="showHelpTextPickledFile"
                             class="mx-4">
                            <v-card-text>
                                A pickled file is a file of reduced size and information. Instead of saving huge files of captured data we
                                'pickle' the data for the part raising the notification. This allows us to save on data storage. 
                            </v-card-text>
                        </div>
                    </v-expand-transition>


                    <v-card-action>
                        <v-row justify="center" align="center">
                            <v-col md="8">
                                <v-card-text class="mx-2">
                                    I have troubles setting up the backend, is there any guide?
                                </v-card-text>
                            </v-col>
                            <v-spacer />
                            <v-col justify="center" align="right">
                                <v-btn icon
                                       class="mx-4"
                                       @click="showHelpTextBackendSetup = !showHelpTextBackendSetup">
                                    <v-icon>{{ showHelpTextBackendSetup ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-action>
                    <v-expand-transition>
                        <div v-show="showHelpTextBackendSetup"
                             class="mx-4">
                            <v-card-text>
                                At this point in time there is no documentation to this as the code is still in a experimental state.
                                I can only advise you to check out the <a href="https://github.com/mrom1/fritzalert">Github repository</a> from time to time.
                            </v-card-text>
                        </div>
                    </v-expand-transition>


                    <v-card-action>
                        <v-row justify="center" align="center">
                            <v-col>
                                <v-card-text class="mx-2">
                                    How can I contribute?
                                </v-card-text>
                            </v-col>
                            <v-spacer />
                            <v-col justify="center" align="right">
                                <v-btn icon
                                       class="mx-4"
                                       @click="showHelpTextContribute = !showHelpTextContribute">
                                    <v-icon>{{ showHelpTextContribute ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-action>
                    <v-expand-transition>
                        <div v-show="showHelpTextContribute"
                             class="mx-4">
                            <v-card-text>
                                If you are interessted in contributing leave me a message on <a href="https://github.com/mrom1">Github</a>! :-)
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </div>

        </v-col>
    </v-row>
</template>

<script>

    export default {

        data: () => ({
            showHelpTextFritzOS: false,
            showHelpTextSupportedDevices: false,
            showHelpTextRecommendedStorage: false,
            showHelpTextPickledFile: false,
            showHelpTextBackendSetup: false,
            showHelpTextContribute: false,
        })
    }
</script>

<style scoped>
    .helpCardContainer {
        padding-top: 2em;
    }
</style>
