const express  = require("express");
const indexRouter = require("./routes/index")


const app = express();

app.use(express.json());

app.use("/",indexRouter);



app.listen(8001,()=>{

console.log("Express server running in background")

})










