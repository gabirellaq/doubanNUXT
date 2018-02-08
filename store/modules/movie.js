import axiosRq from '../../util/util';

export const state = () => ({
    movie_in_theaters: [], //正在上映
    movie_coming_soon: [], //即将上映
    movie_us_box: [], //北美票房榜
    movie_top250:[], //top250
    movie_weekly: [], //口碑榜
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
        },
        GETMOVIETOP250 (state, res) {
            state.movie_top250 = res
        },
        GETMOVIEWEEKLY (state, res) {
            state.movie_weekly = res
        }
    },
    actions: {
        //正在热映      
        async getMovieInTheaters ({commit}, {count}) {
            let params = {
                'count': count || 8
            }
            let res = await axiosRq('GET', 'movie/in_theaters', params);
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
        },
        //top250
        async getMovieTop250 ({commit}) {
            let res = await axiosRq('GET', 'movie/top250');
            commit('GETMOVIETOP250',res);
            return res;
        },
        //口碑榜
        async getMovieWeekly ({commit}) {
            let res = await axiosRq('GET', 'movie/weekly');
            commit('GETMOVIEWEEKLY',res);
            return res;
        }
    }
}