<template>
<div class="list">
    <div class="listTitle"><h4>{{propsTitle}}</h4></div>
    <div class="listItem" v-if="propsData">
        <ul>
            <li v-for="(item,index) in propsData" :key="index">
                <nuxt-link :to="`/${category}/${category}Detail?id=${item.id}`">
                    <img :src="item.images.small || item.images.large || item.images.medium">
                    <span class="title">{{item.title}}</span>
                    <span class="rating-stars" v-if="item.rating.average > 0">
                        <el-rate
                            v-model="value5"
                            disabled
                            text-color="#ff9900"
                            score-template="{value}">
                        </el-rate>
                        <span class="text">{{item.rating.average}}</span>
                    </span>
                    <span class="text" v-if="item.rating.average === 0">暂无评论</span>
                </nuxt-link>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
    export default {
        pageName: 'list', //电影和图书列表
        props: [
            'propsTitle', 
            'propsData',
            'category'
        ],
        data () {
            return {
                value5: 3.7
            }
        }
    }
</script>

<style lang="scss">
    
</style>