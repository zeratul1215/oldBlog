const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.json({
        name:'get'
    });

});

router.post('/',(req,res)=>{
    res.json({
        name:'post'
    });
});

module.exports = router;