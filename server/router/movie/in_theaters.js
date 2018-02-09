const express = require("express");
const router = express();
const axiosRq = require("../../util/util");

router.get("/", (req,res) => {
    const count = req.query.count || 20;
    const data = {
        count
    }
    axiosRq("GET","movie/in_theaters", data)
        .then(result=>{
            res.send(result);
        });
})

module.exports = router;