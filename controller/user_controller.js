var User=require('../model/user_model');
var bcrypt=require('bcrypt');
var mongoose=require('mongoose')
exports.register=function(req,res,next){
    var data=req.body;
    // console.log(data);
    // var pass;
    bcrypt.hash(data.password, 10, function(err, hash) {
        if(hash){
            var user=new User({
                // _id:mongoose.Schema.Types.ObjectId,
                fname:data.fname,
                lname:data.lname,
                password:hash,
                email:data.email,
                phone:data.phone,
                question:data.question,
                answer:data.answer,
                gender:data.gender,
                createDate:Date.now()
                
            });
            user.save(function(errr,result){
                if(result){
                    console.log(result)
                    res.send(result)
                }else{
                    console.log(errr)
                }
            })      
        }
      });
    
}