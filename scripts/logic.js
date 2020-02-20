// const wantedName = ['luffy', 'ace', 'sabo', 'chopper', 'law'];
// const wantedHat = ['luffy-hat', 'ace-hat', 'sabo-hat', 'chopper-hat', 'law-hat'];
const wantedAnswer = ['Q', 'W', 'E', 'A', 'S'];
// let correctAnswers = 0;

class OnePieceBlitz {
  constructor() {
    this.wantedName = ['luffy', 'ace', 'sabo', 'chopper', 'law'];
    this.wantedHat = ['luffy-hat', 'ace-hat', 'sabo-hat', 'chopper-hat', 'law-hat'];
    this.wanted1 = '';
    this.hat1 = '';
    this.wanted2 = '';
    this.hat2 = '';
    this.answerIndex = 0;
    this.correctWanted = '';
    this.correctHat = '';
    this.indexArray = [];
    this.correctAnswers = 0;
  }

  defineAnswer() {
    this.answerIndex = Math.floor(Math.random() * this.wantedName.length);
    this.correctWanted = this.wantedName[this.answerIndex];
    this.correctHat = this.wantedHat[this.answerIndex];
  }

  defineCombo() {
    let randomIndex;
    this.wantedName.forEach((element, index) => {
      this.indexArray.push(index);
    });

    // randomly decide if card will have zero correct attributes or 1 fully correct element
    if (Math.random() >= 0.5) {
      // display 1 fully correct element
      this.wanted1 = this.wantedName[this.answerIndex];
      this.hat1 = this.wantedHat[this.answerIndex];

      // remove possibility of repeating cards by removing used index
      this.indexArray.splice(this.indexArray.indexOf(this.answerIndex), 1);
      randomIndex = this.indexArray[Math.floor(Math.random() * this.indexArray.length)];

      this.wanted2 = this.wantedName[randomIndex];

      this.indexArray.splice(this.indexArray.indexOf(randomIndex), 1);
      randomIndex = this.indexArray[Math.floor(Math.random() * this.indexArray.length)];

      this.hat2 = this.wantedHat[randomIndex];
    } else {
      // display have zero correct elements
      this.indexArray.splice(this.indexArray.indexOf(this.answerIndex), 1);
      randomIndex = this.indexArray[Math.floor(Math.random() * this.indexArray.length)];

      this.wanted1 = this.wantedName[randomIndex];

      this.indexArray.splice(this.indexArray.indexOf(randomIndex), 1);
      randomIndex = this.indexArray[Math.floor(Math.random() * this.indexArray.length)];

      this.hat1 = this.wantedHat[randomIndex];

      this.indexArray.splice(this.indexArray.indexOf(randomIndex), 1);
      randomIndex = this.indexArray[Math.floor(Math.random() * this.indexArray.length)];

      this.wanted2 = this.wantedName[randomIndex];

      this.indexArray.splice(this.indexArray.indexOf(randomIndex), 1);
      randomIndex = this.indexArray[Math.floor(Math.random() * this.indexArray.length)];

      this.hat2 = this.wantedHat[randomIndex];
    }
  }

  isCorrect(pickedWanted) {
    if (pickedWanted.wanted === this.correctWanted && pickedWanted.hat === this.correctHat) {
      this.correctAnswers += 1;
      return true;
    }
    return false;
  }

  gameStart() {
    this.defineAnswer();
    this.defineCombo();
  }
}

class WantedToPick {
  constructor(wantedArray, hatArray, i) {
    this.wanted = wantedArray[i];
    this.hat = hatArray[i];
  }
}

const objects = [];

for (let i = 0; i < wantedName.length; i++) {
  objects.push(new WantedToPick(wantedName, wantedHat, i));
}
