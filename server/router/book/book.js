const express = require("express");
const router = express();
const axiosRq = require("../../util/util");

router.get("/:id", (req,res) => {
    const id = req.path;
    axiosRq("GET","book"+ id)
        .then(result=>{
            res.send(result);
        });
})

module.exports = router;