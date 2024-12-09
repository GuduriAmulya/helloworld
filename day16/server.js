//import packages
//server is ready
//
let express=require('express');
let app=express();//instance on express'
// app.use('/public',express.static(path.join(__dirname,)))
app.use(express.json());
//express=talk to backend
app.get('/',(req,res,next)=>{/// is root route
    res.send(" REached root route");
    next();
})
app.post('/',(req,res)=>{/// is root route
    // console.log(req.body);
    res.send(" REached root post method route");
    
})
app.post('/postcheck',(req,res)=>{

    res.send(" REached postcheck route");
    
})
app.delete('/deletecheck',(req,res)=>{/// is root route
    res.send(" REached deletecheck route");
})
app.put('/checkput',(req,res)=>{
    res.send(" REached checkput route");
})
app.listen(4000,()=>{
    console.log(`Backend server is working at PORT 4000`);
});
//put ,post=> 
// 
//rest 