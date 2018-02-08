import Vue from 'vue';
Vue.filter('filterStars', function (value) {
    if (!value) return 0;
    return parseInt(value) / 10;
})

Vue.filter('filterSummary', function (value) {
    if (!value) return '';    
    return value.split('\n');
})