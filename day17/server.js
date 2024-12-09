let express=require("express");
let app=express();
app.get("/",(req,res)=>{
    console.log("Reached root route");
    res.send("Reached root");
})
app.listen(8000,()=>{
    console.log("Backend working at Port 8000");
});


// / is