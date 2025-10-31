var cloudinary=require("../config/cloudinary")
var uploadToCloudinary=async(filepath)=>{
try{
    var result=await cloudinary.uploader.upload(filepath)
    return{
        url:result.secure_url,
        public_id:result.public_id
    }
    }catch(error){
        console.log("error",error);
        result.status(500).json({message:"error"})
    }
}
module.exports=uploadToCloudinary
