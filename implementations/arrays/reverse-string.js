//Create a function that reverses a string:
//'Hi My name is Okan' should be:
//'nakO si eman iH'

function reverse(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }

  //let arr = str.split(""); //string to array
  let reversedStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr.push(str[i]);
  }
  reversedStr = reversedStr.join(""); //array to string
  return reversedStr;
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

const reverse3 = (str) => str.split("").reverse().join("");

console.log(reverse("Hi my name is Okan"));
console.log(reverse2("Hi my name is Zübeyde"));
console.log(reverse3("I love you"));
