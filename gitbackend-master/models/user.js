const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        // unique:true,
        
    },
    password:{
        type:String,
        required:true
    },
    admin:{
        type:Boolean,
        default:false
    },
    applied:{
        type:Array
    },
    saved:
    {
        type:Array
    }
});
//plural form of Product is the name of collection 
module.exports = mongoose.model('User',userSchema);