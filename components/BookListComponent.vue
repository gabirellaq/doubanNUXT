<template>
<div class="list">
    <div class="listTitle"><h4>{{propsTitle}}</h4></div>
    <div class="listItem" v-if="propsData">
        <ul>
            <li v-for="(item,index) in propsData" :key="index">
                <nuxt-link :to="`/${category}/detail?id=${item.id}`">
                    <img :src="item.images.small || item.images.large || item.images.medium">
                    <span class="title">{{item.title}}</span>
                    <span class="rating-stars" v-if="item.rating.average > 0">
                        <RatingComponent :rating="item.rating.average"></RatingComponent>
                    </span>
                    <span class="text" v-if="item.rating.average === 0">暂无评分</span>
                </nuxt-link>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
    import RatingComponent from '@/components/RatingComponent';
    export default {
        pageName: 'list', //电影和图书列表
        props: [
            'propsTitle', 
            'propsData',
            'category'
        ],
        components:{
            RatingComponent
        },
        data () {
            return {
            }
        }
    }
</script>

<style lang="scss">
    
</style>