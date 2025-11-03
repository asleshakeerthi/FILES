var image=require("../model/image")
var uploadToCloudinary=require("../helper/cloudinary-helper")
var uploadImage=async(req,res)=>{
    try{
        if(!req.file){
      res.status(401).json({message : "file missing"})
    }
    var {url,public_id} = await uploadToCloudinary(req.file.path)
    var newImage=new image({
        url,
        public_id
    })
    await newImage.save()
    res.status(201).json({message:"image added"})
}catch(error){
    console.log("error",error);
    res.status(401).json({message:"error"})
}
}
var getAllImages = async(req,res)=>{
    var allimages =await image.find()
    res.status(201).json(allimages)
}
var getsingleImage=async(req,res)=>{
    var id=req.params.id
    var singleImage=await image.findById(id)
    res.status(201).json(singleImage)
}
module.exports = {uploadImage,getAllImages,getsingleImage}