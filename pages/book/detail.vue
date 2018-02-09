<template>
    <div class="movieDetail pagecontent" v-if="book">
        <h1 class="movieTitle">{{book.title}}</h1>
        <div class="moviebox"> 
            <div class="ml">       
                <div class="star" v-if="book.rating">
                    <el-rate
                        v-model="starValue"
                        disabled
                        text-color="#ff9900"
                        score-template="{value}">
                    </el-rate>
                    <span class="text" v-if="book.rating.average > 0">
                        {{book.rating.average}}
                    </span>
                    <span class="text" v-else>暂未评分</span>
                </div>
                <div class="sum">
                    {{book.pages}}/{{book.binding}}/{{book.price}}
                </div>
            </div>
            <div class="mr" v-if="book.images">
                <img :src="book.images.small" class="moviepic">
            </div>
        </div>

        <h2 class="movieSecondTitle">{{book.title}}的引言</h2>
        <div class="des" v-if="book.author_intro">            
            <p v-for="(item,index) in book.author_intro.split('\n')" :key="index">{{item}}</p>
        </div>

        <h2 class="movieSecondTitle">{{book.title}}的简介</h2>
        <div class="des" v-if="book.summary">            
            <p v-for="(item,index) in book.summary.split('\n')" :key="index">{{item}}</p>
        </div>

        <h2 class="movieSecondTitle">{{book.title}}的短评</h2>

    </div>
</template>

<script>
import superagent from '../../util/superagent.js'
export default {
    data () {
        return {
            book:[], //电影条目信息
            starValue: null, //评分
        }
    },
    methods: {
        getBook(id){
            superagent("get","book/"+id).then(res=>{
                this.book = res;
                console.log(res.rating.stars);
                this.starValue = parseInt(res.rating.stars) / 10;
            });
        }
    },
    mounted(){
        let id = this.$route.query.id;
        this.getBook(id);
    }
}
</script>

<style lang="scss">
@import "../../assets/css/variables.scss";
.movieDetail {
    .movieTitle {
        font-size:$font-title-size;
        color:$font-title-color;
        margin-bottom:0.2rem;
    }
    .movieSecondTitle {
        font-size:$font-size;
        color:$font-des-color;
        font-weight:normal;
        margin-bottom:0.2rem;
        margin-top:0.6rem;
    }
    .moviebox {
        display:flex;
        justify-content: space-between;
        .star {
            .el-rate,
            .text {
                vertical-align:middle;
            }
            .el-rate {
                display:inline-block;
            }
            .text {
                color:$font-des-color;
            }
        }
        .moviepic {
            width:3.5rem;
            margin-left:0.2rem;
        }
    }
    .btnTeam,
    .sum {
        margin-top:0.3rem;
    }
    .btnTeam {
        display:flex;
        justify-content:space-between;
        .el-button {
            width:50%;
            border-color:$yellow-color;
            color:$yellow-color;
        }
    }
   
}
</style>