var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var CategorySchema=new Schema({
    _id:{type:Schema.Types.ObjectId},
    name:{type:Schema.Types.String,required:true,unique:true},
    description:{type:Schema.Types.String},
    creationDate:{type:Schema.Types.Date}
},{
    toObject:{virtuals:true},
    toJSON:{virtuals:true}
})


module.exports=mongoose.model('Category',CategorySchema);