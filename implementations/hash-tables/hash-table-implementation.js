class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  //private property
  //*En basit hash fonksiyonu, verilen key değeri için bir indeks üretir, ASCII değerleri ve indeksler üzerinden bir ağırlıklı toplama yaparak modül alır
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  //*İlk olarak set edeceğimiz key ve value değerlerini hash fonksiyonundan geçirmemiz gerekiyor.
  set = (key, value) => {
    //*key değeri hash fonksiyonundan geçerek bize bir değer üretir, bu değer verinin bellekteki adresidir
    let address = this._hash(key);

    //*Olası bir çakışmayı önlemek için kontrol yapılır
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }; // O(1)

  get = (key) => {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    // console.log(currentBucket);
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
  }; // O(1)

  keys() {
    const keysArray = [];
    if (!this.data.length) {
      return undefined;
    }
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && this.data[i].length) {
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keysArray.push(this.data[i][j][0]);
          }
        } else {
          keysArray.push(this.data[i][0]);
        }
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(2);
myHashTable.set("grapes", 1000);
myHashTable.set("apples", 1000);
myHashTable.set("oranges", 1000);
console.log(myHashTable.get("apples"));
console.log(myHashTable.data);
console.log(myHashTable.keys());
