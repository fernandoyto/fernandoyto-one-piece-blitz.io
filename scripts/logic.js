class OnePieceBlitz {
  constructor() {
    this.wantedNames = ['luffy', 'ace', 'sabo', 'chopper', 'law'];
    this.wantedHats = ['luffy-hat', 'ace-hat', 'sabo-hat', 'chopper-hat', 'law-hat'];
    this.answerKeys = ['Q', 'W', 'E', 'A', 'S'];
    this.answerOptions = [
      {
        wantedName: 'luffy',
        wantedHat: 'luffy-hat'
      },
      {
        wantedName: 'ace',
        wantedHat: 'ace-hat'
      },
      {
        wantedName: 'sabo',
        wantedHat: 'sabo-hat'
      },
      {
        wantedName: 'chopper',
        wantedHat: 'chopper-hat'
      },
      {
        wantedName: 'law',
        wantedHat: 'law-hat'
      },
    ];

    this.gameTimeLeft = 30; // seconds
    this.totalCorrectAnswers = 0;
    this.currentCombo = [];
    this.correctWantedName = '';
    this.correctWantedHat = '';
  }

  // this method defines correct answer, defines current combination of cards to show and return it
  createCombo() {
    this.eraseCombo();

    const indexArray = [];
    this.wantedNames.forEach((element, index) => {
      indexArray.push(index);
    });

    // set correct answer
    const answerIndex = Math.floor(Math.random() * indexArray.length);
    this.correctWantedHat = this.wantedHats[answerIndex];
    this.correctWantedName = this.wantedNames[answerIndex];

    let randomIndex;

    // set combination of cards to show
    if (Math.random() >= 0.5) {
      // combination of cards to display will contain correct answer
      this.currentCombo.push(this.wantedNames[answerIndex]);
      this.currentCombo.push(this.wantedHats[answerIndex]);

      // remove index of correct answer so its properties don't get displayed again
      indexArray.splice(indexArray.indexOf(answerIndex), 1);

      // next wanted and hat to display have to be non-matching
      randomIndex = indexArray[Math.floor(Math.random() * indexArray.length)];
      this.currentCombo.push(this.wantedNames[randomIndex]);

      // remove index of third element to show so it will be non-matching with fourth element
      indexArray.splice(indexArray.indexOf(randomIndex), 1);

      randomIndex = indexArray[Math.floor(Math.random() * indexArray.length)];
      this.currentCombo.push(this.wantedHats[randomIndex]);

    } else {
      // combination of cards to display won't contain correct answer
      indexArray.splice(indexArray.indexOf(answerIndex), 1);

      randomIndex = indexArray[Math.floor(Math.random() * indexArray.length)];
      this.currentCombo.push(this.wantedNames[randomIndex]);

      indexArray.splice(indexArray.indexOf(randomIndex), 1);

      randomIndex = indexArray[Math.floor(Math.random() * indexArray.length)];
      this.currentCombo.push(this.wantedHats[randomIndex]);

      indexArray.splice(indexArray.indexOf(randomIndex), 1);

      randomIndex = indexArray[Math.floor(Math.random() * indexArray.length)];
      this.currentCombo.push(this.wantedNames[randomIndex]);

      indexArray.splice(indexArray.indexOf(randomIndex), 1);

      randomIndex = indexArray[Math.floor(Math.random() * indexArray.length)];
      this.currentCombo.push(this.wantedHats[randomIndex]);
    }
    this.shuffleCombo();
    return this.currentCombo;
  }

  shuffleCombo() {
    let currentIndex = this.currentCombo.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = this.currentCombo[currentIndex];
      this.currentCombo[currentIndex] = this.currentCombo[randomIndex];
      this.currentCombo[randomIndex] = temporaryValue;
    }  
  }

  eraseCombo() {
    this.currentCombo = [];
  }

  gameTimer() {
    let downloadTimer = setInterval(() => {
      this.gameTimeLeft -= 1;

      if (this.gameTimeLeft === 0) {
        clearInterval(downloadTimer);
        gameEnd();
      }
    }, 1000);
  }

  gameEnd() {
    return this.totalCorrectAnswers;
  }

  isCorrect(pickedWanted) {
    if (pickedWanted.wanted === this.correctWanted && pickedWanted.hat === this.correctHat) {
      return true;
    }
    return false;
  }
}
