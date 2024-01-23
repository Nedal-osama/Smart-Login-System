var sayHello=document.querySelector('#sayHello');
sayHello.innerHTML='Hello '+localStorage.getItem('UserName');

var logOut=document.querySelector('#logOut');
logOut.addEventListener('click',function (evetinfo) {
    location.href="../index.html";
    localStorage.removeItem('UserName');
    
})