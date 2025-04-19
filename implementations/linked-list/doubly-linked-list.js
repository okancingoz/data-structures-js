class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  //*Listenin sonuna ekleme = O(1)
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  //*Listenin başına ekleme = O(1)
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
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
    newNode.prev = leader;
    leader.next.prev = newNode;
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

      if (this.head) {
        this.head.prev = null;
      }

      this.length--;

      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }

      return removedValue;
    }

    const unwantedNode = this.traverseToIndex(index);
    removedValue = unwantedNode.value;

    if (unwantedNode.prev) {
      unwantedNode.prev.next = unwantedNode.next;
    }

    if (unwantedNode.next) {
      unwantedNode.next.prev = unwantedNode.prev;
    }

    if (index === this.length - 1) {
      this.tail = unwantedNode.prev;
    }

    this.length--;
    return removedValue;
  }

  traverseToIndex(index) {
    let iter = 0;
    let currentNode = this.head;
    while (iter < index) {
      currentNode = currentNode.next;
      iter++;
    }
    return currentNode;
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

const myLinkedList = new DoublyLinkedList(10);

myLinkedList.append(5);
myLinkedList.prepend(4);
myLinkedList.insert(1, 13);
myLinkedList.insert(0, 99);
myLinkedList.remove(4);
myLinkedList.remove(0);
myLinkedList.print();
