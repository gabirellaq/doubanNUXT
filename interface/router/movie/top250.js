const express = require("express");
const router = express();
const axiosRq = require("../../util/util");

router.get("/", (req,res) => {
    const count = req.query.count || 20;
    const data = {
        count
    }
    axiosRq("GET","movie/top250", data)
        .then(result=>{
            res.send(result);
        });
})

module.exports = router;