const wantedName = ['luffy', 'ace', 'sabo', 'chopper', 'law'];
const wantedHat = ['luffy-hat', 'ace-hat', 'sabo-hat', 'chopper-hat', 'law-hat'];
const wantedAnswer = ['Q', 'W', 'E', 'A', 'S'];

class WantedHatCombo {
  constructor(wantedArray, hatArray) {
    const copyWantedName = [...wantedArray];
    const copyWantedHat = [...hatArray];

    const indexArray = [];
    copyWantedName.forEach((element, index) => {
      indexArray.push(index);
    });

    const answerIndex = Math.floor(Math.random() * indexArray.length);
    this.correctWanted = copyWantedName[answerIndex];
    this.correctHat = copyWantedHat[answerIndex];

    let randomIndex;

    // randomly decide if card will have zero correct attributes or 1 fully correct element
    if (Math.random() >= 0.5) {
      // if true, then it will have 1 fully correct element
      this.wanted1 = copyWantedName[answerIndex];
      this.hat1 = copyWantedHat[answerIndex];

      indexArray.splice(indexArray.indexOf(answerIndex), 1);
      randomIndex = indexArray[Math.floor(Math.random() * indexArray.length)];

      this.wanted2 = copyWantedName[randomIndex];

      indexArray.splice(indexArray.indexOf(randomIndex), 1);
      randomIndex = indexArray[Math.floor(Math.random() * indexArray.length)];

      this.hat2 = copyWantedHat[randomIndex];
    } else {
      // if false, then it will have zero correct elements
      indexArray.splice(indexArray.indexOf(answerIndex), 1);
      randomIndex = indexArray[Math.floor(Math.random() * indexArray.length)];

      this.wanted1 = copyWantedName[randomIndex];

      indexArray.splice(indexArray.indexOf(randomIndex), 1);
      randomIndex = indexArray[Math.floor(Math.random() * indexArray.length)];

      this.hat1 = copyWantedHat[randomIndex];

      indexArray.splice(indexArray.indexOf(randomIndex), 1);
      randomIndex = indexArray[Math.floor(Math.random() * indexArray.length)];

      this.wanted2 = copyWantedName[randomIndex];

      indexArray.splice(indexArray.indexOf(randomIndex), 1);
      randomIndex = indexArray[Math.floor(Math.random() * indexArray.length)];

      this.hat2 = copyWantedHat[randomIndex];
    }
  }

  isCorrect(pickedWanted) {
    if (pickedWanted.wanted === this.correctWanted && pickedWanted.hat === this.correctHat) {
      return true;
    }
    return false;
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
