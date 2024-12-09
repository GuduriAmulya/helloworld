const fs=require("fs").promises
async function readFile(){
    console.log("Start reading");
    try{
        const data=await fs.readFile("example.txt","utf8")
        console.log("content: ",data);
    }catch(err){
        console.error("error reading file: ",err);
    }

}
readFile();
