
var loginDetails;
if (localStorage.getItem("signUp")!=null) {
    loginDetails=JSON.parse(localStorage.getItem("signUp"));
}
else{
    loginDetails=[];
}
var signUpDetail;
var signUpDetails;
var signUpName=document.querySelector('#signUpName');
var signUpEmail=document.querySelector('#signUpEmail');
var signUpPassword=document.querySelector('#signUpPassword');
function clearForm() {
    signUpName.value="";   
    signUpEmail.value="";   
    signUpPassword.value="";   
        
}

function validateName(name) {
    var nameRegx=/^[A-z]{3,8}$|^[A-z]{3,6}\s[a-z]{3,7}$/;
    if (nameRegx.test(name)) {
        signUpName.classList.replace("is-invalid","is-valid");   
        return true;
    }
    else{
        signUpName.classList.add("is-invalid");  
        return false;
    }
}

function validateEmail(email) {
    var emailRegex=/^[A-z]{1}\w{3,}@gmail.com$/;
    if (emailRegex.test(email)) {
        signUpEmail.classList.replace("is-invalid","is-valid");   
        return true;
    }
    else{
        signUpEmail.classList.add("is-invalid");  
        return false;
    }
}

function validatePassword(Password) {
    var PasswordRegx=/^\w{5,}$/;
    if (PasswordRegx.test(Password)) {
        signUpPassword.classList.replace("is-invalid","is-valid");   
        return true;
    }
    else{
        signUpPassword.classList.add("is-invalid");  
        return false;
    }
}
var emailInfo=document.querySelector('.emailInfo');
var allFeildsInfo=document.querySelector('.allFeildsInfo');
var signUpSuccess=document.querySelector('.signUpSuccess');
 var repeatFlag=0;
 var allFeildsInfoFlag=0;
 var emailInfoFlag=0;
 var signUpSuccessFlag=0;
function chaekIfExist(email) {
    for(var i=0;i<loginDetails.length;i++){
        if (email===loginDetails[i].Email) {
            repeatFlag=1;
            break;
        }
    }    
}


function signUpSuccessAlert () {
    if (allFeildsInfoFlag===1||emailInfoFlag===1) {
        allFeildsInfo.classList.add('d-none'); 
        emailInfo.classList.add('d-none'); 
        signUpSuccess.classList.remove('d-none');
        signUpSuccessFlag=1; 
        emailInfoFlag=0; 
        allFeildsInfoFlag=0;         
    }
}


function cofirmSign() {
    if (validateName(signUpName.value)&validateEmail(signUpEmail.value)&validatePassword(signUpPassword.value)&repeatFlag===0) {
        var lginDetail={
            Name:signUpName.value,
            Email:signUpEmail.value,
            Password:signUpPassword.value
        }
        loginDetails.push(lginDetail);
        location.href="./Login/index.html";
        localStorage.setItem("signUp",JSON.stringify(loginDetails));

        signUpSuccessAlert();
    }
    else{
        if(repeatFlag!=1){
            if(signUpSuccessFlag===1){
                signUpSuccess.classList.add('d-none');
                signUpSuccessFlag=0;
            }
            if (emailInfoFlag===1) {
                emailInfo.classList.add('d-none');
                emailInfoFlag=0;  
                
            }
        allFeildsInfo.classList.remove('d-none'); 
        allFeildsInfoFlag=1;
    }
        else  {
            if(signUpSuccessFlag===1){
                signUpSuccess.classList.add('d-none');
                signUpSuccessFlag=0;
            }
            else if (allFeildsInfoFlag===1) {
                allFeildsInfo.classList.add('d-none');
                allFeildsInfoFlag=0;       
            }
            emailInfo.classList.remove('d-none'); 
            emailInfoFlag=1;
            repeatFlag=0; 
        }
    }       
    }



var signUpBtn=document.querySelector('#signUpBtn');
signUpBtn.addEventListener('click',function (evetinfo) {
    chaekIfExist(signUpEmail.value);
    cofirmSign();
    clearForm();

})


var signinSpan=document.querySelector('#signinSpan');
signinSpan.addEventListener('click',function (evetinfo) {
    location.href="./Login/index.html";
})

console.log(localStorage.getItem('userName'));