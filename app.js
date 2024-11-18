const express=require('express')
const mongoose=require('mongoose')
const travelplannerRouter=require('./routers/travelplannerRouter')

const app=express()
app.get('/',(req,res)=>{
    res.send("Hello")

})
app.use(express.json())
app.use('/travelplans',travelplannerRouter)


async function main(){
    await mongoose.connect('mongodb+srv://gowribalan123:Indiaismy%40123@cluster0.tv1a7.mongodb.net/TravelplannerDB');
    
}

main()
.then(()=>console.log("Database connected"))
.catch(err=>console.log(err));

const TravelplanData=require('./models/travelplanner')

app.listen(3000,()=>{
    console.log("Server started")

})