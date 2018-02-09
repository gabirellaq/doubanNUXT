### douban / NUXT

## 修改nuxtjs默认端口

```
//package.json
{
  "name": "myapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "config": {
    "nuxt": {
      "host": "0.0.0.0",
      "port": "4000"
    }
  },
  "scripts": {
    "dev": "nuxt"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "node-sass": "^4.7.2",
    "nuxt": "^1.3.0",
    "sass-loader": "^6.0.6"
  }
}
```

## 目录文件说明
* `pages`: 用于组织应用的路由及视图
* `assets`: 用于组织未编译的静态资源如 LESS、SASS 或 JavaScript
* `components`: 用于组织应用的 Vue.js 组件
* `layouts`: 用于组织应用的布局组件。
* `middleware`: 用于存放应用的中间件。
* `plugins`: 用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。
* `router`: 用于存放 vue-router 文件
* `static`: 用于存放应用的静态文件，此类文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理。
* `store`: 用于组织应用的 Vuex 状态树 文件
* `nuxt.config.js`: 用于组织Nuxt.js 应用的个性化配置，以便覆盖默认配置。
* `package.json`: 用于描述应用的依赖关系和对外暴露的脚本接口

## 配置

## 接口(豆瓣API浏览器访问跨域)
> 处理方法1（使用nodejs+express）
```
cd server
npm install
npm start

//localhost:9000
//具体接口信息查看 `/server/readme.md`
```

> 处理方法2（jsonp）
```
//superagent
//superagent-jsonp

import request from 'superagent'
import jsonp from 'superagent-jsonp'
const baseUrl = 'https://api.douban.com/v2/'
request
  .get(baseUrl + url)
  .query(data)
  .use(jsonp({
      timeout: 3000,
      callbackName: 'callback'
  }))
  .then(res =>{
      return res.body;
  }).catch(err => {
      console.log("request err:", err);
  })
```

## 疑问
* 刷新数据不加载
* element ui rate动态修改数据
