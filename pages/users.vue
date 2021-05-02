<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
            
            <v-card>
                <v-card-title class="headline">
                    User Information
                </v-card-title>

                <v-card-actions>
                    <v-row justify="center" align="center">
                        <v-col md="8">
                            <v-card-text>
                                Active User Information
                            </v-card-text>
                        </v-col>
                        <v-spacer />
                        <v-col justify="center" align="right">
                            <v-btn icon
                                   class="mx-2"
                                   @click="showActiveUsers = !showActiveUsers">
                                <v-icon>{{ showActiveUsers ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
                <v-expand-transition>
                    <div v-show="showActiveUsers"
                         class="mx-4">
                        <v-card-text>
                            Information about currently active users, basically logging / mapping their PC name to a IP and HW address.
                            Possibly a mapping of their bandwith usage if the backend will support this in the future.
                        </v-card-text>
                    </div>
                </v-expand-transition>


                <v-card-actions>
                    <v-row justify="center" align="center">
                        <v-col md="8">
                            <v-card-text>
                                Logged User Information
                            </v-card-text>
                        </v-col>
                        <v-spacer />
                        <v-col justify="center" align="right">
                            <v-btn icon
                                   class="mx-2"
                                   @click="showLoggedUsers = !showLoggedUsers">
                                <v-icon>{{ showLoggedUsers ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
                <v-expand-transition>
                    <div v-show="showLoggedUsers"
                         class="mx-4">
                        <v-card-text>
                            Same as active user information, just with old inactive logged data. Showing a mapping of PC name to a IP and HW address.
                            Possibly a mapping of their bandwith usage if the backend will support this in the future.
                        </v-card-text>
                    </div>
                </v-expand-transition>
            </v-card>
        </v-col>
    </v-row>
</template>


<script>
    export default {
        data: () => ({
            showActiveUsers: false,
            showLoggedUsers: false
        })
    }
</script>
