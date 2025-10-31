var imageRoutes=require("./routes/image-routes")
var cors=require("cors")
var express=require("express")
connectedToDatabase()
app.use(express.json())
app.use(cors())
app.use("/api/myimages",imageRoutes)
var Port=process.env.Port||6000
app.listen(Port,()=>{
    console.log(`server running on port ${Port}`);
    
})
