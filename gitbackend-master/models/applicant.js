const mongoose = require('mongoose');


const applicantSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title:{
        type:String,
        // required:true
    },
    userid:
    {
        type:String
    },
    name:
    {
        type:String
    },
    email:
    {
        type:String
    }
});




//plural form of Product is the name of collection 
module.exports = mongoose.model('Applicant',applicantSchema);