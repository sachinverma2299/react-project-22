var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');



const path = require('path');
const multer = require('multer');

const storageFunction = multer.diskStorage({
  destination: function(req,res,cb){
      cb(null,'./uploads');
  },
  
  filename: function(req,file,cb){
      var ext = path.extname(file.originalname);
      var file2 = file;
      cb(null,file.originalname);
  } 
});

const upload = multer({storage:storageFunction  });
// const upload2 = multer();


const Cloudinary = require("cloudinary");

Cloudinary.config({
cloud_name: "yogya-cloud" ,
api_key: "782932695226127",
api_secret: "XklvDnqSWEdRS6AhjbjCNOd5o6s",
});



const User = require('../models/user');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send("from index.js");
//   // res.render('index', { title: 'Express' });
// });




router.get('/',(req,res)=>
{
    console.log('hiii inside user')
    User.find((err,val)=>
    {
        if(err)
            console.log(err)
        else
        {
            res.json(val)
        }
    })
}
)

router.post('/',upload.single('file'),(req,res)=>{
//   console.log("req",req); 
  // console.log("hello from post",req);
  console.log(req.body);
  console.log(req.file);
  // Cloudinary.v2.uploader.upload(req.body.resume,function(err,result){
  Cloudinary.v2.uploader.upload(req.file.path,function(err,result){
    console.log("result = ",result);
     const newDish = new User({
        _id : new mongoose.Types.ObjectId(),
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        admin:req.body.admin,
        resume:result.url,
        applied:[],
        saved:[]
        // comment for cloudinary
        // image:req.file.path
    });
    // console.log("dish created at dishes.js");
    // console.log(newDish);
    newDish.save()
        .then(resu=>{
            console.log("resu = ",resu);
            res.status(201).json({
                message:'Successfully added',
                createdDish : resu
            });
            // res.send(dish);
        })
        .catch(err=> {
            // console.log("Error in saving");
            res.status(500).json({error : err});
            });
})















//   const user1 = new User({
//     _id:new mongoose.Types.ObjectId(),
//     name:'try name',
//     email:'email@gmail.com',
//     password:'trypass',
//     admin:'true'
//   })
//   user1.save()
//   .then((result)=>res.send({msg:'created contact'}))
//   .catch((e)=>console.log(e))
});

module.exports = router;