<template>
    <div>
        <v-switch
            dense
            inset
            prepend-icon="fas fa-moon"
            v-model="dark"
            :dark="true"
            color="white"
        ></v-switch>
    </div>
</template>

<script>
export default {
    name: 'ThemeController',

    computed: {
        dark: {
            get () {
                return !this.$store.state.dark
            },
            set (value) {
                this.$vuetify.theme.dark = !value
                this.$store.commit('setDark', !value)
            }
        }
    }
}
</script>