const form = document.getElementById('loginForm');
const successScreen = document.getElementById('successScreen');

form.addEventListener('submit', function(e){
    e.preventDefault();

    successScreen.classList.add('active');

    setTimeout(() => {
        window.location.href = "administrador.html";
    }, 3000);
});