require("dotenv").config()
var express=require("express")
var connectToDatabase=require("./database/db")
var imageRoutes=require("./routes/image-routes")
var cors=require("cors")
var app=express()
connectToDatabase()
app.use(express.json())
app.use(cors())
app.use("/api/image",imageRoutes)

var Port=process.env.Port||3000
app.listen(Port,()=>{
    console.log(`server running on port ${Port}`);
    
})
