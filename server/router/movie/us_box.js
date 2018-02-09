const express = require("express");
const router = express();
const axiosRq = require("../../util/util");

router.get("/", (req,res) => {
    axiosRq("GET","movie/us_box")
        .then(result=>{
            res.send(result);
        });
})

module.exports = router;