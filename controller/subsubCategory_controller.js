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

exports.getAllSubSUbCategory=function(req,res,next){
    SubSubCategory.find().populate('getsCategory').populate('getsubsCategory').exec(function(err,ssc){
        if(ssc){
            res.send(ssc);
        }else{
            res.send(err);
        }
    })
}

exports.editbyid=function(req,res,next){
    var data=req.body;
    SubSubCategory.findByIdAndUpdate(data.id,{
        $set:{
            name:data.name,
            description:data.description,
            categoryid:data.categoryid,
            subcategoryid:data.subcategoryid
        }
    }).exec(function(err,ssc){
        if(ssc){
            res.send(ssc);
        }else{
            res.send(err);
        }
    })
}