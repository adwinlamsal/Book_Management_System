const blogRouter = require("express").Router();



blogRouter.get("/",(req,res)=>{

res.json("I am from blogs");

});





module.exports= blogRouter;