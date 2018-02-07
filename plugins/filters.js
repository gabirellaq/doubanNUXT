import Vue from 'vue';
Vue.filter('filterStars', function (value) {
    if (!value) return 0;
    return (value / 10).toFixed(0);
})