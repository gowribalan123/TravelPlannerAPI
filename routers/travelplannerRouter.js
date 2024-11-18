const express=require('express')
const travelplannerRouter=express.Router()
const {getTravelplans,getTravelplanById,createTravelplan,updateTravelplan,deleteTravelplan}=require('../controllers/travelplannerController')

//const travelplannerRouter = require('../models/travelplannerRouter')

//localhost:3000/Travelplans
travelplannerRouter.get('/',getTravelplans)

//localhost:3000/Travelplans//672f18954c2597bb816466ff
travelplannerRouter.get('/:id',getTravelplanById)

//create Travelplans
travelplannerRouter.post('/',createTravelplan)


//update Travelplans

travelplannerRouter.patch('/:id',updateTravelplan)

//delete Travelplans
travelplannerRouter.delete('/:id',deleteTravelplan)

module.exports=travelplannerRouter
