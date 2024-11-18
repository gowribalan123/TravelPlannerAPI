
const TravelplanData = require('../models/travelplanner')


const getTravelplans =async(req,res)=>{
    
    try{
        const Travelplans = await TravelplanData.find()
        res.status(200).json(Travelplans)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}


//Get Travelplan based on id
const getTravelplanById=async(req,res)=>{
    try{
  
        const TravelplanId    =req.params.id
        const Travelplan =await TravelplanData.findById(TravelplanId)
        if(!Travelplan) return res.status(404).json({message:'Travel plan not found'})
            res.status(200).json(Travelplan)
        
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
//create
const createTravelplan=async(req,res)=>{
    try{
        const{destination,startDate,endDate,activities}=req.body
        const newTravelplan = new TravelplanData({destination,startDate,endDate,activities})
        await newTravelplan.save()
        res.status(201).json(newTravelplan)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

//update Travelplan

const updateTravelplan=async(req,res)=>{
    try{
        const TravelplanID=req.params.id
        const Travelplan =await TravelplanData.findByIdAndUpdate(TravelplanID,req.body,{new:true})
        if(!Travelplan) return res.status(404).json({message:'Travelplan not found'})
            res.status(200).json(Travelplan)
        
    }catch(error){
        res.status(500).json({error:error.message})
    }


}

//delete Travelplan

const deleteTravelplan=async(req,res)=>{
    try{
                    const TravelplanID=req.params.id
        const Travelplan =await TravelplanData.findByIdAndDelete(TravelplanID)
        if(!Travelplan) return res.status(404).json({message:'Travelplan not found'})
            res.status(200).json({message:"Travelplan deleted successfully"})
        
    }catch(error){
        res.status(500).json({error:error.message})
    }


}

module.exports={getTravelplans,getTravelplanById,createTravelplan,updateTravelplan,deleteTravelplan}