<template>
<div class="list">
    <div class="listTitle"><h4>{{propsTitle}}</h4></div>
    <div class="listItem" v-if="propsData">
        <ul>
            <li v-for="(item,index) in propsData" :key="index">
                <nuxt-link :to="`/${category}/detail?id=${item.id}`">
                    <img :src="item.image">
                    <span class="title">{{item.title}}</span>
                    <span class="rating-stars" v-if="item.rating.average > 0">
                        <span class="text">评分：{{item.rating.average}}</span>
                    </span>
                    <span class="text" v-if="item.rating.average === 0">暂无评分</span>
                </nuxt-link>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
    export default {
        pageName: 'list', 
        props: [
            'propsTitle', 
            'propsData',
            'category'
        ],
        data () {
            return {

            }
        }
    }
</script>

<style lang="scss">
    
</style>