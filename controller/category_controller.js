
var Category=require('../model/category_model')
var mongoose=require('mongoose')

exports.createCategory=function(req,res,next){
    var data=req.body;
    console.log(data)
    var obj=new Category({
        _id:new mongoose.Types.ObjectId,
        name:data.name,
        description:data.description,
        creationDate:Date.now(),


    })
    obj.save(function(err,result){
        if(err){
            res.send(err.errmsg)
        }else{
            res.send(result)
        }
    })
}

exports.getAllCategories=function(req,res,next){
    Category.find(function(err,result){
        if(err){
            res.send(err.errmsg)
        }else{
            res.send(result)
        }
    })

}


exports.getAllCategorieswithSubCategory=function(req,res,next){
    Category.find().populate('getcategorySubcategory').exec(function(err,result){
        if(err){
            res.send(err.errmsg)
        }else{
            res.send(result)
        }
    })

}

exports.editCategorybyID=function(req,res,next){
  var data=req.body;
  Category.findByIdAndUpdate(data.id, { $set: { 
      name:data.name,
      description:data.description 
    }}, function(err,result){
        if(err){
            res.send(err.errmsg)
        }else{
            res.send(result)
        }
    })

}

exports.deleteCategorybyID=function(req,res,next){
    var data=req.body;
   Category.findByIdAndDelete(data.id,function(err,result){
    if(err){
        res.send(err.errmsg)
    }else{
        res.send(result)
    }
})
  
  }
  

