const itemList = ['ghost', 'bottle', 'book', 'chair', 'mice'];
const colorList = ['white', 'green', 'blue', 'red', 'grey'];

class Card {
  constructor(itemArray, colorArray) {
    const copyItemList = [...itemArray];
    const copyColorList = [...colorArray];

    const indexArray = [];
    copyItemList.forEach((element, index) => {
      indexArray.push(index);
    });

    const answerIndex = Math.floor(Math.random() * indexArray.length);
    this.correctItem = copyItemList[answerIndex];
    this.correctColor = copyColorList[answerIndex];

    let randomIndex;

    // randomly decide if card will have zero correct attributes or 1 fully correct element
    if (Math.random() >= 0.5) {
      // if true, then it will have 1 fully correct element
      this.item1 = copyItemList[answerIndex];
      this.color1 = copyColorList[answerIndex];

      indexArray.splice(indexArray.indexOf(answerIndex), 1);
      randomIndex = indexArray[Math.floor(Math.random() * indexArray.length)];

      this.item2 = copyItemList[randomIndex];

      indexArray.splice(indexArray.indexOf(randomIndex), 1);
      randomIndex = indexArray[Math.floor(Math.random() * indexArray.length)];

      this.color2 = copyColorList[randomIndex];
    } else {
      // if false, then it will have zero correct elements
      indexArray.splice(indexArray.indexOf(answerIndex), 1);
      randomIndex = indexArray[Math.floor(Math.random() * indexArray.length)];

      this.item1 = copyItemList[randomIndex];

      indexArray.splice(indexArray.indexOf(randomIndex), 1);
      randomIndex = indexArray[Math.floor(Math.random() * indexArray.length)];

      this.color1 = copyColorList[randomIndex];

      indexArray.splice(indexArray.indexOf(randomIndex), 1);
      randomIndex = indexArray[Math.floor(Math.random() * indexArray.length)];

      this.item2 = copyItemList[randomIndex];

      indexArray.splice(indexArray.indexOf(randomIndex), 1);
      randomIndex = indexArray[Math.floor(Math.random() * indexArray.length)];

      this.color2 = copyColorList[randomIndex];
    }
  }

  isCorrect(pickedObject) {
    if (pickedObject.item === this.correctItem && pickedObject.color === this.correctColor) {
      return true;
    }
    return false;
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
