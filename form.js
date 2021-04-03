state=false;

function valid(){
     email=document.getElementById("email");
     pwd=document.getElementById("pwd");
     pwds=document.getElementById("pwds");
     phone=document.getElementById("phone");
     incorrectp=document.getElementById("incorrect");
     wrongp=document.getElementById("wrongphone");
     error=document.getElementById("invalid");
     
    let regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(\.[a-z]{2,3})?$/;
    let phone1=/[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    let phone2=/[0-9]{3}.[0-9]{3}.[0-9]{4}/;
    let phone3=/[0-9]{3} [0-9]{3} [0-9]{4}/;
    if(regexp.test(email.value) && pwd.value==pwds.value && (phone1.test(phone.value)||phone2.test(phone.value)||phone3.test(phone.value))){
        return true;
    }
    if(pwd.value!=pwds.value){
        incorrectp.style.color="red";
        incorrectp.innerHTML="Passwords are not same";
        pwds.style.border="1px solid red";
    }
    else{
        incorrectp.textContent="Passwords are same";
        incorrect.style.color="green";
        pwds.style.border="1px solid green";
    }
    if((phone1.test(phone.value)||phone2.test(phone.value)||phone3.test(phone.value))!=true){
        wrongp.style.color="red";
        wrongp.innerHTML="Invalid format";
        phone.style.border="1px solid red";
    }
    else{
        wrongp.textContent="Valid format";
        wrongp.style.color="green";
        phone.style.border="1px solid green";
    }
    if(regexp.test(email.value)!=true){
        
        error.innerHTML="Invalid Email Address";
        error.style.color="red";
        email.style.border="1px solid red";
    }
    else{
        error.textContent="Valid Email Address";
        error.style.color="green";
        email.style.border="1px solid green";
    }
    return false;
}
        
function myFunction(show){
    show.classList.toggle('fa-eye-slash');
}
function toggle(){
if(state){
    pwd.setAttribute("type","password");
    state=false;
}
else{
    pwd.setAttribute("type","text");
    state=true;
   }
}
function change(){
    check=document.getElementById("exampleCheck1");
    if(check.checked==true){
        document.getElementById("signup").removeAttribute("disabled");
    }
    else{
        document.getElementById("signup").setAttribute("disabled","disabled");
    }
}
