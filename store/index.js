import Vue from 'vue'
import Vuex from 'vuex'

import movie from './modules/movie'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: {
        movie,
    }
});

export default store;