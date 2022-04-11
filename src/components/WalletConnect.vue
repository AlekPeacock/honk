<template>
    <div>
        <v-btn v-if="!connected" color="accent" @click="connect(true)">
            <span class="text-capitalize">
                Connect Wallet
            </span>
        </v-btn>
        <v-dialog  
            v-else
            v-model="showMenu"
            fullscreen
            transition="dialog-bottom-transition"
        >
            <template v-slot:activator="{on}">
                <v-btn  v-on="on" color="accent">
                    <span class="text-capitalize">
                        {{abbreviatedAccount}}
                    </span>
                </v-btn>
            </template>
            <v-card>
                <v-card-title class="secondary">
                    <v-icon class="mr-3">fas fa-cog</v-icon> Settings
                    <v-spacer/>
                    <v-btn icon @click="showMenu = false">
                        <v-icon>fas fa-times</v-icon>
                    </v-btn>
                </v-card-title>
                <v-divider/>
                <v-list nav >

                    <!-- DISCONNECT BUTTON -->
                    <v-list-item class="px-5" @click="disconnect()">
                        <v-list-item-content>
                            <v-list-item-title class="font-weight-bold">
                                <v-icon class="mr-3">fas fa-sign-out-alt</v-icon> Disconnect Wallet
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
// import algosdk from 'algosdk'
// import { formatJsonRpcRequest } from '@json-rpc-tools/utils'

export default {
    name: 'WalletConnect',

    data () {
        return {
            showMenu: false
        }
    },

    computed: {
        account () {
            return this.$store.state.account
        },
        connector () {
            return this.$store.state.connector
        },
        connected () {
            return this.connector ? this.connector._connected : false
        },
        abbreviatedAccount () {
            return this.$store.state.abbreviatedAccount
        }
    },

    methods: {
        connect (prompt = true) {
            this.$store.dispatch('connect', prompt)
        },
        disconnect () {
            this.$store.dispatch('disconnect')
        }
    },

    mounted () {
        this.connect(false)
    }
}
</script>