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

// eslint-disable-next-line func-names
document.querySelector('.start-btn').onclick = function () {
  document.querySelector('.logo').classList.add('inactive');
  document.querySelector('.start-btn').classList.add('inactive');
  let currentCombo = new WantedHatCombo(wantedName, wantedHat);
  const properties = [currentCombo.wanted1, currentCombo.hat1, currentCombo.wanted2, currentCombo.hat2];
  shuffle(properties);
  for (let i = 0; i < properties.length; i++) {
    let elem = document.createElement('img');
    elem.setAttribute('src', `./images/characters/${properties[i]}.png`);
    elem.setAttribute('height', '300');
    elem.setAttribute('width', '300');
    document.querySelector('.game').appendChild(elem);
  }
  for (let i = 0; i < objects.length; i++) {
    let elem = document.createElement('img');
    elem.setAttribute('src', `./images/characters/${objects[i].wanted}-wanted.png`);
    elem.setAttribute('height', '300');
    elem.setAttribute('width', '200');
    elem.setAttribute('class', 'rounded mx-auto d-block')
    document.querySelector(`.${objects[i].wanted}`).appendChild(elem);
  }
};
