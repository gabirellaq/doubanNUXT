import axiosRq from '../../util/util';

export const state = () => ({
    movie_in_theaters: [], //正在上映
    movie_coming_soon: [], //即将上映
    movie_us_box: [], //北美票房榜
})
export default {
    mutations: {
        GETMOVIEINTHEATERS (state, res) {
            state.movie_in_theaters = res;
        },
        GETMOVIECOMINGSOON (state, res) {
            state.movie_coming_soon = res
        },
        GETMOVIEUSBOX (state, res) {
            state.movie_us_box = res
        }
    },
    actions: {
        //正在热映      
        getMovieInTheaters ({commit}, {count}) {
            let params = {
                'count': count || 8
            }
            let res = axiosRq('GET', 'movie/in_theaters', params);
            commit('GETMOVIEINTHEATERS',res);
        },
        //即将上线
        async getMovieComingSoon ({commit}, {count}) {
            let params = {
                'count': count || 8
            }
            let res = await axiosRq('GET', 'movie/coming_soon', params);
            commit('GETMOVIECOMINGSOON',res);
            return res;
        },
        //北美票房榜
        async getMovieUsBox ({commit}) {
            let res = await axiosRq('GET', 'movie/us_box');
            commit('GETMOVIEUSBOX',res);
            return res;
        }
    }
}