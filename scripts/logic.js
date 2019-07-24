const itemList = ['ghost', 'bottle', 'book', 'chair', 'mice'];
const colorList = ['white', 'green', 'blue', 'red', 'grey'];

class Card {
  constructor(itemArray, colorArray) {
    let randomItemIndex = Math.floor(Math.random() * itemArray.length);
    let randomColorIndex = Math.floor(Math.random() * colorArray.length);

    const copyItemList = [...itemArray];
    const copyColorList = [...colorArray];

    this.item1 = copyItemList[randomItemIndex];
    this.color1 = copyColorList[randomColorIndex];

    copyItemList.splice(randomItemIndex, 1);
    copyColorList.splice(randomColorIndex, 1);

    if (randomItemIndex !== randomColorIndex) {
      /* if the first item-color combination does not have fully correct properties,
      just pick random properties again* */
      randomItemIndex = Math.floor(Math.random() * copyItemList.length);
      randomColorIndex = Math.floor(Math.random() * copyColorList.length);

      this.item2 = copyItemList[randomItemIndex];
      this.color2 = copyColorList[randomColorIndex];
    } else {
      /* however, if first item-color combination does have fully correct properties,
      then I have to guarantee that next combination will not be correct */
      do {
        randomItemIndex = Math.floor(Math.random() * copyItemList.length);
        randomColorIndex = Math.floor(Math.random() * copyColorList.length);
      }
      while (randomItemIndex === randomColorIndex);
      this.item2 = copyItemList[randomItemIndex];
      this.color2 = copyColorList[randomColorIndex];
    }
  }

  isCorrect(pickedObject) {
    if (this.item1 === pickedObject.item && this.color1 === pickedObject.color) {
      return true;
    }
    if (this.item2 === pickedObject.item && this.color2 === pickedObject.color) {
      return true;
    }
    return false;
  }

  defineCorrectAnswer() {
    let correctAnswer;
    if (itemList.indexOf(this.item1) === colorList.indexOf(this.color1)) {
      correctAnswer = { item: this.item1, color: this.color1 };
    }
    if (itemList.indexOf(this.item2) === colorList.indexOf(this.color2)) {
      correctAnswer = { item: this.item2, color: this.color2 };
    }
    
  }
}

class ObjToPick {
  constructor(itemArray, colorArray, i) {
    this.item = itemArray[i];
    this.color = colorArray[i];
  }
}

const objects = [];

for (let i = 0; i < itemList.length; i++) {
  objects.push(new ObjToPick(itemList, colorList, i));
}

let testCard = new Card(itemList,colorList);

console.log(testCard);

console.log(testCard.correctAnswer(objects[1]));
