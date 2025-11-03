var express=require("express")
const upload=require("../middleware/image-middlware")
const {uploadImage,getAllImages,getsingleImage}=require("../controllers/image-controllers")
var router=express.Router()
router.post("/upload",upload.single("image"),uploadImage)
router.get("/allimages",getAllImages)
router.get("/singleImage/:id",getsingleImage)
module.exports=router


