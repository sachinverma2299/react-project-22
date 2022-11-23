const express=require('express')
const router=express.Router()
const Jobs=require('../models/jobs')
const jwt=require('jsonwebtoken')
const User = require('../models/user')
const Applicant=require('../models/applicant')
const mongoose=require('mongoose')
//const authorize=require("../middleware/autho")
router.post('/',(req,res)=>
{
    const itemid=req.body.itemid
    const userId=req.body.userId
    console.log('inside /apply')
    Jobs.find({_id:itemid}).then((res)=>
    {
        User.updateOne({_id:userId},{
            
            $push:{applied:res[0]}
            // $set:{applied:[]}
        }).then((res)=>console.log(res))
    }).catch((e)=>console.log(e))
    // User.updateOne({_id:userid},{
    //     // $push:{applied:itemid}
    //     $set:{applied:[]}
    // }).then((res)=>console.log(res)).catch((e)=>console.log(e))

    Jobs.updateOne({_id:itemid},
        {
            $push:{userid:{userId}}
            // $set:{userid:[]}

        }).then((res)=>
        {
            console.log('hello from inside')
            console.log(res)
        }).catch((e)=>console.log(e))

})

router.post('/applicant',(req,res)=>
{
    let name1=''
    let email1=''
    let title1=''
    const itemid=req.body.itemid
    const userId=req.body.userId
    console.log('inside apllied person page')
    console.log(itemid,userId)


    User.find({_id:userId}).then((res)=>{
        name1=res[0].name,
        email1=res[0].email
        Jobs.find({_id:itemid}).then((res)=>
        {
            title1=res[0].title

            console.log(name1,email1,title1)
            const user1=new Applicant({
                _id : new mongoose.Types.ObjectId(),
                title:title1,
                name:name1,
                email:email1
            })
            user1.save().then((res)=>console.log(res)).catch((e)=>console.log(e))
            
        }).catch((e)=>console.log(e))







    }).catch((e)=>console.log(e))







})


router.get('/applicant',(req,res)=>
{

    Applicant.find((err,val)=>
    {
        if(err)
            console.log(err)
        else
        {
            res.json(val)
        }
    })

})


// -----------------------to delete all data from applicant schema

// router.post('/applicant',(req,res)=>
// {
//     applicants.remove({}).then((res)=>console.log(res))
// })





    module.exports=router