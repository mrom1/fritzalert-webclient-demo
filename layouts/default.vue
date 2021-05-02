<template>
    <v-app>
        <v-app-bar :clipped-left="clipped"
                   fixed
                   app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-btn icon
                   @click.stop="miniVariant = !miniVariant">
                <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
            </v-btn>
            <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark"
                   icon>
                <v-icon>mdi-{{ `lightbulb-${$vuetify.theme.dark ? 'off' : 'on'}` }}-outline</v-icon>
            </v-btn>
            <v-spacer />
            <v-btn icon>
                <v-icon>mdi-logout</v-icon>
            </v-btn>

        </v-app-bar>
        <v-navigation-drawer v-model="drawer"
                             :mini-variant="miniVariant"
                             :clipped="clipped"
                             fixed
                             app>
            <v-list>
                <v-list-item v-for="(item, i) in navigationItems"
                             :key="i"
                             :to="item.to"
                             router
                             exact>
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title" />
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main>
            <v-container>
                <nuxt />
            </v-container>
        </v-main>
        <v-footer :absolute="!fixed"
                  app>
            <span>&copy; {{ new Date().getFullYear() }}</span>
            <v-spacer />
            <span>Project source on <a href="https://github.com/mrom1/fritzalert">Github</a></span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        layout: 'dashboard',

        data() {
            return {
                clipped: false,
                fixed: false,
                drawer: false,
                miniVariant: true,

                navigationItems: [
                    {
                        icon: "mdi-home",
                        title: "Home",
                        to: "/home",
                    },
                    {
                        icon: "mdi-account-multiple",
                        title: "Users",
                        to: "/users",
                    },
                    {
                        icon: "mdi-wan",
                        title: "Monitor",
                        to: "/monitor",
                    },
                    {
                        icon: "mdi-bell-ring",
                        title: "Notifications",
                        to: "/notifications",
                    },
                    {
                        icon: "mdi-harddisk",
                        title: "Storage",
                        to: "/storage",
                    },
                    {
                        icon: "mdi-help",
                        title: "Help",
                        to: "/help"
                    }
                ],
            }
        }
    }
</script>
