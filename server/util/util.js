const axios = require('axios');
const qs = require('qs');
axios.defaults.baseURL = 'https://api.douban.com/v2';

var axiosRq = async(type = 'POST', url = '', data = {}) => {
    type = type.toUpperCase();
    if (type === 'GET') {
        return await axios.get(url, { params: data })
            .then(res => {
                return Promise.resolve(res.data);
            }).catch(err=>{
                return Promise.reject(err);
            })
    } else if (type === 'POST') {
        return await axios.post(url, qs.stringify(data))
            .then(res => {
                return Promise.resolve(res.data);
            }).catch(err=>{
                return Promise.reject(err);
            })
    }
}

module.exports = axiosRq;