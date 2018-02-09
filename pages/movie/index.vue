<template>
    <div class="pagecontent movie">
        <MovieListComponent v-if="movieInTheaters"
            :propsTitle="movieInTheaters.title" 
            :propsData="movieInTheaters.subjects"
            category="movie"
            class="row">
        </MovieListComponent>
        <MovieListComponent v-if="movieComingSoon"
            :propsTitle="movieComingSoon.title" 
            :propsData="movieComingSoon.subjects"
            category="movie"
            class="row">
        </MovieListComponent>
        <MovieListComponent v-if="movieTop250"
            :propsTitle="movieTop250.title" 
            :propsData="movieTop250.subjects"
            category="movie"
            class="row">
        </MovieListComponent>
        <MovieListComponent v-if="movieUsBox"
            :propsTitle="movieUsBox.title" 
            :propsData="movieUsBox.subjects"
            category="movie"
            class="row">
        </MovieListComponent>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex';
    import MovieListComponent from '@/components/MovieListComponent';
    export default {
        pageName:'movie',
        components: {
            MovieListComponent
        },
        head () {
            return {
                title: '豆瓣 - 电影'
            }
        },
        data () {
            return {
                title: '电影',
                movieInTheaters: [], //正在热映
                movieComingSoon: [], //即将上映
                movieUsBox: [], //北美票房榜
                movieTop250: [], //top250
            }
        },
        methods: {
            ...mapActions([
                'getMovieInTheaters', //正在热映
                'getMovieComingSoon', //即将上映
                'getMovieUsBox', //北美票房榜
                'getMovieTop250', //top250
            ]),
        },
        async asyncData (context) {
            console.log(context);
            return {
                movieInTheaters: context.store.state.movie.movie_in_theaters, //正在热映
                movieComingSoon: context.store.state.movie.movie_coming_soon, //即将上映
                movieUsBox: context.store.state.movie.movie_us_box, //北美票房榜
                movieTop250: context.store.state.movie.movie_top250, //top250
            }
        },
        async fetch ({ store, params }) {
            store.dispatch('getMovieInTheaters', {'count':8});//正在热映
            store.dispatch('getMovieComingSoon', {'count':8});//即将上映
            store.dispatch('getMovieUsBox');//北美票房榜
            store.dispatch('getMovieTop250');//top250
        }
    }
</script>