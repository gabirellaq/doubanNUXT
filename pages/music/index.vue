<template>
    <div class="pagecontent music">
        <MusicListComponent v-if="musicPopular"
            :propsTitle="musicPopular.title" 
            :propsData="musicPopular.musics"
            category="music"
            class="row">
        </MusicListComponent>
        <MusicListComponent v-if="musicLight"
            :propsTitle="musicLight.title" 
            :propsData="musicLight.musics"
            category="music"
            class="row">
        </MusicListComponent>
        <MusicListComponent v-if="musicRock"
            :propsTitle="musicRock.title" 
            :propsData="musicRock.musics"
            category="music"
            class="row">
        </MusicListComponent>
        <MusicListComponent v-if="musicClassical"
            :propsTitle="musicClassical.title" 
            :propsData="musicClassical.musics"
            category="music"
            class="row">
        </MusicListComponent>
        <MusicListComponent v-if="musicBallad"
            :propsTitle="musicBallad.title" 
            :propsData="musicBallad.musics"
            category="music"
            class="row">
        </MusicListComponent>
        <MusicListComponent v-if="musicRap"
            :propsTitle="musicRap.title" 
            :propsData="musicRap.musics"
            category="music"
            class="row">
        </MusicListComponent>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex';
    import MusicListComponent from '@/components/MusicListComponent';
    export default {
        pageName:'music',
        components: {
            MusicListComponent
        },
        async asyncData (context) {
            console.log(context);
            let querys = ['流行','轻音乐','摇滚','古典','民谣','说唱'];
            return await Promise.all([
                context.store.dispatch('getMusicSearch', {'q': querys[0]}),
                context.store.dispatch('getMusicSearch', {'q': querys[1]}),
                context.store.dispatch('getMusicSearch', {'q': querys[2]}),
                context.store.dispatch('getMusicSearch', {'q': querys[3]}),
                context.store.dispatch('getMusicSearch', {'q': querys[4]}),
                context.store.dispatch('getMusicSearch', {'q': querys[5]}),
            ]);
        },
        head() {
            return {
                title: '豆瓣 - 音乐'
            }
        },
        data () {
            return {
                title: '音乐',
                musicPopular: this.$store.state.music.music_popular, //流行
                musicLight: this.$store.state.music.music_light, //轻音乐
                musicRock: this.$store.state.music.music_rock, //摇滚
                musicClassical: this.$store.state.music.music_classical, //古典
                musicBallad: this.$store.state.music.music_ballad, //民谣
                musicRap: this.$store.state.music.music_rap, //说唱
            }
        },
        methods: {
        },
    }
</script>

<style lang="scss">
    @import "~assets/css/variables.scss";
    .music {

    }
</style>