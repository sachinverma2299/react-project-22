const mongoose = require('mongoose');
const jobsSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        // unique:true,
    },
    organization:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now(),
    },
    salary:{
        type:Number,
        required:true
    },
    keywords:{
        type:Array,
        default:[]
    },
    status:{
        type:Boolean
    }
    // location:{
    //     type:Boolean,
    //     default:false
    // }
});
const savedJobsSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        // unique:true,
    },
    organization:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now(),
    },
    salary:{
        type:Number,
        required:true
    },
    keywords:{
        type:Array,
        default:[]
    },
    status:{
        type:Boolean
    }
    // location:{
    //     type:Boolean,
    //     default:false
    // }
});