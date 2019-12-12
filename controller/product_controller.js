var Product=require('../model/product_model');
var mongoose=require('mongoose');
var Category=require('../model/category_model');

exports.create=function(req,res,next){
    var data=req.body;
    console.log(data);
    var obj=new Product({
        _id:new mongoose.Types.ObjectId,
        name:data.name,
        price:data.price,
        quantity:data.quantity,
        creationDate:Date.now(),
        categoryid:data.categoryid,
        subcategoryid:data.subcategoryid,
        subsubcategoryid:data.subsubcategoryid,
        brandid:data.brandid,
        image:data.image,
        description:data.description
    });
    obj.save(function(err,result){
        if(result){
            res.send(result)
        }else{
            res.send(err)
        }
    })
}
exports.getAllProductwithAllData=function(req,res,next){
    Product.find().populate('getCategoryofproduct').populate('getSubcategoryofProduct')
    .populate('getSubSubCategoryofProduct').populate('getBrandofProduct').exec(function(err,result){
        if(result){
            res.send(result)
        }else{
            res.send(err)
        }
    })
}
exports.getAllData=function(req,res,next){
   Category.find().populate({
       path:'getcategorySubcategory',
       populate:{
           path:'getsubcategorysubsubcategory',
           populate:{
               path:'getsubsubCategoryBrand',
            //    populate:{
            //        path:''
            //    }
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
exports.editbyid=function(req,res,next){
    var data=req.body;
    Product.findByIdAndUpdate(data.id,{
        $set:{
            name:data.name,
            price:data.price,
            quantity:data.quantity,
            categoryid:data.categoryid,
            subcategoryid:data.subcategoryid,
            subsubcategoryid:data.subsubcategoryid,
            brandid:data.brandid,
            image:data.image,
            description:data.description  
        }
    }).exec(function(err,result){
        if(result){
            res.send(result)
        }else{
            res.send(err)
        }
    })
}
exports.deletebyid=function(req,res,next){
    Product.findByIdAndRemove(req.body.id).exec(function(err,result){
        if(result){
            res.send(result)
        }else{
            res.send(err)
        }
    })
}
