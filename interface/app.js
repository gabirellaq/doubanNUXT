const express = require('express');
const app = express();
const router = express.Router();

// 跨域设置
app.all("*", function(req, res, next) {
    if (req.path !== "/" && !req.path.includes(".")) {
        res.header("Access-Control-Allow-Credentials", true);
        // 这里获取 origin 请求头 而不是用 *
        res.header("Access-Control-Allow-Origin", req.headers["origin"] || "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("Content-Type", "application/json;charset=utf-8");
    }
    next();
});

/**
 * 电影
 * Top250
 * https://api.douban.com/v2/movie/top250
 * http://localhost:9000/movie/top250
 */
app.use("/movie/top250", require('./router/movie/top250'));

/**
 * 电影
 * 正在热映
 * https://api.douban.com/v2/movie/in_theaters
 * http://localhost:9000/movie/in_theaters
 */
app.use("/movie/in_theaters", require('./router/movie/in_theaters'));

/**
 * 电影
 * 北美票房榜
 * https://api.douban.com/v2/movie/us_box
 * http://localhost:9000/movie/us_box
 */
app.use("/movie/us_box", require('./router/movie/us_box'));

/**
 * 电影
 * 口碑榜
 * https://api.douban.com/v2/movie/weekly
 * http://localhost:9000/movie/weekly
 */
app.use("/movie/weekly", require('./router/movie/weekly'));

/**
 * 电影
 * 新片榜
 * https://api.douban.com/v2/movie/coming_soon
 * http://localhost:9000/movie/coming_soon
 */
app.use("/movie/coming_soon", require('./router/movie/coming_soon'));


//module.exports = router;
const APP_PORT = 9000;
app.listen(APP_PORT, () => {
    console.log(` server running @ http://localhost:${APP_PORT}!`);
});
module.exports = app;