var express = require('express');
var router = express.Router();
const Jobs=require('../models/jobs');
const user = require('../models/user');
//const { use } = require('./login');
const mongoose=require('mongoose')
var router = express.Router();

router.post('/',(req,res,next)=>{
    console.log("req.body in routes postjobs",req.body);
    const data = req.body.job;
    const userId = req.body.userId;
    const job = new Jobs({
        _id : new mongoose.Types.ObjectId(),
        title:data.title,
        userid:userId,
        maxApplicants:1000,
        maxPositions:1000,
        deadline:data.expiry_date,
        skillsets:"skill",
        jobType:data.type,
        duration:1000,
        salary:data.salary,
        rating:1,
        location:'india by default'
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
    // return res.status(200).json({message:'Testing'});
})
module.exports=router


