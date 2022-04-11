import Vue from 'vue'
import Vuex from 'vuex'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from 'algorand-walletconnect-qrcode-modal'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: null,
    accounts: [],
    connector: null,
    abbreviatedAccount: null,
    dark: false,
  },
  mutations: {
    setAccounts (state, payload) {
      state.accounts = payload
      state.account = payload ? payload[0] : null
      state.abbreviatedAccount = payload ? `${payload[0].slice(0,4)}...${payload[0].slice(-4)}` : null
    },
    setConnector (state, payload) {
      state.connector = payload
    },
    setDark (state, payload) {
      state.dark = payload
    }
  },
  actions: {
    connect ({state, commit}, create) {
      let connector = state.connector || new WalletConnect({
        bridge: 'https://bridge.walletconnect.org',
        qrcodeModal: QRCodeModal
      })

      commit('setConnector', connector)

      if (!connector.connected && create === true) {
          connector.createSession()
      } else {
          commit('setAccounts', connector._accounts)
      }

      connector.on('connect', (error, payload) => {
          if (error) throw error
          let { accounts } = payload.params[0]
          commit('setAccounts', accounts)
      })

      connector.on('session_update', (error, payload) => {
          if (error) throw error
          let { accounts } = payload.params[0]
          commit('setAccounts', accounts)
      })

      connector.on('disconnect', (error) => {
          if (error) throw error
      })
    },
    disconnect ({state, commit}) {
      state.connector.killSession()
      commit('setAccounts', null)
    }
  },
  modules: {
  },
  plugins: [createPersistedState({
    key: 'honk',
    paths: ['dark']
  })],
})
