var express=require("express")
const upload=require("../middleware/image-middlware")
const uploadImage=require("../controllers/image-controllers")
var router=express.Router()
router.post("/upload",upload.single("image"),uploadImage)
module.exports=router


