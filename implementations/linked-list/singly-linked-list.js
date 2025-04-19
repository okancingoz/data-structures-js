//*10-->5-->16

//Simply Linked List
// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  //*Listenin sonuna ekleme = O(1)
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  //*Listenin başına ekleme = O(1)
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  //*İstenilen index'e ekleme = O(n)
  insert(index, value) {
    if (index < 0 || index > this.length) {
      console.log(`❌ Invalid index ${index}. No action taken.`);
      return;
    }
    if (index === 0) {
      return this.prepend(value);
    }
    if (index === this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    let leader = this.traverseToIndex(index - 1);

    newNode.next = leader.next;
    leader.next = newNode;

    this.length++;

    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      console.log(`❌ Invalid index ${index}. No action taken.`);
      return null;
    }

    let removedValue;
    if (index === 0) {
      removedValue = this.head.value;
      this.head = this.head.next;
      this.length--;

      if (this.length === 0) {
        this.tail = null;
      }

      return removedValue;
    }

    const leader = this.traverseToIndex(index);
    const unwantedNode = leader.next;
    removedValue = unwantedNode.value;
    leader.next = unwantedNode.next;

    if (index === this.length - 1) {
      this.tail = leader;
    }

    this.length--;
    return removedValue;
  }
  
  traverseToIndex(index) {
    let iter = 0;
    let currentNode = this.head;
    while (iter < index - 1) {
      currentNode = currentNode.next;
      iter++;
    }
    return currentNode;
  }

  reverse() {
    if (!this.head || !this.head.next) {
      return this;
    }

    let prev = null;
    let current = this.head;

    while (current) {
      const next = current.next; // Bir sonraki node'u kaybet
      current.next = prev; // Yönü ters çevir
      prev = current; // İleri kay
      current = next;
    }

    this.tail = this.head;
    this.head = prev;

    return this;
  }

 

  print() {
    const values = [];
    let currentNode = this.head;
    let index = 0;
    while (currentNode !== null) {
      values.push(`[${index}]: ${currentNode.value}`);
      currentNode = currentNode.next;
      index++;
    }

    console.log(`Length: ${this.length}`);
    console.log(values.join("\n"));
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.prepend(0);
myLinkedList.append(30);
myLinkedList.insert(0, 1);

// myLinkedList.remove(0);
// myLinkedList.remove(4);
myLinkedList.reverse();
myLinkedList.print();
