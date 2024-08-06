let search = document.querySelector('.search');

search.addEventListener('keypress', function () {
    if (event.key === 'Enter') {
        window.location.href = './search.html';
    }
});

function redirectToSignUpLogIn () {
    window.location.href = './SignUpLogIn.html';
}