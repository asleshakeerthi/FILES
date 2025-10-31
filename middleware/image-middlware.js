var multer=require("multer")
var path=require("path")
var storage=multer.diskStorage({
    destination:function(req ,file,cd){
        cd(null,"uploads/")
    },
    filename:function(req ,file,cd){
        cd(null,file.filename +"-"+ Date.now() + path.extname(file.originalname))
    }
})
var upload=multer({storage})
module.exports= upload