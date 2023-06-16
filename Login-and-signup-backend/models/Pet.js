const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({

  title:{
    type:String,
    required:true
},
  price:{
    type:String,
    required:true
},
  image:{
    type:String,
    required:true
},
  details:{
    type:String,
    required:true
},



});

module.exports = mongoose.model("Pet", petSchema);