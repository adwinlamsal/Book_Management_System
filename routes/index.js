const router = require("express").Router();

const blogRouter = require("../modules/books/blog.route");


router.use("/blogs",blogRouter);








middleware=(value)=>{
return (req,res,next)=>{
    res.json ({"name":"I am krishna from body"});


    next();

};



}




router.get("/",(req,resp)=>{


});
router.post("/",middleware("krishna"),(req,resp)=>{

    
    
    });


module.exports= router;