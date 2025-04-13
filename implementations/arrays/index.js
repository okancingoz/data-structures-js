/*
const strings = ["a", "b", "c", "d"];
//* 4*4 = 16 bytes of storage

//*access
strings[2]; //O(1)

//*push
strings.push("e"); //push to last element O(1)

//*pop
strings.pop(); //remove to last element - O(1)

//*unshift
strings.unshift("x"); //add to beginning O(n)

//*splice
strings.splice(2, 0, "alien"); //divide and add O(n)
 
console.log(strings);
*/

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("you");
newArray.push("!");
newArray.pop();
newArray.delete(1);
newArray.push("are");
newArray.push("nice");

console.log(newArray);
