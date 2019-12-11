var SubCategory=require('../model/subCategory_model');
var mongoose=require('mongoose');


exports.createsubsubCategories=function(req,res,next){
    var data=req.body;
    console.log(data);
    var obj=new SubCategory({
        _id:new mongoose.Types.ObjectId,
        name:data.name,
        description:data.description,
        creationDate:Date.now(),
        categoryid:data.categoryid
    });
    obj.save(function(err,result){
        if(!err & result){
            res.send(result)
        }else{
            res.send(err)
        }
    })

}

exports.getAlsubsubCategories=function(req,res,next){
    
    SubCategory.find().populate('getsubcategoryCategory').exec(function(err,result){
        if(result){
            res.send(result)
        }else{
            res.send(err)
        }
    })
}

exports.deletesubsubcategorybyid=function(req,res,next){
    var data=req.body;
    SubCategory.findByIdAndRemove(data.id).exec(function(err,result){
        if(result){
            res.send(result)
        }else{
            res.send(err)
        }
    })
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