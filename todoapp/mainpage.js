
function retrieve(){
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        var text=JSON.parse(this.responseText);
        var output=""
        var l=document.getElementById("list");
        for(var i=0;i<text.length;i++){
            output+="<li>"+text[i].title+"</li>";
            
        }
        l.innerHTML=output;
    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}
