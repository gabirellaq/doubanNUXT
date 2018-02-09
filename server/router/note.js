const express = require("express");
const router = express();
const axiosRq = require("../util/util");

router.get("/:id", (req,res) => {
    const id = req.path;
    axiosRq("GET", '/v1/note'+id)
        .then(result=>{
            console.log(result);
            res.send(result);
        });
})

module.exports = router;