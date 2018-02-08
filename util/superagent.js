import Vue from 'vue'
import request from 'superagent'
import jsonp from 'superagent-jsonp'
const baseUrl = 'https://api.douban.com/v2/'


const superagent = (type="get", url= '', data={}) => {
    return new Promise((resolve,reject)=>{
        type = type.toLowerCase();
        if(type == "get") {
            request
            .get(baseUrl + url)
            .query(data)
            .use(jsonp({
                timeout: 3000,
                callbackName: 'callback'
            }))
            .then(res =>{
                resolve(res.body);
            }).catch(err => {
                reject(err);
            })
        }
        if(type == "post") {
            request
            .post(baseUrl + url)
            .send(data)
            .use(jsonp({
                timeout: 3000,
                callbackName: 'callback'
            }))
            .then(res =>{
                resolve(res.body);
            }).catch(err => {
                reject(err);
            })
        }
    })
}

export default superagent;