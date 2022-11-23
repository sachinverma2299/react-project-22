const express=require('express')
const router=express.Router()
const Jobs=require('../models/jobs')
const jwt=require('jsonwebtoken')

//const authorize=require("../middleware/autho")
router.post('/' ,(req,res)=>{
    const data=req.body
    console.log(data.itemid)
    //console.log(data._id)
    Jobs.updateOne({_id:data.itemid},{
            
            $set:{
                status:true
            }
        }).then((result)=>res.send({'msg':'Job Applied',"status":true})).catch((e)=>{
            console.log(e)
            res.send({"msg":'some error occured ',"status":false})})
    })

    




module.exports=router