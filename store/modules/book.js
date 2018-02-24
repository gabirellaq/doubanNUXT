import axiosRq from '../../util/util';

export const state = () => ({
    book_virtual: {
        title:'',
        books:{}
    }, //虚拟类图书
    book_nonvirtual: {
        title:'',
        books:{}
    }, //非虚拟类图书
    book_travel:{
        title:'',
        books:{}
    }, //旅行
    book_younger:{
        title:'',
        books:{}
    }, //青春
    book_fiction:{
        title:'',
        books:{}
    },//小说
    book_love:{
        title:'',
        books:{}
    }, //爱情
})
export default {
    mutations: {
        GETBOOKSEARCH (state, playload) {
            switch(playload.q) {
                case '虚构类':
                    state.book_virtual = {
                        title: playload.q,
                        books: playload.res
                    };
                    break;
                case '非虚构类':
                    state.book_nonvirtual = {
                        title: playload.q,
                        books: playload.res
                    };
                    break;
                case '旅行':
                    state.book_travel = {
                        title: playload.q,
                        books: playload.res
                    };
                    break;
                case '青春':
                    state.book_younger = {
                        title: playload.q,
                        books: playload.res
                    };
                    break;
                case '小说':
                    state.book_fiction = {
                        title: playload.q,
                        books: playload.res
                    };
                    break;
                case '爱情':
                    state.book_love = {
                        title: playload.q,
                        books: playload.res
                    };
                    break;
            }
            
        },
    },
    actions: {
        //图书搜索      
        async getBookVirtual ({commit}, {q,count}) {
            let params = {
                'q': q,
                'count': count || 8
            }
            let res = await axiosRq('GET', 'book/search', params);
            commit('GETBOOKSEARCH',{
                q: q,
                res: res.books
            });
        },
    }
}