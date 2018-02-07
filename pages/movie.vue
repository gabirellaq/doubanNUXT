<template>
    <div class="pagecontent movie">
        <ListComponent v-if="movieInTheaters"
            :propsTitle="movieInTheaters.title" 
            :propsData="movieInTheaters.subjects"
            class="row">
        </ListComponent>
        <ListComponent v-if="movieComingSoon"
            :propsTitle="movieComingSoon.title" 
            :propsData="movieComingSoon.subjects"
            class="row">
        </ListComponent>
        <ListComponent v-if="movieUsBox"
            :propsTitle="movieUsBox.title" 
            :propsData="movieUsBox.subjects"
            class="row">
        </ListComponent>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex';
    import ListComponent from '@/components/ListComponent';
    export default {
        pageName:'movie',
        components: {
            ListComponent
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
            ]),
        },
        computed: {
            ...mapState({
                'movieInTheaters': state => state.movie.movie_in_theaters, //正在热映
                'movieComingSoon': state => state.movie.movie_coming_soon, //即将上映
                'movieUsBox': state => state.movie.movie_us_box, //北美票房榜
            })
        },
        mounted() {
            this.getMovieInTheaters({'count':8});
            console.log(this.movieInTheaters);
            this.getMovieComingSoon({'count':8});
            this.getMovieUsBox();
        }
    }
</script>

<style lang="scss">
    @import "~assets/css/variables.scss";
    .movie {

    }
</style>