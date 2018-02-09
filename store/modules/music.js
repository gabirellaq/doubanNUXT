import axiosRq from '../../util/util';

export const state = () => ({
    music_popular: [], //流行
    music_light: [], //轻音乐
    music_rock:[], //摇滚
    music_classical:[], //古典
    music_ballad:[],//民谣
    music_rap:[], //说唱
})
export default {
    mutations: {
        GETMUSICSEARCH (state, playload) {
            switch(playload.q) {
                case '流行':
                    state.music_popular = playload.res;
                    break;
                case '轻音乐':
                    state.music_light = playload.res;
                    break;
                case '摇滚':
                    state.music_rock = playload.res;
                    break;
                case '古典':
                    state.music_classical = playload.res;
                    break;
                case '民谣':
                    state.music_ballad = playload.res;
                    break;
                case '说唱':
                    state.music_rap = playload.res;
                    break;
            }
            
        },
    },
    // actions: {
    //     //搜索      
    //     async getMusicSearch ({commit}, {q,count}) {
    //         let params = {
    //             'q': q,
    //             'count': count || 8
    //         }
    //         let res = await axiosRq('GET', 'music/search', params);
    //         commit('GETMUSICSEARCH',{
    //             q: q,
    //             res: res
    //         });
    //     },
    // }
}