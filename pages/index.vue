<template>
    <div class="pagecontent index">待开垦~~~</div>
</template>

<script>
    export default {
        pageName: 'index',
        layout: 'default',
        data () {
            return {
            }
        },
        //支持 异步数据处理
        //会在组件（限于页面组件）每次加载之前被调用。它可以在服务端或路由更新之前被调用
        asyncData (context) {
            return {
                name: 'World'
            }
        }
    }
</script>