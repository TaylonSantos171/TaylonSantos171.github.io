const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');


const validateinput = ({ target }) => {
    if(target.value.length > 2) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

const handleSubimt = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = '/pages/game.html'
}

input.addEventListener('input', validateinput);
form.addEventListener('submit', handleSubimt)

