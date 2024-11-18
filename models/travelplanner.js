const mongoose=require('mongoose')
const express=require('express')

const travelplanSchema=new mongoose.Schema({
  
destination: {
    type:String,
    required:true,
    index:true
},
startDate: Date ,
endDate: Date,
activities:[String]

})
travelplanSchema.index({destination:1})
module.exports=mongoose.model('travelplans',travelplanSchema)