<template>
    <div class="movieDetail pagecontent" v-if="movie_subject">
        <h1 class="movieTitle">{{movie_subject.title}}</h1>
        <div class="moviebox"> 
            <div class="ml">       
                <div class="star" v-if="movie_subject.rating">
                    <el-rate
                        v-model="starValue"
                        disabled
                        text-color="#ff9900"
                        score-template="{value}">
                    </el-rate>
                    <span class="text" v-if="movie_subject.rating.average > 0">
                        {{movie_subject.rating.average}}
                    </span>
                    <span class="text" v-else>暂未上映</span>
                </div>
                <div class="sum" v-if="movie_subject.directors">
                    <span v-if="movie_subject.directors.length == 1">
                        <span v-for="(i,index) in movie_subject.directors" :key="index">{{i.name}}</span>
                    </span>
                    <span v-else>
                        <span v-for="(i,index) in movie_subject.directors" :key="index">{{i.name}} </span>
                    </span>
                    (导演)/
                    <span v-for="(i,index) in movie_subject.casts" :key="index">{{i.name}}/</span>
                    <span>{{movie_subject.countries[0]}}</span>
                </div>
            </div>
            <div class="mr" v-if="movie_subject.images">
                <img :src="movie_subject.images.small" class="moviepic">
            </div>
        </div>

        <div class="btnTeam">
            <el-button size="medium">想看({{movie_subject.wish_count || 0}})</el-button>
            <el-button size="medium">看过({{movie_subject.do_count || 0}})</el-button>
        </div>

        <h2 class="movieSecondTitle">{{movie_subject.title}}的剧情简介</h2>
        <div class="des">            
            <p>{{movie_subject.summary}}</p>
        </div>

        <h2 class="movieSecondTitle">影人</h2>
        <div class="list row">
            <div class="listItem">
                <ul>
                    <li v-for="(item,idx) in movie_subject.casts" :key="idx">
                        <a>
                        <img :src="item.avatars.small || item.avatars.large || item.avatars.medium">
                        <span class="title">{{item.name}}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <h2 class="movieSecondTitle">{{movie_subject.title}}的预告片和图片</h2>

        <h2 class="movieSecondTitle">{{movie_subject.title}}的短评({{movie_subject.comments_count}})</h2>

    </div>
</template>

<script>
import superagent from '../../util/superagent.js'
export default {
    data () {
        return {
            movie_subject:[], //电影条目信息
            starValue: null, //评分
        }
    },
    methods: {
        getMovieSubject(id){
            superagent("get","movie/subject/"+id).then(res=>{
                this.movie_subject = res;
                console.log(res.rating.stars);
                this.starValue = parseInt(res.rating.stars) / 10;
            });
        }
    },
    mounted(){
        let id = this.$route.query.id;
        this.getMovieSubject(id);
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