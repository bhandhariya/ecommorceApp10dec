var SubCategory=require('../model/subCategory_model');
var mongoose=require('mongoose');


exports.createsubsubCategories=function(req,res,next){
    var data=req.body;
    console.log(data);
}

exports.getAlsubsubCategories=function(req,res,next){
    res.send({name:'getAlsubsubCategories working'})
}

exports.deletesubsubcategorybyid=function(req,res,next){
    res.send({name:'deletesubsubcategorybyid working'})
}

exports.getrelatedSubcatandcategorydata=function(req,res,next){
    res.send({name:'getrelatedSubcatandcategorydata working'})
}

exports.getsubsubcategorybyid=function(req,res,next){
    res.send({name:'getsubsubcategorybyid working'})
}

exports.editsubsubcategory=function(req,res,next){
    res.send({name:'editsubsubcategory working'})
}