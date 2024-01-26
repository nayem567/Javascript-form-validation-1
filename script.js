

// 1. when someone clicks on the submit button an event will be triggered

const submitBtn = document.getElementById('submit');
const form = document.getElementById('form');
const error_name = document.getElementById('error_name'); 
const error_email = document.getElementById('error_email');
const success = document.querySelector("#successMessage");

form.addEventListener('submit', check);

function check(event) {
    event.preventDefault();
    
    const name = document.getElementById('name');
    const nameValue = name.value.trim();

    if(nameValue ==""){
        error_name.classList.remove("d-none");
    }
    else{
        error_name.classList.add('d-none');
    }

    const email = document.getElementById('email');
    const emailValue = email.value.trim();



    if(emailValue == ""){
        error_email.classList.remove("d-none");
    }else{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(emailValue)){
            error_email.classList.add('d-none');
            success.classList.remove('d-none');
        }else{
            error_email.classList.remove('d-none');
        }
    }
    form.reset();
   
}


