var express = require('express');
var router = express.Router();
const Jobs=require('../models/jobs');
const user = require('../models/user');
const { use } = require('./login');
const mongoose=require('mongoose')
var router = express.Router();

router.get('/',(req,res,next)=>
{

    console.log('hii')
    // const user1=new Jobs({
    //     _id : new mongoose.Types.ObjectId(),
    //     title: "Software Development Intern2",
    //     userid:1,
    //     maxApplicants: 5,
    //     maxPositions: 1,
    //     deadline: "2021-02-20T18:17:24.519Z",
    //     skillsets: ["C", "C++", "javascript"],
    //     jobType: "Internship",
    //     duration: 2,
    //     salary: 400000
    // })
    // user1.save().then((res)=>console.log(res)).catch((e)=>console.log(e))
    Jobs.find((err,val)=>
    {
        if(err)
            console.log(err)
        else
        {
            res.json(val)
        }
    })
})
module.exports=router


