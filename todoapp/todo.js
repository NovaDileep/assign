state=false;
function check(){
    user=document.getElementById("user");
    error=document.getElementById("invalid");
    password=document.getElementById("password");
    wrongp=document.getElementById("wrongpass");
    if(user.value=='admin' && password.value=='12345'){
       return true;
    }
    
    if(user.value!='admin'){
      error.innerHTML="Invalid Username";
      error.style.color="red";
      user.style.border="1px solid red";
     }
  else{
      error.textContent="Valid Username";
      error.style.color="green";
      user.style.border="1px solid green";
    }
   if(password.value!='12345'){
      wrongp.innerHTML="Wrong password";
      wrongp.style.color="red";
      password.style.border="red";
   }
   else{
      wrongp.innerHTML=" ";
      password.style.border="1px solid green";
   }
  
   return false;
   }


function myFunction(show){
   show.classList.toggle('fa-eye-slash');
}
function toggle(){
   if(state){
     password.setAttribute("type","password");
     state=false;
   }
   else{
      password.setAttribute("type","text");
      state=true;
   }
} 