// node clss
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// linked list clss
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }

  arrayToLinkedList(array) {
    let temp;
    for (let i = 0; i < array.length; i++) {
      const node = new Node(array[i]);

      if (!this.head) {
        this.head = node;
        temp = node;
      } else {
        temp.next = node;
        temp = node;
      }
    }
    return this.head;
  }

  onEnd(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  onFirst(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return null;
    } else if (index === 0) {
      this.onFirst(value);
    } else if (index > 0) {
      const node = new Node(value);
      let temp = this.head;
      for (let i = 0; i < index - 1; i++) {
        temp = temp.next;
      }
      node.next = temp.next;
      temp.next = node;
      this.size++;
    }
  }

  onNext(data, value) {
    const node = new Node(value);

    let temp = this.head;

    while (temp.value !== data) {
      temp = temp.next;
    }
    node.next = temp.next;
    temp.next = node;
  }
  onPrev(data, value) {
    const node = new Node(value);

    let temp = this.head;

    while (temp.next.value !== data) {
      temp = temp.next;
    }
    node.next = temp.next;
    temp.next = node;
  }

  remove(index) {
    if (index < 0 || index > this.size) {
      return;
    } else if (index === 0) {
      this.head = this.head.next;
      this.size--;
    } else {
      let temp = this.head;
      for (let i = 0; i > index - 1; i++) {
        temp = temp.next;
      }
      let removedNode = temp.next;
      temp.next = removedNode.next;

      this.size--;
    }
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    } else if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
    } else {
      let temp = this.head;
      while (temp.next && temp.next.value !== value) {
        temp = temp.next;
      }
      if (temp.next) {
        let removedNode = temp.next;
        temp.next = removedNode.next;
        this.size--;
      }
      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return false;
    } else {
      let i = 0;
      let temp = this.head;
      while (temp) {
        if (temp.value === value) {
          return i;
        }
        temp = temp.next;
        i++;
      }
      return false;
    }
  }

  searchIndex(index){
    if (this.isEmpty()) {
      return false
    }else{
      let temp = this.head
      for (let i = 0; i < index; i++) {
         temp = temp.next
      }
       if (temp.value) {
         return temp.value
       } 
      return false
    }
  }

  reverse() {
    let prev = null;
  let current = head;

  while (current !== null) {
    const next = current.next; 
    current.next = prev; 

    prev = current; 
    current = next;
  }

  return prev; 
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let temp = this.head;
      
      while (temp) {
        console.log(temp.value);
        temp = temp.next;
      }
      
    }
  }

  findLargest() {
    let temp = this.head;
    let large = 0;
    while (temp) {
      if (temp.value < temp.next.value) {
        large = temp.value;
      }
      temp = temp.next;
    }
    return large;
  }

  isPalidrome() {
    let values = [];
    let temp = this.head;
    while (temp) {
      values[values.length] = temp.value;
      temp = temp.next;
    }
    let length = values.length;
    for (let i = 0; i < length / 2; i++) {
      if (values[i] !== values[length - 1 - i]) {
        return false;
      }
    }

    return true;
  }


}

const list = new LinkedList();

list.onFirst(1);
list.onFirst(2);
list.onFirst(3);
list.onFirst(4);
console.log(list.searchIndex(1))
