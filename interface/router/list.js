const express = require("express");
const router = express();
const axiosRq = require("../util/util");

router.get("/", (req,res) => {
    const page_size = req.query.page_size || 20;
    const oid = req.query.oid || 'recommend';
    const page = req.query.page || 1;
    
    const data = {
        page_size,
        oid,
        page
    };
    axiosRq("GET","/v2/homefeed/notes",data)
        .then(result=>{
            console.log(result);
            res.send(result);
        });
})

module.exports = router;