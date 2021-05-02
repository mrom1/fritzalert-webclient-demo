<template>
    <v-container>
        <div>
            <v-row justify="center" align="center">
                <div class="welcomeTextContainer">
                    <p><b>(This is a Demo! - No backend functionallity!)</b></p>
                    <p>Welcome to the FRITZ!Alert Webclient.</p>
                    <p>This Open Source Software allows you to configure rules for monitoring user activity in your local network.</p>
                    <p>You can host this software on a simple embedded system like a Raspberry Pi, store suspicious messages, and many more!</p>
                    <p>Please keep in mind that this is a free Open Source project which is still in an experimental state and by no means a finished product.</p>
                    <p>If you need a feature rich and reliable network analysis tool, you should look at other projects or commercial alternatives.</p>
                    <p>You are welcome to contribute! Check out the project on <a href="https://github.com/mrom1/fritzalert">Github</a>!</p>
                </div>
            </v-row>
            <div class="navigationCardsContainer">
                <v-row>
                    <v-col justify="center" align="center"
                           cols="2" sm="2" md="2">
                        <v-card>
                            <v-card-title primary-title
                                          class="justify-center">
                                <v-btn icon
                                       to="/users"
                                       router>
                                    <v-icon x-large>mdi-account-multiple</v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-card-text align="center">Users information</v-card-text>
                        </v-card>
                    </v-col>
                    <v-spacer />
                    <v-col cols="2" sm="2" md="2">
                        <v-card>
                            <v-card-title primary-title
                                          class="justify-center">
                                <v-btn icon
                                       to="/monitor"
                                       router>
                                    <v-icon x-large>mdi-wan</v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-card-text align="center">Network traffic</v-card-text>
                        </v-card>
                    </v-col>
                    <v-spacer />
                    <v-col cols="2" sm="2" md="2">
                        <v-card>
                            <v-card-title primary-title
                                          class="justify-center">
                                <v-btn icon
                                       to="/notifications"
                                       router>
                                    <v-icon x-large>mdi-bell-ring</v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-card-text align="center">Notifications</v-card-text>
                        </v-card>
                    </v-col>
                    <v-spacer />
                    <v-col cols="2" sm="2" md="2">
                        <v-card>
                            <v-card-title primary-title
                                          class="justify-center">
                                <v-btn icon
                                       to="/storage"
                                       router>
                                    <v-icon x-large>mdi-harddisk</v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-card-text align="center">Storage</v-card-text>
                        </v-card>
                    </v-col>
                    <v-spacer />
                    <v-col cols="2" sm="2" md="2">
                        <v-card>
                            <v-card-title primary-title
                                          class="justify-center">
                                <v-btn icon
                                       to="/help"
                                       router>
                                    <v-icon x-large>mdi-help</v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-card-text align="center">Help</v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </div>
    </v-container>
</template>


<style scoped>
    .welcomeTextContainer {
        align-items: center;
        justify-content: center;
        text-align: center;
        padding-top: 2em;
    }

    .navigationCardsContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 45vh;
    }
</style>
