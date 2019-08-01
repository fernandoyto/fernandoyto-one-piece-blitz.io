/* eslint-disable func-names */
/* eslint-disable default-case */
/* eslint-disable prefer-arrow-callback */
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

let currentCombo;

function createCombo() {
  currentCombo = new WantedHatCombo(wantedName, wantedHat);
  const properties = [currentCombo.wanted1, currentCombo.hat1, currentCombo.wanted2, currentCombo.hat2];
  shuffle(properties);
  for (let i = 0; i < properties.length; i++) {
    let elem = document.createElement('img');
    elem.setAttribute('src', `./images/characters/${properties[i]}.png`);
    elem.setAttribute('height', '250');
    elem.setAttribute('width', '250');
    elem.setAttribute('class', 'cards');
    document.querySelector('.game').appendChild(elem);
  }
}

function gameEnd() {
  let images = document.getElementsByClassName('cards');
  for (let i = images.length; i-->0;) {
    document.images[i].parentNode.removeChild(document.images[i]);
  }
  for (let j = 0; j < wantedName.length; j++) {
    document.querySelector(`.${wantedName[j]}`).textContent = '';
  }
  document.querySelector('.gameTime').innerHTML = '';
  document.querySelector('.game').innerHTML = `You got ${correctAnswers} correct answers!!`;
}

function instantiateWanteds() {
  for (let i = 0; i < objects.length; i++) {
    let elem = document.createElement('img');
    elem.setAttribute('src', `./images/characters/${objects[i].wanted}-wanted.png`);
    elem.setAttribute('height', '300');
    elem.setAttribute('width', '200');
    elem.setAttribute('class', 'rounded mx-auto d-block wanted');
    document.querySelector(`.${objects[i].wanted}`).appendChild(elem);
    let text = document.createElement('p');
    text.textContent = `Press ${wantedAnswer[i]} for ${objects[i].wanted}!`;
    // text.setAttribute('class', 'textForAnswer')
    document.querySelector(`.${objects[i].wanted}`).appendChild(text);
  }
}


function startTimer() {
  let gameTimeLeft = 30;
  let downloadTimer = setInterval(function () {
    document.querySelector('.gameTime').innerHTML = gameTimeLeft + ' seconds remaining';
    gameTimeLeft -= 1;
    if (gameTimeLeft < 10) {
      document.querySelector('.gameTime').classList.add('finalSeconds');
    }
    if (gameTimeLeft < 0) {
      clearInterval(downloadTimer);
      gameEnd();
    }
  }, 1000);
}

function erasePreviousCombo() {
  const removeCards = document.getElementsByClassName('cards');
  while (removeCards[0]) {
    removeCards[0].parentNode.removeChild(removeCards[0]);
  }
}

function gameStart() {
  correctAnswers = 0;
  document.querySelector('.logo').classList.add('inactive');
  document.querySelector('.background').classList.add('background-2');
  document.querySelector('.background').classList.remove('background');
  document.querySelector('.start-btn').classList.add('inactive');
  let timerText = document.createElement('p');
  timerText.setAttribute('class', 'countdown');
  document.querySelector('.game').appendChild(timerText);
  let countdownTimer = 3;
  let startCountdown = setInterval(function() {
    document.querySelector('.countdown').innerHTML = `Game will start in ${countdownTimer}`;
    countdownTimer -= 1;
    if (countdownTimer < 0) {
      clearInterval(startCountdown);
      document.querySelector('.countdown').classList.add('inactive');
      createCombo();
      instantiateWanteds();
      startTimer();
    }
  }, 1000);
}

// eslint-disable-next-line func-names
/*
event listener for start button
hide logo, instantiate a new 'card' using createCombo
create answer options with for loop
*/
document.querySelector('.start-btn').onclick = function () {
  gameStart();
};

document.addEventListener('keydown', function (event) {
  switch (event.keyCode) {
    case 81:
      if (currentCombo.isCorrect(objects[0])) {
        correctAnswers += 1;
        erasePreviousCombo();
        createCombo();
      } else { alert('errou!!!'); }
      break;
    case 87:
      if (currentCombo.isCorrect(objects[1])) {
        correctAnswers += 1;
        erasePreviousCombo();
        createCombo();
      } else { alert('errou!!!'); }
      break;
    case 69:
      if (currentCombo.isCorrect(objects[2])) {
        correctAnswers += 1;
        erasePreviousCombo();
        createCombo();
      } else { alert('errou!!!'); }
      break;
    case 65:
      if (currentCombo.isCorrect(objects[3])) {
        correctAnswers += 1;
        erasePreviousCombo();
        createCombo();
      } else { alert('errou!!!'); }
      break;
    case 83:
      if (currentCombo.isCorrect(objects[4])) {
        correctAnswers += 1;
        erasePreviousCombo();
        createCombo();
      } else { alert('errou!!!'); }
      break;
  }
});
