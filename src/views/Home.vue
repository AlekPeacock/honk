<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <pre>{{accountDetails}}</pre>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',

    computed: {
      account () {
        return this.$store.state.account
      }
    },

    asyncComputed: {
      accountDetails () {
        if (!this.account) return null
        return this.$http.get(`https://algoindexer.testnet.algoexplorerapi.io/v2/accounts/${this.account}`)
        .then(result => result.json())
      }
    }
  }
</script>
