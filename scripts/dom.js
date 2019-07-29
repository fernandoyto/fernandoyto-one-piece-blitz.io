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
    elem.setAttribute('height', '300');
    elem.setAttribute('width', '300');
    elem.setAttribute('class', 'cards');
    document.querySelector('.game').appendChild(elem);
  }
}

function erasePreviousCombo() {
  const removeCards = document.getElementsByClassName('cards');
  while (removeCards[0]) {
    removeCards[0].parentNode.removeChild(removeCards[0]);
  }
}

// eslint-disable-next-line func-names
document.querySelector('.start-btn').onclick = function () {
  document.querySelector('.logo').classList.add('inactive');
  document.querySelector('.start-btn').classList.add('inactive');
  createCombo();
  for (let i = 0; i < objects.length; i++) {
    let elem = document.createElement('img');
    elem.setAttribute('src', `./images/characters/${objects[i].wanted}-wanted.png`);
    elem.setAttribute('height', '300');
    elem.setAttribute('width', '200');
    elem.setAttribute('class', 'rounded mx-auto d-block');
    document.querySelector(`.${objects[i].wanted}`).appendChild(elem);
  }
};

document.addEventListener('keydown', function (event) {
  switch (event.keyCode) {
    case 81:
      if (currentCombo.isCorrect(objects[0])) {
        erasePreviousCombo();
        createCombo();
      } else { alert('errou!!!'); }
      break;
    case 87:
      if (currentCombo.isCorrect(objects[1])) {
        erasePreviousCombo();
        createCombo();
      } else { alert('errou!!!'); }
      break;
    case 69:
      if (currentCombo.isCorrect(objects[2])) {
        erasePreviousCombo();
        createCombo();
      } else { alert('errou!!!'); }
      break;
    case 65:
      if (currentCombo.isCorrect(objects[3])) {
        erasePreviousCombo();
        createCombo();
      } else { alert('errou!!!'); }
      break;
    case 83:
      if (currentCombo.isCorrect(objects[4])) {
        erasePreviousCombo();
        createCombo();
      } else { alert('errou!!!'); }
      break;
  }
});
