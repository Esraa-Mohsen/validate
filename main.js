// let id = (id) => document.getElementById(id);

// let classes = (classes) => document.getElementsByClassName(classes);

// let username = id("username"),
//   email = id("email"),
//   password = id("password"),
//   form = id("form"),
//   errorMsg = classes("error"),
//   successIcon = classes("success-icon"),
//   failureIcon = classes("failure-icon");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   engine(username, 0, "full name is required ");
//   engine(email, 1, "Email is required");
//   engine(password, 2, "Password password should not be less than 8 character, least one number and  one special character ");
// });

// let engine = (id, serial, message) => {
//   if (id.value.trim() === "") {
//     errorMsg[serial].innerHTML = message;
//     id.style.border = "2px solid red";

    
// function validatename () {
//   var name = document.getElementById("n1").value ;

//   if (name.length == 0){
//     error.innerHtml = " full name is required"
//     return false ;
//   } 
//   if(!name.match (/^[a-zA-Z]+ [a-zA-Z]+$/))
//   {
//     error.innerHtml = " write full name"
//     return false ;
//   }
// error.innerHtml = "valid" ;
// return true ;
// }


// function validatemail () {
//   var name = document.getElementById("e1").value ;

//   if (email.length == 0){
//     error.innerHtml = " email is required"
//     return false ;
//   } 
//   if(!email.match (  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/))
//   {
//     error.innerHtml = " write the valid email"
//     return false ;
//   }
// error.innerHtml = "valid" ;
// return true ;
// }


// function validatepass () {
//   var pass = document.getElementById("p1").value ;

//   if (password.length == 0){
//     error.innerHtml = " password is required"
//     return false ;
//   } 
//   if(!password.match (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) )
//   {
//     password.innerHtml = " write the password"
//     return false ;
//   } 
// error.innerHtml = "valid" ;
// return true ;
// }


//     // icons
//     failureIcon[serial].style.opacity = "1";
//     successIcon[serial].style.opacity = "0";
//   } else {
//     errorMsg[serial].innerHTML = "";
//     id.style.border = "2px solid green";

//     // icons
//     failureIcon[serial].style.opacity = "0";
//     successIcon[serial].style.opacity = "1";
//   }
// };










let userName=document.getElementById("username");
let email=document.getElementById("email");
let password=document.getElementById("password");

let form=document.querySelector("form");

function validateInput(){
    //check username is empty 
    if(userName.value.trim()===""){
       onError(userName,"User Name cannot be empty");
    // }else{
    //     if(!isValidfullname(userName.value.trim())){
    //         onError(userName,"user name must be full name");
        }else{
            onSuccess(userName);
        }
    

    if(email.value.trim()===""){
        onError(email,"Email cannot be empty");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email is not valid");
        }else{
            onSuccess(email);
        }
    }

    //password
    if(password.value.trim()===""){
        onError(password,"password cannot be empty");
     } if(!isValidpass(password.value.trim())){
        onError(password,"PAssword is not valid");
    }else{
        onSuccess(password);
    }
     }
     
       


const fE = document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();

    const formdata = new FormData (fE) ;
    const data = new URLSearchParams(formdata) ;
    fetch ("https://plus.premast.com/api/1.1/wf/sign-up" , {
    method :"post" ,
    body : body

}).then (res => res.json())
.then (data => console.log(data))
.catch(err => console.log(err)) ;




});

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success");  
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");

}

function isValidEmail(email){
   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
} 

function isValidpass(password){    
    return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password) ;
}

// function isValidfullname (userName){    
//     return /^[a-zA-Z\s]+$ /.test(userName) ;
// }
























































