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
        data () {
            return {
                title: '电影',
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
        computed: {
            ...mapState({
                'movieInTheaters': state => state.movie.movie_in_theaters, //正在热映
                'movieComingSoon': state => state.movie.movie_coming_soon, //即将上映
                'movieUsBox': state => state.movie.movie_us_box, //北美票房榜
                'movieTop250': state => state.movie.movie_top250, //top250
            })
        },
        mounted() {
            this.getMovieInTheaters({'count':8});
            this.getMovieComingSoon({'count':8});
            this.getMovieUsBox();
            this.getMovieTop250();
        }
    }
</script>