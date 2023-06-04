const grid = document.querySelector('.grid');

const spanPlayer = document.querySelector('.player');

const timer = document.querySelector('.timer')

const characters = [
 'beth' ,
 'jerry' ,
 'jessica' ,
 'morty' ,
 'pessoa-passaro' ,
 'pickle-rick' ,
 'rick' ,
 'summer' ,
 'meeseeks' ,
 'scroopy' ,
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
};

let firstCard = ''; 
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if(disabledCards.length === 20) {
        clearInterval(this.loop);
        alert(`parabéns, ${spanPlayer.innerHTML}! Seu tempo foi :${timer}`);
    }
}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if(firstCharacter === secondCharacter) {

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame()

    } else {

        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');
            firstCard = '';
            secondCard = '';
        }, 500)


    }
}
 
const revealCard = ({ target }) => {

    if(target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if(firstCard === '') {

        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode;

    } else if (secondCard === '') {

        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode;

        checkCards();
    }

};


const createcard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

   front.style.backgroundImage = `url('../imgs/${character}.png')`;

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);

    return card;
};

const loadgame = () => {
    const duplicatechacacters = [ ...characters, ...characters];
    
    const shuffledArray = duplicatechacacters.sort( () => Math.random() - 0.5 );

    Math.random()

    duplicatechacacters.forEach((character) => {

        const card = createcard(character);
        grid.appendChild(card);
        
    });
};

const contador = () => {

    this.loop = setInterval(() => {

    const tempoatual = +timer.innerHTML;
    timer.innerHTML = tempoatual + 1;

    }, 1000) 
}

window.onload = () => {

    const playerName = localStorage.getItem('player');
    spanPlayer.innerHTML = playerName;
    contador()
    loadgame()
}