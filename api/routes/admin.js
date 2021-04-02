const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');


//normal news
router.get('/',async (req,res,next)=>{
    const {secret} = req.params;
    if(secret==='lolmenow'){
        await newsController.setNews();
    }
  return res.json({data:'perfect'});
});


module.exports = router;
