import Vue from 'vue'
import Vuex from 'vuex'

import {
  setToken,
  getToken,
  getCity,
  setCity,
  setCityValue,
  getCityValue
} from '@/utils'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getToken() || {},
    city: getCity() || [],
    homeEare: getCityValue() || []
  },

  mutations: {
    setuser (state, payload) {
      state.user = payload
      setToken(payload)
    },
    setCity (state, CurrentCity) {
      state.city = CurrentCity
      setCity(CurrentCity)
    },
    setCityValue (state, EareValue) {
      state.homeEare = EareValue
      setCityValue(EareValue)
    }
  }
})
