<template>
    <div class="pagecontent music">
        <MusicListComponent v-if="musicPopular"
            :propsTitle="musicPopular.musics.title" 
            :propsData="musicPopular.musics"
            category="music"
            class="row">
        </MusicListComponent>
        <MusicListComponent v-if="musicLight"
            :propsTitle="musicLight.musics.title" 
            :propsData="musicLight.musics"
            category="music"
            class="row">
        </MusicListComponent>
        <MusicListComponent v-if="musicRock"
            :propsTitle="musicRock.musics.title" 
            :propsData="musicRock.musics"
            category="music"
            class="row">
        </MusicListComponent>
        <MusicListComponent v-if="musicClassical"
            :propsTitle="musicClassical.musics.title" 
            :propsData="musicClassical.musics"
            category="music"
            class="row">
        </MusicListComponent>
        <MusicListComponent v-if="musicBallad"
            :propsTitle="musicBallad.musics.title" 
            :propsData="musicBallad.musics"
            category="music"
            class="row">
        </MusicListComponent>
        <MusicListComponent v-if="musicRap"
            :propsTitle="musicRap.musics.title" 
            :propsData="musicRap.musics"
            category="music"
            class="row">
        </MusicListComponent>
    </div>
</template>

<script>
    import axiosRq from '../../util/util.js';
    import { mapState, mapMutations, mapActions } from 'vuex';
    import MusicListComponent from '@/components/MusicListComponent';
    export default {
        pageName:'music',
        components: {
            MusicListComponent
        },
        data () {
            return {
                title: '音乐',
                musicPopular: [], //流行
                musicLight: [], //轻音乐
                musicRock: [], //摇滚
                musicClassical: [], //古典
                musicBallad: [], //民谣
                musicRap: [], //说唱
            }
        },
        async asyncData (context) {
            console.log(context);
            return {
                musicPopular: context.store.state.music.music_popular, //流行
                musicLight: context.store.state.music.music_light, //轻音乐
                musicRock: context.store.state.music.music_rock, //摇滚
                musicClassical: context.store.state.music.music_classical, //古典
                musicBallad: context.store.state.music.music_ballad, //民谣
                musicRap: context.store.state.music.music_rap, //说唱
            }
        },
        async fetch ({ store, params }) {
            let querys = ['流行','轻音乐','摇滚','古典','民谣','说唱'];
            querys.map( async (item) => {
                params = {
                    'q': item,
                    'count': 8
                }
                let data = await axiosRq("GET", "music/search", params);
                store.commit('GETMUSICSEARCH', {
                    q: item,
                    res: data
                });
            })
        },
        head() {
            return {
                title: '豆瓣 - 音乐'
            }
        },
        methods: {
            ...mapMutations([
                'GETMUSICSEARCH'
            ])
        }
    }
</script>

<style lang="scss">
    @import "~assets/css/variables.scss";
    .music {

    }
</style>