const express=require("express");
const fileUpload=require("express-fileupload");
var router = express.Router();
const app=express();
router.use(fileUpload());



router.post('/',(req,res)=>{
    console.log("hello resume")
    console.log(req.files.file)
    if(req.files===null){
        return res.status(400).json({msg:"No Files Uploaded"});

    }
const file=req.files.file;
file.mv(`${__dirname}/../public/resume/${file.name}`,err=>{
    if(err){
        console.error(err);
        return res.status(500).send(err);
    }
    res.json({fileName:file.name,filePath:`/uploads/${file.name}`})
})
});
module.exports = router;