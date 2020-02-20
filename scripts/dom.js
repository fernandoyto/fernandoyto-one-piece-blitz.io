function displayCombo(array) {
  for (let i = 0; i < array.length; i++) {
    let elem = document.createElement('img');
    elem.setAttribute('src', `./images/characters/${array[i]}.png`);
    elem.setAttribute('height', '250');
    elem.setAttribute('width', '250');
    elem.setAttribute('class', 'cards');
    document.querySelector('.game').appendChild(elem);
  }
}

function gameEnd(blitz) {
  let images = document.getElementsByClassName('cards');
  for (let i = images.length; i-->0;) {
    document.images[i].parentNode.removeChild(document.images[i]);
  }
  for (let j = 0; j < wantedName.length; j++) {
    document.querySelector(`.${wantedName[j]}`).textContent = '';
  }
  document.querySelector('.gameTime').innerHTML = '';
  document.querySelector('.game').innerHTML = `You got ${blitz.correctAnswers} correct answers!!`;
}

function displayWanteds(blitz) {
  for (let i = 0; i < blitz.wantedName.length; i++) {
    let elem = document.createElement('img');
    elem.setAttribute('src', `./images/characters/${blitz.wantedName[i]}-wanted.png`);
    elem.setAttribute('height', '300');
    elem.setAttribute('width', '200');
    elem.setAttribute('class', 'rounded mx-auto d-block wanted');
    elem.setAttribute('id', blitz.wantedName[i]);
    document.querySelector(`.${blitz.wantedName[i]}`).appendChild(elem);
    let text = document.createElement('p');
    text.textContent = `Press ${blitz.wantedAnswer[i]} for ${blitz.wantedName[i]}!`;
    document.querySelector(`.${blitz.wantedName[i]}`).appendChild(text);
  }
}


function startTimer(blitz) {
  let gameTimeLeft = 30;
  let downloadTimer = setInterval(function () {
    document.querySelector('.gameTime').innerHTML = gameTimeLeft + ' seconds remaining';
    gameTimeLeft -= 1;
    if (gameTimeLeft < 10) {
      document.querySelector('.gameTime').classList.add('finalSeconds');
    }
    if (gameTimeLeft < 0) {
      clearInterval(downloadTimer);
      gameEnd(blitz);
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
  const blitz = new OnePieceBlitz();
  blitz.gameStart();
  
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
      displayWanteds(blitz);
      displayCombo(blitz.combo);
      startTimer(blitz);

      document.addEventListener('keydown', function (event) {
        switch (event.keyCode) {
          case 81:
            if (blitz.isCorrect('luffy', 'luffy-hat')) {
              erasePreviousCombo();
              blitz.defineCombo();
              displayCombo(blitz.combo);
            } else { alert('errou!!!'); }
            break;
          case 87:
            if (blitz.isCorrect('ace', 'ace-hat')) {
              erasePreviousCombo();
              blitz.defineCombo();
              displayCombo(blitz.combo);
            } else { alert('errou!!!'); }
            break;
          case 69:
            if (blitz.isCorrect('sabo', 'sabo-hat')) {
              erasePreviousCombo();
              blitz.defineCombo();
              displayCombo(blitz.combo);
            } else { alert('errou!!!'); }
            break;
          case 65:
            if (blitz.isCorrect('chopper', 'chopper-hat')) {
              erasePreviousCombo();
              blitz.defineCombo();
              displayCombo(blitz.combo);
            } else { alert('errou!!!'); }
            break;
          case 83:
            if (blitz.isCorrect('law', 'law-hat')) {
              erasePreviousCombo();
              blitz.defineCombo();
              displayCombo(blitz.combo);
            } else { alert('errou!!!'); }
            break;
        }
      });
    }
  }, 1000);
}

document.querySelector('.start-btn').onclick = function () {
  gameStart();
};

