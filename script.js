
let confirmPassword = document.querySelector("#confirmPassword");
let password = document.querySelector("#password");

function passwordCheck(e){
    const passwordValue = document.querySelector("#password").value;
    const confirmPasswordValue = document.querySelector("#confirmPassword").value;
    const error = document.querySelector(".error");
    console.log(passwordValue,confirmPasswordValue);
    
    if(passwordValue != confirmPasswordValue){
        
        error.classList.remove("error-message-hide");
        error.classList.add("error-message-show");

        password.classList.add("invalid");
        confirmPassword.classList.add("invalid");
    }else{ 
    
        error.classList.add("error-message-hide");
        error.classList.remove("error-message-show");
       

        password.classList.remove("invalid");
        confirmPassword.classList.remove("invalid");
        
    }
}

confirmPassword.addEventListener("keyup", passwordCheck);
password.addEventListener("keyup", passwordCheck);