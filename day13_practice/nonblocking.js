// const fs=require("fs");
// console.log("Starting file");
// fs.readFile("example.txt","utf8",(err,data)=>{
//     if(err) {throw err};
//     console.log("File Content: ",data);
// });
// console.log("End of program");

/*
fs.readFile is a non-blocking operation; it does not wait for the file to be read. Instead, it takes a callback function to handle the result when the operation completes.
While Node.js is reading the file, it continues to execute other code. So, "End of program." will print before "File content" even though the file reading is started earlier.
*/
const fs=require("fs")
fs.readFile("example.txt","utf8")
.then((data)=>{
    console.log("content: ",data);
})
.catch((err)=>{
    console.log("error");

}).finally(()=>{
    console.log("ed of program");
});