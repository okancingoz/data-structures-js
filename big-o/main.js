const nemo = ["nemo"];
const everyone = ["a", "b", "c", "d", "e", "f", "g"];
const largeArr = new Array(10).fill("nemo");
const findNemo = (array) => {
  const t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
  const t1 = performance.now();
  console.log(t1 - t0, "ms");
};

findNemo(largeArr); //*O(n) -> Linear Time

const boxes = [0, 1, 2, 3, 4, 5];

const logFirstTwoBoxes = (boxes) => {
  console.log(boxes[0]);
  console.log(boxes[1]);
};

logFirstTwoBoxes(boxes); //*O(1) -> Constant Time

function funChallange(input) {
  let a = 10; //*O(1)
  a = 50 + 3; //*O(1)

  for (let i = 0; i < input.length; i++) {
    //*O(n)
    anotherFunction(); //*O(n)
    let stranger = true; //*O(n)
    a++; //*O(n)
  }
  return a; //*O(1)
}

//*Big O(3+4n) = Big O(n)

const anotherFunChallange = (input) => {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)

  for (let i = 0; i < input; i++) {
    // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }

  for (let j = 0; j < input; j++) {
    // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }

  let whoAmI = "I don't know"; // O(1)
};

// Big O = 4+n = O(n)

anotherFunChallange(3);
