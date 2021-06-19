//User
const user = {
    username: 'Abe',
    password: 0000,
}

//Button
const btnLogin = document.querySelector('.log-sign');
const usernameText = document.querySelector('.username-text');
const passwordText = document.querySelector('.pass-text');
const btnSubmit = document.querySelector('.btn-submit');
const containerApp = document.querySelector('.app');
const containerLogin = document.querySelector('.kotak_login');
const navMenu = document.getElementsByClassName('navlink');
const pictContainer = document.querySelector('.list-pict')
const allPicture = document.querySelectorAll('.card-image');
const footer = document.querySelector('footer');

let belumLogin = false;

//Event Listener
btnSubmit.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("TEST");

    if (usernameText.value == user.username && passwordText.value == user.password) {
        console.log("SAMA USERNAME & password");
        containerApp.style.opacity = 100;
        containerLogin.classList.add('hidden');
        footer.style.display = 'block';
        belumLogin = true;
        for(let i = 0; i < navMenu.length; i++) {
            navMenu[i].style.display = 'block';
        }

    } else {
        console.log("TIDAK SAMA USERNAME");
        alert("WRONG");
        usernameText.value = passwordText.value = '';
    }
})

btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("TEST");
    if (!belumLogin) {
        console.log("Berhasil");
        containerLogin.classList.toggle('hidden');

    } else {
        console.log("SUDAH LOGIN");
    }
})

pictContainer.addEventListener('mouseover', function(e) {
    e.preventDefault();
    if (e.target.classList.contains('card-image')) {
        allPicture.forEach(el => {
            el.style.opacity = '0.2';
        });
        e.target.style.opacity = 1.0;

    }    
})

pictContainer.addEventListener('mouseout', function(e) {
    e.preventDefault();
    allPicture.forEach(el => el.style.opacity = '1.0');
})



