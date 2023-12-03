const mongoose = require('mongoose');
const userSchema = require('./userModel')
const rdvSchema = new mongoose.Schema({
    namePatient:{
        type:String,
        required:true,
    },
    nameDoctor:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    status: { 
        type: String,
        default: 'pending'
         },
})

module.exports = mongoose.model('RDVs',rdvSchema)