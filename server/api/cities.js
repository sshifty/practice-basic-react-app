const express = require('express');
const cities=require('../models/cities');

const router=express.Router();


router.get('/',(req,res)=>{
    cities.retrieveALL((err,cities)=>{
        if(err) return res.json(err);
        return res.json(cities);
    });
});

router.post('/',(req,res)=>{
    const city=req.body.city;

    cities.insert(city,(err,results)=>{
        if(err) return res.json(err);
        return res.json(result);
    });
});

module.exports =router;