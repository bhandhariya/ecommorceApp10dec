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



module.exports=mongoose.model('SubCategory',SubCategorySchema);