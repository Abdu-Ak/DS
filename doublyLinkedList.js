// class Node {
//     constructor(value) {
//       this.value = value;
//       this.prev = null;
//       this.next = null;
//     }
//   }
  
//   class DoublyLinkedList {
//     constructor() {
//       this.head = null;
//       this.tail = null;
//       this.size = 0;
//     }
  
//     isEmpty() {
//       return this.size === 0;
//     }
  
//     getSize() {
//       return this.size;
//     }
  
//     prepend(value) {
//       const node = new Node(value);
//       if (this.isEmpty()) {
//         this.head = node;
//         this.tail = node;
//       } else {
//         node.next = this.head;
//         this.head.prev = node;
//         this.head = node;
//       }
//       this.size++;
//     }
  
//     append(value) {
//       const node = new Node(value);
//       if (this.isEmpty()) {
//         this.head = node;
//         this.tail = node;
//       } else {
//         this.tail.next = node;
//         node.prev = this.tail;
//         this.tail = node;
//       }
//       this.size++;
//     }
  
//     removeFromFront() {
//       if (this.isEmpty()) {
//         return null;
//       }
//       const value = this.head.value;
//       this.head = this.head.next;
//       this.size--;
//       return value;
//     }
  
//     removeFromEnd() {
//       if (this.isEmpty()) {
//         return null;
//       }
//       const value = this.tail.value;
//       if (this.size === 1) {
//         this.head = null;
//         this.tail = null;
//       } else {
//         this.tail = this.tail.prev;
//         this.tail.next = null;
//       }
//       this.size--;
//       return value;
//     }
  
//     print() {
//       if (this.isEmpty()) {
//         console.log("List is empty");
//       } else {
//         let curr = this.head;
//         let list = "";
//         while (curr) {
//           list += `${curr.value}<->`;
//           curr = curr.next;
//         }
//         console.log(list);
//       }
//     }
  
//     printReverse() {
//       if (this.isEmpty()) {
//         console.log("List is empty");
//       } else {
//         let curr = this.tail;
//         let list = "";
//         while (curr) {
//           list += `${curr.value}<->`;
//           curr = curr.prev;
//         }
//         console.log(list);
//       }
//     }
//   }
  
//   const list = new DoublyLinkedList();

class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
  }
}

class DLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
  }

  addNodeEnding(data) {
      const newNode = new Node(data);
      if (this.head === null) {
          this.head = newNode;
      } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
      }
      this.tail = newNode;
  }

  addNodeBeginning(data) {
      const newNode = new Node(data);
      if (this.head === null) {
          this.head = newNode;
      } else {
          newNode.next = this.head;
          this.head.prev = newNode;
          this.head = newNode;
      }
  }

  addNode(data) {
      const newNode = new Node(data);
      if (this.head === null) {
          this.head = newNode;
      } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
      }
      this.tail = newNode;
  }

  delete(data) {
      let temp = this.head;
      let pre = null;
      if (temp !== null && temp.data === data) {
          this.head = temp.next;
          this.head.prev = null;
         
          return;
      }
      while (temp !== null) {
        if (temp.data === data) {
          pre.next = temp.next;
          const n = temp.next;
          n.prev = pre;
        }
          pre = temp;
          temp = temp.next;
      }
      if (temp === null) {
          return;
      }
      if (temp === this.tail) {
          pre.next = null;
          this.tail = pre;
          return;
      }
     
  }




  insertAfter(nextTo, data) {
      const newNode = new Node(data);
      let temp = this.head;
      while (temp !== null && temp.data !== nextTo) {
          temp = temp.next;
      }
      if (temp === null) {
          return;
      }
      if (temp === this.tail) {
          this.tail.next = newNode;
          newNode.next = null;
          newNode.prev = this.tail;
          this.tail = newNode;
          return;
      }
      newNode.next = temp.next;
      temp.next = newNode;
      newNode.prev = temp;
  }

  insertBefore(before, data) {
      const newNode = new Node(data);
      let temp = this.head;
      let prev = null;
      if (temp !== null && temp.data === before) {
          newNode.next = temp;
          this.head = newNode;
          return;
      }
      while (temp !== null && temp.data !== before) {
        
          prev = temp;
          temp = temp.next;
      }
      if (temp === null) {
          return;
      }
      newNode.next = temp;
      newNode.prev = temp.prev;
      prev.next = newNode;
  }

  display() {
      let temp = this.head;
      while (temp !== null) {
          console.log(temp.data);
          temp = temp.next;
      }
  }

  displayReverse() {
      let temp = this.tail;
      while (temp !== null) {
          console.log(temp.data);
          temp = temp.prev;
      }
  }
}



const list = new DLinkedList();
