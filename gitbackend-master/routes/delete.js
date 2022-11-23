var express = require('express');
var router = express.Router();
const User = require('../models/user');
const Job= require('../models/jobs')
const { route } = require('./user');

router.post('/',(req,res)=>
{
    console.log(req.body.itemid)
    const id=req.body.itemid
    const userid=req.body.userId
    console.log(id)
    console.log(userid)
    // console.log(User.find())
    // User.find({_id:userid}).then((res)=>{
    //     res.saved.update({_id:id}).then((res)=>console.log(res)).catch((e)=>console.log(e))
    //     console.log('inside res',res)
    // })
    // .catch((e)=>console.log(e))
    // User.updateOne({_id:userid},{$pull:{saved:{_id:id}}}).then((res)=>console.log(res)).catch((e)=>console.log(e))

    // const docs = await user.find({_id:id });
    // console.log(docs)
        // res.json(data);

        
        User.update({
            '_id':userid
          }, {
            $pull: {
              saved: {
                _id: id
              }
            }
          },
        );
    });

module.exports=router