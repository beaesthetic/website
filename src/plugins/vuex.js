import Vue from 'vue'
import Vuex from 'vuex'

import serviceModule from '../store/services'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        services: serviceModule
    }
});

export default store
