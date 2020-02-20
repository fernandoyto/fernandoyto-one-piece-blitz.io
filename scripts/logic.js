class OnePieceBlitz {
  constructor() {
    this.wantedName = ['luffy', 'ace', 'sabo', 'chopper', 'law'];
    this.wantedHat = ['luffy-hat', 'ace-hat', 'sabo-hat', 'chopper-hat', 'law-hat'];
    this.wantedAnswer = ['Q', 'W', 'E', 'A', 'S'];
    this.combo = [];
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
    console.log(this.indexArray)
    this.indexArray.length = 0;
    let randomIndex;
    this.wantedName.forEach((element, index) => {
      this.indexArray.push(index);
    });
    // this.defineAnswer();
    
    // randomly decide if card will have zero correct attributes or 1 fully correct element
    if (Math.random() >= 0.5) {
      // display 1 fully correct element
      this.combo.push(this.wantedName[this.answerIndex]);
      this.combo.push(this.wantedHat[this.answerIndex]);

      // remove possibility of repeating cards by removing used index
      this.indexArray.splice(this.indexArray.indexOf(this.answerIndex), 1);
      randomIndex = this.indexArray[Math.floor(Math.random() * this.indexArray.length)];

      this.combo.push(this.wantedName[randomIndex]);

      this.indexArray.splice(this.indexArray.indexOf(randomIndex), 1);
      randomIndex = this.indexArray[Math.floor(Math.random() * this.indexArray.length)];

      this.combo.push(this.wantedHat[randomIndex]);
    } else {
      // display have zero correct elements
      this.indexArray.splice(this.indexArray.indexOf(this.answerIndex), 1);
      randomIndex = this.indexArray[Math.floor(Math.random() * this.indexArray.length)];

      this.combo.push(this.wantedName[randomIndex]);

      this.indexArray.splice(this.indexArray.indexOf(randomIndex), 1);
      randomIndex = this.indexArray[Math.floor(Math.random() * this.indexArray.length)];

      this.combo.push(this.wantedHat[randomIndex]);

      this.indexArray.splice(this.indexArray.indexOf(randomIndex), 1);
      randomIndex = this.indexArray[Math.floor(Math.random() * this.indexArray.length)];

      this.combo.push(this.wantedName[randomIndex]);

      this.indexArray.splice(this.indexArray.indexOf(randomIndex), 1);
      randomIndex = this.indexArray[Math.floor(Math.random() * this.indexArray.length)];

      this.combo.push(this.wantedHat[randomIndex]);
    }
    this.shuffleCombo();
  }

  isCorrect(pickedWantedName, pickedWantedHat) {
    if (pickedWantedName === this.correctWanted && pickedWantedHat === this.correctHat) {
      this.correctAnswers += 1;
      this.combo.length = 0;
      this.defineAnswer();
      this.defineCombo();
      return true;
    }
    return false;
  }

  shuffleCombo() {
    let currentIndex = this.combo.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.combo[currentIndex];
      this.combo[currentIndex] = this.combo[randomIndex];
      this.combo[randomIndex] = temporaryValue;
    }
  }

  gameStart() {
    this.defineAnswer();
    this.defineCombo();
    this.shuffleCombo();
  }
}