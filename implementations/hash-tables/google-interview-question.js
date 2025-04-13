//Google question - First Recurring Character
//Given an array = [2,5,1,2,3,6,1,2,4]
//It should return 2

//Given ana array = [2,1,1,2,3,5,1,2,4]
//It should return 1

//Given an array = [2,3,4,5]
//It should return undefined

//* Bu çözüm O(n) zaman karmaşıklığında çalışır O(n) alan kullanır.Çözümde dizinin her elemanı bir hash tablosunda key olarak kaydedilir ve value değerleri true olarak kaydedilir.Daha önce bu key değerine sahip bir veri eklenmişse ilk tekrar edeni bulmuş oluruz.
const findFirstReccuring = (arr) => {
  const hashTable = {};
  for (let key of arr) {
    if (hashTable[key]) {
      return key;
    }
    hashTable[key] = true;
  }
  return undefined;
};

const findFirstReccuring2 = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
};

console.log(findFirstReccuring([2, 5, 1, 2, 3, 6, 1, 2, 4]));
console.log(findFirstReccuring([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(findFirstReccuring([2, 3, 4, 5]));

console.log(findFirstReccuring2([2, 5, 1, 2, 3, 6, 1, 2, 4]));
console.log(findFirstReccuring2([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(findFirstReccuring2([2, 3, 4, 5]));
