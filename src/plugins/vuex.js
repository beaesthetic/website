import Vue from 'vue'
import Vuex from 'vuex'

import contentModule from '../store/website-content'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        content: contentModule
    }
});

export default store
