const  mongoose  = require("mongoose");

const userSchema =new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  phone:{
    type:Number,
    required:true
   }, 
  role:{
    type:String,
    default:"admin"
  },
  specialite:{
    type:String,
    required:false
   },  
   numOrder:{
    type:String,
    required:false
   },  
  

})
module.exports= mongoose.model('ProListUsers',userSchema)