var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var UserSchema=new Schema({
    // _id:{type:Schema.Types.ObjectId,required:true},
    fname:{type:Schema.Types.String,required:true},
    lname:{type:Schema.Types.String,required:true},
    password:{type:Schema.Types.String,required:true},
    email:{type:Schema.Types.String,required:true,unique:true},
    phone:{type:Schema.Types.Number,required:true,unique:true},
    question:{type:Schema.Types.String,required:true},
    answer:{type:Schema.Types.String,required:true},
    gender:{type:Schema.Types.String,required:true},
    createDate:{type:Schema.Types.Date,required:true}
})

module.exports=mongoose.model('User',UserSchema);