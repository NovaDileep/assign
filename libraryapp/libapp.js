const express=require("express");
const app=express();
const nav=[
    {link:'/books',name:'Books'},
           {link:'/authors',name:'Authors'}
        ];
const booksRouter=require("./src/routes/bookRoutes")(nav);
app.use(express.static("./public"));
app.set("view engine","ejs");
app.set("views",__dirname+"/src/views");
app.use('/books',booksRouter);
app.get('/',function(req,res){
    res.render("index",{
        nav,
        title:'Library'
    });
});


app.listen(5678);