var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var SubCategorySchema=new Schema({
    _id:{type:Schema.Types.ObjectId},
    name:{type:Schema.Types.String,required:true,unique:true},
    description:{type:Schema.Types.String},
    creationDate:{type:Schema.Types.Date},
    categoryid:{type:String,required:true}
},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})

SubCategorySchema.virtual('getsubcategoryCategory',{
    ref: 'Category',
    localField: 'categoryid',
    foreignField: '_id',
    justOne: false,
})

SubCategorySchema.virtual('getsubcategorysubsubcategory',{
    ref: 'SubSubCategory',
    localField: '_id',
    foreignField: 'subcategoryid',
    justOne: false,
})

SubCategorySchema.virtual('getsubcategoryBrand',{
    ref: 'Brand',
    localField: '_id',
    foreignField: 'subsubcategoryid',
    justOne: false,
})

SubCategorySchema.virtual('getallcatforsubcatbyid',{
    ref: 'Category',
    localField: 'categoryid',
    foreignField: '_id',
    justOne: false,
})


module.exports=mongoose.model('SubCategory',SubCategorySchema);