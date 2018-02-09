<template>
    <div class="index pagecontent">
        <BookListComponent v-if="bookTravel"
            propsTitle="最受专注图书 | 旅行" 
            :propsData="bookTravel.books"
            category="book"
            class="row">
        </BookListComponent>
        <BookListComponent v-if="bookYounger"
            propsTitle="最受专注图书 | 青春" 
            :propsData="bookYounger.books"
            category="book"
            class="row">
        </BookListComponent>
        <BookListComponent v-if="bookFiction"
            propsTitle="最受专注图书 | 小说" 
            :propsData="bookFiction.books"
            category="book"
            class="row">
        </BookListComponent>
        <BookListComponent v-if="bookLove"
            propsTitle="最受专注图书 | 爱情" 
            :propsData="bookLove.books"
            category="book"
            class="row">
        </BookListComponent>
        <BookListComponent v-if="bookVirtual"
            propsTitle="最受专注图书 | 虚构类" 
            :propsData="bookVirtual.books"
            category="book"
            class="row">
        </BookListComponent>
        <BookListComponent v-if="bookNonVirtual"
            propsTitle="最受专注图书 | 非虚构类" 
            :propsData="bookNonVirtual.books"
            category="book"
            class="row">
        </BookListComponent>
    </div>
</template>

<script>
    import axiosRq from '../../util/util.js';
    import { mapState, mapMutations, mapActions } from 'vuex';
    import BookListComponent from '@/components/BookListComponent';
    export default {
        pageName:'index',
        components: {
            BookListComponent
        },
        data () {
            return {
                title: '图书',
                bookVirtual:[],
                bookNonVirtual:[],
                bookTravel:[],
                bookYounger:[],
                bookFiction:[],
                bookLove:[],
            }
        },
        scrollToTop: false,
        async asyncData (context) {
            console.log(context);
            return {
                bookVirtual: context.store.state.book.book_virtual,
                bookNonVirtual: context.store.state.book.book_nonvirtual,
                bookTravel: context.store.state.book.book_travel,
                bookYounger: context.store.state.book.book_younger,
                bookFiction: context.store.state.book.book_fiction,
                bookLove: context.store.state.book.book_love
            }
        },
        async fetch({store, params}) {
            let querys = ['虚构类','非虚构类','旅行','青春','小说','爱情'];
            querys.map( async (item) => {
                params = {
                    'q': item,
                    'count': 8
                }
                let data = await axiosRq("GET", "book/search", params);
                store.commit('GETBOOKSEARCH', {
                    q: item,
                    res: data
                });
            })
        },
        head() {
            return {
                title: '豆瓣 - 图书'
            }
        },
        methods: {
            ...mapMutations([
                'GETBOOKSEARCH', //虚拟类图书
            ])
        }
    }
</script>