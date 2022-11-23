const mongoose = require('mongoose');

// const jobsSchema = mongoose.Schema({
//     _id : mongoose.Schema.Types.ObjectId,
//     title:{
//         type:String,
//         required:true
//     },
//     description:{
//         type:String,
//         required:true,
//         // unique:true,
//     },
//     organization:{
//         type:String,
//         required:true
//     },
//     location:{
//         type:String,
//         required:true
//     },
//     date:{
//         type:Date,
//         default:Date.now(),
//     },
//     salary:{
//         type:Number,
//         required:true
//     },
//     keywords:{
//         type:Array,
//         default:[]
//     },
//     rating:{
//         type:Number,
//         min:0,
//         max:5
//     }
//     // location:{
//     //     type:Boolean,
//     //     default:false
//     // }
// });


const jobsSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title:{
        type:String,
        required:true
    },
    userid:
    {
        type:String,
        required:true
    },
    maxApplicants:{
        type:Number,
        required:true,
        // unique:true,
    },
    maxPositions:
    {
        type:Number,
        required:true
    },
    deadline:{
        type:String,
        required:true
    },
    skillsets:{
        type:Array,
        required:true
    },
    jobType:
    {
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    location:{
        type:String
    },
    status:{
        type:Boolean
    }

});




//plural form of Product is the name of collection 
module.exports = mongoose.model('Jobs',jobsSchema);