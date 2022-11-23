const mongoose = require("mongoose");

let userProfileSchema = new mongoose.Schema(
  {
    _id : mongoose.Schema.Types.ObjectId,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      // unique:true
    },
    name: {
      type: String,
      required: true,
    },
    phone:{
      type:Number,
      required:true
    },
    // education:[
    //   String
    // ],
    education: [
      {
        institutionName: {
          type: String,
          required: true,
        },
        startYear: {
          type: Number,
          required: true,
          
        },
        endYear: {
          type: Number,
        },
      },
    ],
    skills: [String],
    rating: {
      type: Number,
      min:0,
      max: 5.0,
      default: 0,
    },
    resume: {
      type: String,
    },
    profile: {
      type: String,
    },
  }
);

module.exports = mongoose.model("UserProfiles", userProfileSchema);
