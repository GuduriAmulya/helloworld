let express=require("express");
let app=express();

app.get("/",(req,res)=>{
    res.send("Hello KMIT!!");
});
app.listen(5000,()=>{
    console.log("Express backend server is listening/waiting at port 5000.")
});