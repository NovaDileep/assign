
function retrieve(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var text=JSON.parse(this.responseText);
            var output="<table><tr><th>Id</th><th>User Id</th><th>Title</th><th>Completed</th></tr>";
            var l=document.getElementById("list");
            for(var i=0;i<text.length;i++){
                output+="<tr>";
                output+="<td>"+text[i].id+"</td>";
                output+="<td>"+text[i].userId+"</td>";
                output+="<td>"+text[i].title+"</td>";
                if(text[i].completed==true){
                    output+="<td>"+"<input type='checkbox'  checked disabled>"+"</td>";
                }
                else{
                    output+="<td>"+"<input type='checkbox' id='b' onchange='h()'>"+"</td>";
                }
                output+="</tr>";
            }
            l.innerHTML=output+"</table>";
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    }
    count=0;
    function h(){
        disab=document.querySelectorAll('input[type="checkbox"]:disabled').length;
        count=document.querySelectorAll('input[type="checkbox"]:checked').length;
        console.log(disab);
        console.log(count-disab);
        if((count-disab)==5){
            setTimeout(function(){alert("Congrats. 5 Tasks have been Successfully Completed");},500);
        }
    }