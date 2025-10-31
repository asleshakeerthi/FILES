var express=require("express")
var upload=require("../middleware/image-middlware")
var uploadImage=require("../controllers/image-controllers")
var router=express.Router()
router.post("/upload",upload.single("image"),uploadImage)
module.exports=router