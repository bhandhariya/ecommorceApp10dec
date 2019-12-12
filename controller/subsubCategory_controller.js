var SubSubCategory=require('../model/subSubCategory_model');
var mongoose=require('mongoose');

exports.createSubSUbCategory=function(req,res,next){
    var data=req.body;
    console.log(data);
    var obj=new SubSubCategory({
        _id:new mongoose.Types.ObjectId,
        name:data.name,
        description:data.description,
        creationDate:Date.now(),
        categoryid:data.categoryid,
        subcategoryid:data.subcategoryid
    });
    obj.save(function(err,ssc){
        if(ssc){
            res.send(ssc);
        }else{
            res.send(err);
        }
    })
}