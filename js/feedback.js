let bar = document.querySelector('.fa-chevron-left');
let sidebar = document.querySelector('.sidebar');

bar.addEventListener('click', function () {
    if (bar.style.transform === 'rotate(180deg)') {
        sidebar.style.transform = 'translateX(0)';
        bar.style.transform = 'rotate(0deg)';
    } else {
        sidebar.style.transform = 'translateX(-85%)';
        bar.style.transform = 'rotate(180deg)';
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

function redirectToSignUpLogIn () {
    window.location.href = './SignUpLogIn.html';
}