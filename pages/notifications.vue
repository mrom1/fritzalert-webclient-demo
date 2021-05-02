<template>
    <v-row justify="center" align="center">
        <v-spacer />
        <v-col cols="12" sm="8" md="5">
            <div class="notificationRulesCardContainer">
                <v-card>
                    <v-card-title>
                        Notification rules
                    </v-card-title>
                    <v-card-subtitle>
                        Configure notification settings.<br />
                        This will impact what kind of packages over a specified time are being seen as suspcious to the observing node.
                    </v-card-subtitle>
                    <v-btn color="primary"
                           small
                           class="mx-4">
                        Show notification settings
                    </v-btn>
                    <v-card-actions>
                        <v-card-text>
                            Change Settings
                        </v-card-text>
                        <v-spacer />
                        <v-btn icon
                               class="mx-4"
                               @click="showChangeNotificationSettings = !showChangeNotificationSettings">
                            <v-icon>{{ showChangeNotificationSettings ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                        <div v-show="showChangeNotificationSettings">
                            </div>
                        </v-expand-transition>
                </v-card>
            </div>
        </v-col>
        <v-col md="7">
            <div class="notificationsCardContainer">
                <v-card>
                    <v-card-title>
                        Recent notifications
                    </v-card-title>
                </v-card>
            </div>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        layout: "dashboard",

        data: () => ({
            showChangeNotificationSettings: false
        })
    }
</script>

<style scoped>
    .notificationRulesCardContainer {
        padding-top: 2em;
    }

    .notificationsCardContainer {
        padding-top: 2em;
    }
</style>
<template>
    <v-row >
        <v-spacer />
        <v-col cols="12" sm="8" md="5">
            <div class="notificationRulesCardContainer">
                <v-card>
                    <v-card-title>
                        Notification rules
                    </v-card-title>
                    <v-card-subtitle>
                        Configure notification settings.<br />
                        This will impact what kind of packages over a specified time are being seen as suspcious to the observing node.
                    </v-card-subtitle>
                    <v-btn color="primary"
                           small
                           class="mx-4">
                        Show notification settings
                    </v-btn>
                    <v-card-actions>
                        <v-card-text>
                            Change Settings
                        </v-card-text>
                        <v-spacer />
                        <v-btn icon
                               class="mx-4"
                               @click="showChangeNotificationSettings = !showChangeNotificationSettings">
                            <v-icon>{{ showChangeNotificationSettings ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                        <div v-show="showChangeNotificationSettings">
                            <v-checkbox label="Detect DHT Tracker"
                                        class="mx-4">
                            </v-checkbox>
                            <v-checkbox label="Detect P2P activity"
                                        class="mx-4">
                            </v-checkbox>
                            <v-text-field label="Suspicious Ports"
                                          class="mx-4"
                                          hint="You can declare multiple ports sperated by comma or use a range."
                                          persistent-hint>
                            </v-text-field>
                            <v-text-field label="Uploadstream threshold"
                                          class="mx-4"
                                          suffix="KBit/s"
                                          hint="All client connections above this limit will be suspicious regardless of the rules above."
                                          persistent-hint>
                            </v-text-field>
                            <v-text-field label="Uploadstream duration threshold"
                                          class="mx-4"
                                          suffix="seconds"
                                          hint="Used in conjuction with uploadstream threshold. The uploadstream has to be above the defined threshold for the specified time."
                                          persistent-hint>
                            </v-text-field>
                            <v-col align="center">
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
        <v-col md="7">
            <div class="notificationsCardContainer">
                <v-card>
                    <v-card-title>
                        Recent notifications
                    </v-card-title>
                </v-card>
            </div>
        </v-col>
    </v-row>
</template>

<script>
    export default {

        data: () => ({
            showChangeNotificationSettings: false
        })
    }
</script>

<style scoped>
    .notificationRulesCardContainer {
        padding-top: 2em;
    }

    .notificationsCardContainer {
        padding-top: 2em;
    }
</style>
