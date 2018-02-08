<template>
    <div class="headerbox">
        <div class="header">
            <a class="logo">豆瓣</a>
            <ul>
                <li>
                    <nuxt-link :to="`/movie/movie`" syle="color:#2384e8">电影</nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="`/book/book`"  syle="color:#9f7860">图书</nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="`/broadcast/broadcast`"  syle="color:#e4a813">广播</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        pageName:'header',
        data () {
            return {

            }
        }
    }
</script>

<style lang="scss">
    @import "~assets/css/variables.scss";
    .headerbox {
        position: fixed;
        top:0;
        left:0;
        right:0;
        max-width: 640px;
        margin: auto;
        z-index:222;
    }
    .header {
        .logo {
            color: $green-color;
            display:inline-block;
            font-size: $font-title-size;
        }
        ul {
            display: flex;
            li {
                a {
                    font-size: $font-title-size;
                    color: $blue-color;
                    padding:0 .3rem;
                }
            }
        }
    }
</style>