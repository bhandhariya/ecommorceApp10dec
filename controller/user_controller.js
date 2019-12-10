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

exports.login=function(req,res,next){
    var data=req.body;
    User.findOne({email:data.email}).exec(function(err,result){
        if(result){
            console.log(result.password,data.password)
            bcrypt.compare(data.password, result.password, function(error, resultt) {
               if(resultt==true){
                   res.send(result)
               }
            });
        }else{
            res.send(err)
        }
    })
}