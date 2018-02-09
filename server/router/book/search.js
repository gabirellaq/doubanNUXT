const express = require("express");
const router = express();
const axiosRq = require("../../util/util");

router.get("/", (req,res) => {
    const q = req.query.q;
    const count = req.query.count || 20;
    let data = {
        'q': q,
        'count': count
    }
    axiosRq("GET","book/search", data)
        .then(result=>{
            res.send(result);
        });
})

module.exports = router;