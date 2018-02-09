import axiosRq from '../../util/util';

export const state = () => ({
    book_virtual: [], //虚拟类图书
    book_nonvirtual: [], //非虚拟类图书
    book_travel:[], //旅行
    book_younger:[], //青春
    book_fiction:[],//小说
    book_love:[], //爱情
})
export default {
    mutations: {
        GETBOOKSEARCH (state, playload) {
            switch(playload.q) {
                case '虚构类':
                    state.book_virtual = playload.res;
                    break;
                case '非虚构类':
                    state.book_nonvirtual = playload.res;
                    break;
                case '旅行':
                    state.book_travel = playload.res;
                    break;
                case '青春':
                    state.book_younger = playload.res;
                    break;
                case '小说':
                    state.book_fiction = playload.res;
                    break;
                case '爱情':
                    state.book_love = playload.res;
                    break;
            }
            
        },
    },
    actions: {
        // //图书搜索      
        // async getBookVirtual ({commit}, {q,count}) {
        //     let params = {
        //         'q': q,
        //         'count': count || 8
        //     }
        //     let res = await axiosRq('GET', 'book/search', params);
        //     commit('GETBOOKSEARCH',{
        //         q: q,
        //         res: res
        //     });
        // },
    }
}