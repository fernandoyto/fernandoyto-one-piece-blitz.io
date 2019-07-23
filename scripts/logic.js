const colorList = ['white', 'green', 'blue', 'red', 'grey'];

const itemList = ['ghost', 'bottle', 'book', 'chair', 'mice'];


class Cards {
  constructor(itemArray, colorArray) {
    let randomItemIndex = Math.floor(Math.random() * itemArray.length);
    let randomColorIndex = Math.floor(Math.random() * colorArray.length);

    this.item1 = itemArray[randomItemIndex];
    this.color1 = itemArray[randomColorIndex];

    itemArray.splice(randomItemIndex, 1);
    colorArray.splice(randomColorIndex, 1);

    if (randomItemIndex !== randomColorIndex) {
      randomItemIndex = Math.floor(Math.random() * itemArray.length);
      randomColorIndex = Math.floor(Math.random() * colorArray.length);

      this.item2 = itemArray[randomItemIndex];
      this.color2 = colorArray[randomColorIndex];
    }
    else {
      // how to guarantee that next random element will not have fully correct properties?
    }
  }

  randomColor() {

  }
}

const cardsList = [];

class ObjToPick {
  constructor(itemArray, colorArray) {
    for (let i = 0; i<itemArray.length; i++) {
      this.item = itemArray[i];
      this.color = colorArray[i];
    }
  }
}