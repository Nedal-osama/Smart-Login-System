var loginDetails;
if (localStorage.getItem("signUp")!=null) {
    loginDetails=JSON.parse(localStorage.getItem("signUp"));
}
else{
    loginDetails=[];
}


var signupSpan=document.querySelector('#signupSpan');
signupSpan.addEventListener('click',function (evetinfo) {
    location.href="../index.html";
})

var loginEmail=document.querySelector('#loginEmail');
var loginPassword=document.querySelector('#loginPassword');


var loginIndex=100;
function checkLoginData() {
    for (var i = 0; i < loginDetails.length; i++) {
        if (loginEmail.value===loginDetails[i].Email&&loginPassword.value===loginDetails[i].Password) {
            loginIndex=i; 
           var userName= loginDetails[i].Name;   

           localStorage.setItem("UserName",userName);
           location.href="../Main/index.html"
        }     
    } 
}









var loginBtn=document.querySelector('#loginBtn');
loginBtn.addEventListener('click',function (evetinfo) {    
    checkLoginData()
    
})
