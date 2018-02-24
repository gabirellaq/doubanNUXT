import Vue from 'vue'
import Vuex from 'vuex'

import movie from './modules/movie'
import book from './modules/book'
import music from './modules/music'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: {
        movie,
        book,
        music,
    }
});

export default store;