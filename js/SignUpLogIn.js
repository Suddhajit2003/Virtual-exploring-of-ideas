let navbtn = document.getElementById('navbtn');
let inputEmail = document.querySelector('.inputEmail');
let inputPasswordLogIn = document.querySelector('.inputPasswordLogIn');
let inputPasswordSignUp = document.querySelector('.inputPasswordSignUp');
let forgot = document.querySelector('.forgot');
let privacy = document.querySelector('.privacy');


document.addEventListener('DOMContentLoaded', function () {
    inputEmail.style.display = 'block';
    inputPasswordSignUp.style.display = 'none';
    inputPasswordLogIn.style.display = 'none';
    forgot.style.display = 'none';
    privacy.style.display = 'none';
});


navbtn.addEventListener('click', function () {
    if (navbtn.innerHTML === 'Sign Up now') {
        navbtn.innerHTML = 'Log In';
        inputEmail.style.display = 'block';
        inputPasswordSignUp.style.display = 'none';
        inputPasswordLogIn.style.display = 'none';
        forgot.style.display = 'none';
        privacy.style.display = 'none';
    } else if (navbtn.innerHTML === 'Log In') {
        navbtn.innerHTML = 'Sign Up now';
        inputEmail.style.display = 'block';
        inputPasswordSignUp.style.display = 'none';
        inputPasswordLogIn.style.display = 'none';
        forgot.style.display = 'none';
        privacy.style.display = 'none';
    }
});

inputEmail.addEventListener('keypress', function () {
    if (event.key === 'Enter') {
        if (navbtn.innerHTML === 'Sign Up now') {
            inputEmail.style.display = 'none';
            inputPasswordSignUp.style.display = 'none';
            inputPasswordLogIn.style.display = 'flex';
            forgot.style.display = 'block';
            privacy.style.display = 'none';
        } else if (navbtn.innerHTML === 'Log In') {
            inputEmail.style.display = 'none';
            inputPasswordLogIn.style.display = 'none';
            inputPasswordSignUp.style.display = 'flex';
            forgot.style.display = 'none';
            privacy.style.display = 'block';
        }
    }
});

let search = document.querySelector('.search');

search.addEventListener('keypress', function () {
    if (event.key === 'Enter') {
        window.location.href = './search.html';
    }
});

function redirectToHome () {
    window.location.href = './index.html';
}