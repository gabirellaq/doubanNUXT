<template>
    <div class="book pagecontent">
        <BookListComponent v-if="bookTravel"
            propsTitle="最受专注图书 | 旅行" 
            :propsData="bookTravel.books"
            category="book"
            class="row">>
        </BookListComponent>
        <BookListComponent v-if="bookYounger"
            propsTitle="最受专注图书 | 青春" 
            :propsData="bookYounger.books"
            category="book"
            class="row">>
        </BookListComponent>
        <BookListComponent v-if="bookFiction"
            propsTitle="最受专注图书 | 小说" 
            :propsData="bookFiction.books"
            category="book"
            class="row">>
        </BookListComponent>
        <BookListComponent v-if="bookLove"
            propsTitle="最受专注图书 | 爱情" 
            :propsData="bookLove.books"
            category="book"
            class="row">>
        </BookListComponent>
        <BookListComponent v-if="bookVirtual"
            propsTitle="最受专注图书 | 虚构类" 
            :propsData="bookVirtual.books"
            category="book"
            class="row">>
        </BookListComponent>
        <BookListComponent v-if="bookNonVirtual"
            propsTitle="最受专注图书 | 非虚构类" 
            :propsData="bookNonVirtual.books"
            category="book"
            class="row">>
        </BookListComponent>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex';
    import BookListComponent from '@/components/BookListComponent';
    export default {
        pageName:'book',
        components: {
            BookListComponent
        },
        data () {
            return {
                title: '图书'
            }
        },
        methods: {
            ...mapActions([
                'getBookVirtual', //虚拟类图书
            ])
        },
        computed: {
            ...mapState({
                'bookVirtual': state => state.book.book_virtual,
                'bookNonVirtual': state => state.book.book_nonvirtual,
                'bookTravel': state => state.book.book_travel,
                'bookYounger': state => state.book.book_younger,
                'bookFiction': state => state.book.book_fiction,
                'bookLove': state => state.book.book_love
            })
        },
        mounted() {
            this.getBookVirtual({'q':'虚构类','count':8});
            this.getBookVirtual({'q':'非虚构类','count':8});
            this.getBookVirtual({'q':'旅行','count':8});
            this.getBookVirtual({'q':'青春','count':8});
            this.getBookVirtual({'q':'小说','count':8});
            this.getBookVirtual({'q':'爱情','count':8});
        }
    }
</script>

<style lang="scss">
    @import "~assets/css/variables.scss";
    .book {

    }
</style>