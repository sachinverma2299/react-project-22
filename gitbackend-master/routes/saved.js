const express=require('express')
const router=express.Router()
const Jobs=require('../models/jobs')
const jwt=require('jsonwebtoken')
const User = require('../models/user')

//const authorize=require("../middleware/autho")


// const itemid=req.body.itemid
// const userid=req.body.userId
// Jobs.find({_id:itemid}).then((res)=>
// {
//     User.updateOne({_id:userid},{
        
//         $push:{applied:res[0]}
//         // $set:{applied:[]}
//     }).then((res)=>console.log(res))
// }).catch((e)=>console.log(e))


router.post('/',(req,res)=>
{
    const itemid=req.body.itemid
    const userid=req.body.userId
    Jobs.find({_id:itemid}).then((res)=>
{
    User.updateOne({_id:userid},{
        
        $push:{saved:res[0]}
        // $set:{saved:[]}
    }).then((res)=>console.log(res))
}).catch((e)=>console.log(e))
})
router.get('/',(req,res)=>
{
    console.log('inside wishlist')
    User.find((err,val)=>
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
