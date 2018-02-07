<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <nuxt/>
    </div>
</template>

<script>
    import HeaderComponent from '../components/HeaderComponent.vue';
    export default {
        components: {
            HeaderComponent
        },
        data () {
            return {}
        }
    }
</script>