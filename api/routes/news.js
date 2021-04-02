const express = require('express');
const router = express.Router();
const store = require('../store');
const newsController = require('../controllers/newsController');




//category news
router.get('/normal',async (req,res,next)=>{
    if(store['normal']){
        return res.json({
            ...store['normal']
        });
    }else{
        await newsController.setNews();
        return res.json({
            ...store['normal']
        });
    }
});

//category news
router.get('/:category',async(req,res,next)=>{
    const {category}=req.params;
    if(!category) return res.json({
        error: 'auth failed'
    });
    if(store[category]){
        console.log('having');
        return res.json({
            ...store[category]
        });
    }else{
        console.log('not having');
        await newsController.setNews();
        return res.json({
            ...store[category]
        });
    }
});


module.exports = router;
