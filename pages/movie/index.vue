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
        async asyncData (context) {
            console.log(context);
           return await Promise.all([
                context.store.dispatch('getMovieInTheaters', {'count':8}),//正在热映
                context.store.dispatch('getMovieComingSoon', {'count':8}),//即将上映
                context.store.dispatch('getMovieUsBox'),//北美票房榜
                context.store.dispatch('getMovieTop250'),//top250
            ]);
            
        },
        head () {
            return {
                title: '豆瓣 - 电影'
            }
        },
        data () {
            return {
                title: '电影',
                movieInTheaters: this.$store.state.movie.movie_in_theaters, //正在热映
                movieComingSoon: this.$store.state.movie.movie_coming_soon, //即将上映
                movieUsBox: this.$store.state.movie.movie_us_box, //北美票房榜
                movieTop250: this.$store.state.movie.movie_top250, //top250
            }
        }
    }
</script>