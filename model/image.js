var mongoose=require("mongoose")
var imageSchema=new mongoose.Schema({
    url:{
        type:String,
        require:true
    },
    public_id:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model("image",imageSchema)