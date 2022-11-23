const express = require('express');
const app = express();
const bp = require('body-parser');
const cors = require('cors');
app.use(bp.json());
app.use(cors());
require('dotenv').config();

console.log(process.env.DB_PASS);

const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://yogyasinghal:${process.env.DB_PASS}@cluster0.9hqsa1v.mongodb.net/testBack?retryWrites=true&w=majority`)
.then((res)=>console.log('connected to db (model)'))
.catch((e)=>console.log('error in connection',e))

// mongodb+srv://yogyasinghal:mongodb@1083@cluster0.9hqsa1v.mongodb.net/Capstone?retryWrites=true&w=majority

let userRouter = require('./routes/user');
let SignupRouter = require('./routes/signup');
let LoginRouter = require('./routes/login');
let job=require('./routes/jobs')
let profileRouter = require('./routes/profile');
let resumeUpload=require("./routes/resumeUpload")
let jobapplied=require("./routes/appliedjobs")
let postJobs = require('./routes/postJobs');
let apply=require("./routes/apply")
let saved=require("./routes/saved")
let deletesaved=require('./routes/delete')


app.use('/profile',profileRouter); 
app.use('/',userRouter);
app.use('/login',LoginRouter)
app.use('/signup',SignupRouter);
app.use('/dashboard',job);
app.use("/upload",resumeUpload);
app.use("/postJobs",postJobs)
app.use("/apply",apply)
app.use("/saved",saved)
app.use("/user",userRouter)
app.use("/download", require("./routes/downloadResume"));
// app.use("/delete",deletesaved)



const PORT = process.env.PORT || 9000;


app.listen(PORT,()=>console.log("server running at port 9000"))