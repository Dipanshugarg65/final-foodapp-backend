
const express = require('express');
const router = express.Router();

router.post('/foodData',(req,res)=>{
    try {
        // console.log([global.foodto,global]);
        res.send([global.foodto,global.foodCategory])
    } catch (error) {
        console.log(error.message);
        res.send("Server Error")
    }
})


module.exports = router;