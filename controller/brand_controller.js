var Brand=require('../model/brand_model');
var mongoose=require('mongoose');
var Category=require('../model/category_model');

exports.createBrand=function(req,res,next){
    var data=req.body;
    console.log(data);

    var obj=new Brand({
        _id:new mongoose.Types.ObjectId,
        name:data.name,
        creationDate:Date.now(),
        categoryid:data.categoryid,
        subcategoryid:data.subcategoryid,
        subsubcategoryid:data.subsubcategoryid
    });
    console.log(obj);
    res.send(obj)
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

exports.getAllbrandWithAlldetails=function(req,res,next){
    Brand.find().populate('getsbrandCategory').populate('getbrandsubCategory').populate('getbrandsubsubCategory').exec(function(err,result){
        if(result){
            res.send(result)
        }else{
            res.send(err)
        }
    })
}

exports.get=function(req,res,next){
    Category.find().populate({
        path:'getcategorySubcategory',
        populate:{
            path:'getsubcategorysubsubcategory',
            populate:{
                path:'getsubsubCategoryBrand'
            }
        }
    }).exec(function(err,result){
        if(result){
            res.send(result)
        }else{
            res.send(err)
        }
    })
}

exports.editByid=function(req,res,next){
 var data=req.body;
 Brand.findByIdAndUpdate(data.id,{
     $set:{
        name:data.name,
        categoryid:data.categoryid,
        subcategoryid:data.subcategoryid,
        subsubcategoryid:data.subsubcategoryid
     }
 }).exec(function(err,result){
    if(result){
        res.send(result)
    }else{
        res.send(err)
    }
})
 
}

exports.deleteByid=function(req,res,next){
    var data=req.body;
    Brand.findByIdAndRemove(data.id).exec(function(err,result){
        if(result){
            res.send(result)
        }else{
            res.send(err)
        }
    })  
}