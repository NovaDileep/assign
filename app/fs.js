var fs=require("fs");
//var res=fs.readdirSync("./");
//console.log(res);
fs.readdir("./",(err,ans)=>{
    if(err){
        console.log(`error is ${err}`);
    }
    else{
        console.log(`answer is ${ans}`);
    }
})