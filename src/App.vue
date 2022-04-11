<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
      :dark="true"
    >
      <div class="d-flex align-center headline font-weight-black">
        HONK!
      </div>

      <v-spacer></v-spacer>

      <theme-controller class="mt-5"></theme-controller>
      <wallet-connect></wallet-connect>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import WalletConnect from '@/components/WalletConnect'
import ThemeController from '@/components/ThemeController'

export default {
  name: 'App',

  components: {
    WalletConnect,
    ThemeController
  }
}
</script>
