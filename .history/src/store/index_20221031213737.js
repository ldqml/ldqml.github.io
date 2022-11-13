import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'

Vue.use(Vuex)

new Vuex.Store({
    modules:{
        tab
    }
})