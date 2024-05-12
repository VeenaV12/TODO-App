


function validateForm(un, pw, callback){  
    var un = checkUserName()
    var pw = checkPassword()

    if(!(un && pw)){
        
        document.querySelector('#errormsg').style.color = 'red';
        document.querySelector('#errormsg').innerHTML = 'Invalid username or password';
    }    

    if(un && pw){
        
        document.querySelector('#errormsg').innerHTML ='';
        document.querySelector('#username').value = '';
        document.querySelector('#password').value = '';
        callback()
        alert("You're now logged in!");
       
    }
   return true
}

function goHome(){
    window.location.href = 'home.html';
}


function checkUserName(){
    const username = document.querySelector('#username').value;
    if (username === 'admin'){
     return true
    }
    else{
        return false
    }
 }

 function checkPassword(){
    const password = document.querySelector('#password').value;
    const intpw = parseInt(password);
    if(intpw === 12345){
        return true
    }
    else{
        return false
    }
 }


 