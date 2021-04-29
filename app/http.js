var http=require("http");
var server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("welcome");
        res.end();
    }
    else if(req.url=="/login"){
        res.write("successful login");
        res.end();
    }
    else{
        res.write("wrong page");
        res.end();
    }
});

server.listen(5000);
console.log(5000);
console.log(__filename);