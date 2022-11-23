var express = require('express');
var router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

router.post('/',(req,res,next)=>{
    console.log("inside signup post",req.body);
    User.find({email:req.body.user.email})
        .exec()
        .then(user=>{
            if (user.length>=1){
                console.log("existssssssssssssssssss");
                return res.status(409).json({msg:'Email Exists'});
                res.send("Email Exists");
            }
            else{
                bcrypt.hash(req.body.user.password,10,(err,hash)=>{
                    if (err){
                        return res.status(500).json({error:err});
                        // res.send("Error");
                    }
                    else{
                        const job = new User({
                        _id : new mongoose.Types.ObjectId(),
                        name:req.body.user.name,
                        email:req.body.user.email,
                        password:hash,
                        admin:req.body.user.admin,
                        resume:'resumee string',
                        });
                        // console.log("user = ",job);
                        job.save()
                            .then(result=>{
                                console.log("inside save",result);
                                res.status(201).json({
                                    msg:'Saved Successfully',
                                    createdProducts : result
                                });
                                // res.send("Login Successfull");
                            })
                            .catch(err=> {
                                console.log("..........................................");
                                console.log(err);
                                // res.send("l");
                                res.status(500).json({error : err,msg:'Error in saving'});
                                // res.send("Please Enter Correct Email Address");
                                });
                        // next();
                        // res.send('api is working bro ');
                    }

                // }
                })
            }
})

});
module.exports = router;