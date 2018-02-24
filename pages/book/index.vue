<template>
    <div class="index pagecontent">
        <BookListComponent v-if="bookTravel"
            :propsTitle="bookTravel.title" 
            :propsData="bookTravel.books"
            category="book"
            class="row">
        </BookListComponent>
        <BookListComponent v-if="bookYounger"
            :propsTitle="bookYounger.title" 
            :propsData="bookYounger.books"
            category="book"
            class="row">
        </BookListComponent>
        <BookListComponent v-if="bookFiction"
            :propsTitle="bookFiction.title" 
            :propsData="bookFiction.books"
            category="book"
            class="row">
        </BookListComponent>
        <BookListComponent v-if="bookLove"
            :propsTitle="bookLove.title" 
            :propsData="bookLove.books"
            category="book"
            class="row">
        </BookListComponent>
        <BookListComponent v-if="bookVirtual"
            :propsTitle="bookVirtual.title" 
            :propsData="bookVirtual.books"
            category="book"
            class="row">
        </BookListComponent>
        <BookListComponent v-if="bookNonVirtual"
            :propsTitle="bookNonVirtual.title" 
            :propsData="bookNonVirtual.books"
            category="book"
            class="row">
        </BookListComponent>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex';
    import BookListComponent from '@/components/BookListComponent';
    export default {
        pageName:'index',
        components: {
            BookListComponent
        },
        scrollToTop: false,
        async asyncData (context) {
            console.log(context);
            let querys = ['虚构类','非虚构类','旅行','青春','小说','爱情'];
            return await Promise.all([
                context.store.dispatch('getBookVirtual', {'q': querys[0]}),
                context.store.dispatch('getBookVirtual', {'q': querys[1]}),
                context.store.dispatch('getBookVirtual', {'q': querys[2]}),
                context.store.dispatch('getBookVirtual', {'q': querys[3]}),
                context.store.dispatch('getBookVirtual', {'q': querys[4]}),
                context.store.dispatch('getBookVirtual', {'q': querys[5]}),
            ]);
        },
        head() {
            return {
                title: '豆瓣 - 图书'
            }
        },
        data () {
            console.log("yyy", this.$store);
            return {
                title: '最受关注图书',
                bookVirtual: this.$store.state.book.book_virtual,
                bookNonVirtual: this.$store.state.book.book_nonvirtual,
                bookTravel: this.$store.state.book.book_travel,
                bookYounger: this.$store.state.book.book_younger,
                bookFiction: this.$store.state.book.book_fiction,
                bookLove: this.$store.state.book.book_love,
            }
        },
        methods: {
        }
    }
</script>