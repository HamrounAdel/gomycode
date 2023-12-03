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
    enum: ['admin', 'Patient', 'Doctor'],
    required: true,
   
  },
  specialite:{
    type:String,
    required: function() { return this.role === 'Doctor'; }
   },  
   numOrder:{
    type:String,
    required: function() { return this.role === 'Doctor'; }
   },  
  

})
module.exports= mongoose.model('ProListUsers',userSchema)