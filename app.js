const express =require('express');
const app=express();
const morgan=require('morgan');
const bodyParser=require('body-parser');
const newsRoute = require('./api/routes/news');
const adminRoute = require('./api/routes/news');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(morgan('dev'));

//setting required headers
app.use((req,res,next)=>{
res.header("Access-Control-Allow-Origin","*");
res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,Authorization");
    if(req.method==='OPTIONS'){
        res.header("Access-Control-Allow-Methods","PUT, POST, PATH, DELETE ,GET");
        return res.status(200).json({});
    }
    next();
});




//Routes to handle requests
app.use('/news',newsRoute);
app.use('/admin',adminRoute);


app.use((req,res,next)=>{
    const err=new Error('Not found url here');
    err.status=400;
    next(err);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        message:error.message
    });
});



module.exports = app;
