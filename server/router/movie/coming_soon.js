const express = require("express");
const router = express();
const axiosRq = require("../../util/util");

router.get("/", (req,res) => {
    const count = req.query.count || 20;
    let data = {
        'count':count
    }
    axiosRq("GET","movie/coming_soon", data)
        .then(result=>{
            res.send(result);
        });
})

module.exports = router;