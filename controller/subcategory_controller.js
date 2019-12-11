var SUbCategory=require('../model/subcategory_model')
var mongoose=require('mongoose')

exports.createSubCategory=function(req,res,next){
        var data=req.body;
        // res.send(data);
        SUbCategory.create({
            _id:new mongoose.Types.ObjectId,
            name:data.name,
            description:data.description,
            creationDate:Date.now(),
            categoryid:data.categoryid
        },function(err,category){
            if(!err & category){
                res.send(category)
            }else{
                res.send(err)
            }
        })
}
exports.getAllSubCategories=function(req,res,next){
    SUbCategory.find().populate('getsubcategoryCategory').exec(function(err,result){
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}
exports.deleteSubCategorybyid=function(req,res,next){
    var data = req.body;
    console.log(data.id);
    SUbCategory.findByIdAndRemove(data.id,function(err,result){
        if(err){
            res.send(err)
        }else{res.send(result)}
    })   
}

exports.getallcatforsubcatbyid=function(req,res,next){
    var data=req.body;
    SUbCategory.findById(data.id).populate('getCategory').populate('getsubcategorysubsubcategory').exec(function(err,result){
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}


exports.editSubCategorybyID=function(req,res,next){
    console.log(req.body)
}