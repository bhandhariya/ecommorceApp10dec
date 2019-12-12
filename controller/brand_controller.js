var Brand=require('../model/brand_model');
var mongoose=require('mongoose');

exports.createBrand=function(req,res,next){
    var data=req.body;
    console.log(data);
    res.send(data);
}

exports.getAllbrnads=function(req,res,next){
    Brand.find(function(err,result){
        if(result){
            res.send(result)
        }else{
            res.send(err)
        }
    })
}