import axiosRq from '../../util/util';

export const state = () => ({
    music_popular: {
        title:'',
        musics:{}
    }, //流行
    music_light: {
        title:'',
        musics:{}
    }, //轻音乐
    music_rock:{
        title:'',
        musics:{}
    }, //摇滚
    music_classical:{
        title:'',
        musics:{}
    }, //古典
    music_ballad:{
        title:'',
        musics:{}
    },//民谣
    music_rap:{
        title:'',
        musics:{}
    }, //说唱
})
export default {
    mutations: {
        GETMUSICSEARCH (state, playload) {
            switch(playload.q) {
                case '流行':
                    state.music_popular = {
                        title: playload.q,
                        musics: playload.res
                    }
                    break;
                case '轻音乐':
                    state.music_light = {
                        title: playload.q,
                        musics: playload.res
                    }
                    break;
                case '摇滚':
                    state.music_rock = {
                        title: playload.q,
                        musics: playload.res
                    }
                    break;
                case '古典':
                    state.music_classical = {
                        title: playload.q,
                        musics: playload.res
                    }
                    break;
                case '民谣':
                    state.music_ballad = {
                        title: playload.q,
                        musics: playload.res
                    }
                    break;
                case '说唱':
                    state.music_rap = {
                        title: playload.q,
                        musics: playload.res
                    }
                    break;
            }
            
        },
    },
    actions: {
        //搜索      
        async getMusicSearch ({commit}, {q,count}) {
            let params = {
                'q': q,
                'count': count || 8
            }
            let res = await axiosRq('GET', 'music/search', params);
            commit('GETMUSICSEARCH',{
                q: q,
                res: res.musics
            });
        },
    }
}