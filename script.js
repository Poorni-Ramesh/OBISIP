//sript.js
const form=document.getElementById('form');
const username=document.getElementById('username');
const password=document.getElementById('pswd');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})

function validateInputs(){
    const usernameVal=username.value.trim();
    const passwordVal=password.value.trim();
    let isValid=true;

    if(usernameVal===''){
        setError(username,'EmailId is required');
        isValid=false;
    }
    else if(!validateEmail(usernameVal)){
        setError(username,"Email is Invalid");
        isValid=false;
    }
    else{
        setSuccess(username)
        
    }

    if(passwordVal==''){
        setError(password,'Password is required');
        isValid=false;
    }
    else if(passwordVal.length < 6){
        setError(password,'Password must be atleast 6 characters');
        isValid=false;
    }
    else{
        setSuccess(password)
    }
    if(isValid){
        window.location.href = 'login.html';
    }
}
function setError(element,msg){
     const inputGroup=element.parentElement;
     const errorElement=inputGroup.querySelector('#error');
     errorElement.innerText=msg;
     inputGroup.classList.add('error');
     inputGroup.classList.remove('success');

}
function setSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('#error');
    errorElement.innerText='';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');

}
const validateEmail=(username)=>{
    return String (username)
    .toLowerCase()
    .match(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    );
}