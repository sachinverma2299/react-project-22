const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        
    },
    phone:{
        type:Number,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    applicants:{
        type:Array,
        default:[]
    },
    profile: {
        type: String,
    },
    
    
});
//plural form of Product is the name of collection 
module.exports = mongoose.model('Admin',adminSchema);