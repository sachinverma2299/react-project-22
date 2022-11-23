var express = require('express');
var router = express.Router();
const User = require('../models/user');
const UserProfile = require('../models/userProfile');
const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken')
// const bodyParser = require('body-parser');


const path = require('path');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function(req,res,cb){
        cb(null,'./uploads/');
    },
    //  filename: function(req,file,cb){
    //     cb(null,file.originalname);
    // }
    filename: function(req,file,cb){
        var ext = path.extname(file.originalname);
        var file2 = file;
        cb(null,file.originalname);
    }
});
// const upload = multer({dest:'uploads/'});
const upload = multer({storage:storage  });


const Cloudinary = require("cloudinary");
// Cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SECRET,
// });
// Cloudinary.config({
//   cloud_name: `${process.env.CLOUD_NAME}`,
//   api_key: `${process.env.CLOUD_API_KEY}`,
//   api_secret: `${process.env.CLOUD_API_SECRET}`,
// });
Cloudinary.config({
  cloud_name: "yogya-cloud" ,
  api_key: "782932695226127",
  api_secret: "XklvDnqSWEdRS6AhjbjCNOd5o6s",
});




// if - if user is created but profile not
// else - profile is also created
router.get('/:id',(req,res,next)=>{
    console.log("aaaaaaaaaaaaaaaaa");
    const userid = req.params.id;
    UserProfile.find({userId:userid})
    .exec()
    .then((user)=>{
        console.log("user from get",user);
        return res.status(200).json({data:user})
    })
    .catch((err)=>{
        console.log("err from get",err);
        return res.status(401).json({err:err})
    })
    // console.log("req from get",req.params);
    console.log("aaaaaaaaaaaaaaaa");
    // res.json({})
})


router.post('/updateEducation',(req,res,next)=>{
    console.log("req.body update education",req.body);
    UserProfile.findOneAndUpdate({userId:req.body.id},
        {
      
        education:req.body.initialEducation,

        })
        .then((result2)=>{
            console.log(".......hello.......",result2) 
            return res.status(200).json({msg:"hello"});})
        .catch((err)=>{console.log("........errr..........",err)
        return res.status(500).json({msg:"error"});})
    // res.status(200).json({msg:"msg"})
})


router.post('/',(req,res,next)=>{
    // we can use find one
    console.log("profile router");
    console.log(req.body);
    // console.log("user = ",User);
    UserProfile.find({userId:req.body.userId})
    .exec()
    .then(
        user=>{
            if(user.length<1){
                User.find({_id:req.body.userid})
                .exec()
                .then(user1=>{
                    // console.log("user",user);
                    if(user1.length<1){
                        //got no user
                        console.log("first if");
                        return res.status(401).json({message:'Auth failed'});
                    }
                    else{
                        console.log("else in profile");
                        // console.log("user",user1);
                        return res.status(200).json({
                            message:"Profile Successfull",
                            // token:token,
                            // userId:user[0]._id,
                            // admin:user[0].admin,
                            name:user1[0].name,
                            admin:user1[0].admin,
                            email:user1[0].email,
                            });
                    }
                })
                .catch(err=> {
                    console.log("error");
                    res.status(500).json({error : err});
                    })
            
            }
            else{
                console.log("else in profile");
                // console.log("user",user);
                return res.status(200).json({
                    message:"Profile Successfull",
                    // token:token,
                    // userId:user[0]._id,
                    // admin:user[0].admin,
                    name:user[0].name,
                    admin:user[0].admin,
                    email:user[0].email,
                    });
            }
        })

        // })
    .catch(err=>{

})

});


// router.post('/update',upload.single('profile'),async(req,res,next)=>{
//     // console.log("..................",req);
//     console.log("reqbody",req.body);
//     console.log(req.file);
//     console.log("..................");
//     // let user = req.body.user;
//     // console.log("user.name",user.name);
//     // const UpdateUser = await User.findById(user.id)
//     // UpdateUser.name = user.name;
//     // await UpdateUser.save();
//     // console.log("oooooooooooo");




//     // User.findByIdAndUpdate(user.id,{
//     //     'name':user.name,
//     //     'resume':user.resume
//     // })
//     // .then((res)=>{
//     //     console.log("/////////////");
//     //     console.log(res);
//     // })
//     // .catch((err)=>{
//     //     console.log("...errr",err);
//     // })
// })

router.post('/update',upload.single('profile'),async(req,res)=>{
    //   console.log("req",req); 
      console.log("hello from post",req.body);
      console.log('h = ',req.file);
      console.log("............................"); 
    //   console.log("body = ",req.body); 
      await UserProfile.find({userId:req.body.id}) 
      .exec()
      .then((result1)=>{ 
        console.log("profile update then");  
        Cloudinary.v2.uploader.upload(req.file.path,async function(err,result){
        if(result1.length>0){ 
            console.log("already exists - if");
            console.log("skill",req.body.skills.split(','));
            // console.log("skill",req.body.education);
        
            const allSkills = req.body.skills.split(',');
            // console.log("ed",req.body.education.length);
            // for(var i = 0;i<req.body.education.length;i++){
            //     console.log(" value = ",req.body.education[i]);
            // }
            // console.log("skills",req.body.skills);
            // console.log(typeof(req.body.education));
            // let k =  JSON.parse(req.body.education);
            // console.log("k = ",k);
            // console.log("..",(JSON.stringify(k)));
            // const UpdateProfile = await find
            UserProfile.findOneAndUpdate({userId:req.body.id},
            {
                // console.log("feteched user",UpdateProfile);
            // UpdateProfile.name=req.body.name;
            // UpdateProfile.phone=req.body.phone;
            // UpdateProfile.education=[{'institutionName':'Gl','startYear':2022,'endYear':2032}];
            // UpdateProfile.skills=['default'];
            // UpdateProfile.rating=3;
            // UpdateProfile.profile=result.url;
            // UpdateProfile.resume='temp';
            // UpdateProfile.save()
            userId:req.body.id,
               name:req.body.name,
               phone:req.body.phone,
                //   education:[{'institutionName':'Gl','startYear':2022,'endYear':2032}],
            // education:req.body.education,
            //    skills:['default'],
            skills:allSkills,
                rating:3,
                profile:result.url,
               resume:'temp' 
            })
            .then((result2)=>{
                console.log("res 2",result2) 
                return res.status(200).json({msg:"hello"});})
            .catch((err)=>{console.log("err 5",err)
            return res.status(500).json({msg:"error"});})

 
            console.log("if ends already exist");
        }
        else{
            const allSkills = req.body.skills.split(',');
            console.log("new profile - else",req.body);
            // console.log("result = ",result);
            const newProfile = new UserProfile({
               _id : new mongoose.Types.ObjectId(),
               userId:req.body.id,  
               name:req.body.name,
               phone:req.body.phone,
            //    education:[{'institutionName':'Gl','startYear':2022,'endYear':2032}],
            // education:req.body.education,
            //    skills:['default'],
            skills:allSkills, 
                rating:3,
                profile:result.url,
               resume:'temp'
              
           });
          
           newProfile.save()
               .then(resu=>{
                
                   console.log("resu = ");
                   return res.status(200).json({msg:"hello"});
                //    res.status(201).json({
                //        message:'Successfully added',
                //        createdDish : resu
                //    });
                   // res.send(dish);
               })
               .catch(err=> {
                   console.log("Error in saving",err);
                   res.status(500).json({error : err});
                   });
        }
      })
      .catch((err)=>{
        console.log("catch profile update");
        return res.status(500).json({msg:"hello"});
      })
    
    //   Cloudinary.v2.uploader.upload(req.file.path,function(err,result){
        // console.log("result = ",result);
        //  const newProfile = new UserProfile({
        //     _id : new mongoose.Types.ObjectId(),
        //     userId:req.body.id,
        //     name:req.body.name,
        //     phone:req.body.phone,
        //     education:[{'institutionName':'Gl','startYear':2022,'endYear':2032}],
        //     skills:['default'],
        //      rating:3,
        //      profile:result.url,
        //     resume:'temp'
        //     // comment for cloudinary
        //     // image:req.file.path
        // });
        // // console.log("dish created at dishes.js");
        // // console.log(newProfile);
        // newProfile.save()
        //     .then(resu=>{
        //         console.log("resu = ",resu);
        //         res.status(201).json({
        //             message:'Successfully added',
        //             createdDish : resu
        //         });
        //         // res.send(dish);
        //     })
        //     .catch(err=> {
        //         console.log("Error in saving",err);
        //         res.status(500).json({error : err});
        //         });
    })
    console.log("...end...");
    
});

module.exports = router;