
  // insertion o(log n) when the tree is un balanced
  // removal o(log n)
  // search o (log n)
  
  // tree : non linear data structure that consists of nodes connected by edges
  //        each node in tree can have at most one parent
  //        and the root node have no parent
  
  // binary tree: tree with at most two children for each node except the root
  // ternary tree : tree with at most three children for each node except the root node
  // k aray tree : tree with at most k no of children for each ndoe excdpt the root node
  
  // complete tree: tree in which all levels of the tree are complete except possibly the last level which
  //               should be filled frm left to right
  
  // full tree : A full binary tree is a binary tree in which each node has either two children or no children
  // perfect tree: perfect binary tree is the binary tree in which all the node should have two children

  

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  search(root , value){
      if (!root) {
        return false
      }else{
        if (root.value === value) {
            return true
        }else if (value < root.value) {
            return this.search(root.left , value) 
        }else{
            return this.search(root.right , value)
        }
      }
  }

  preOrder(root ){
    if (root) {
        console.log(root.value);
        this.preOrder(root.left)
        this.preOrder(root.right)
    }
  }
  inOrder(root){
    if (root) {
        this.inOrder(root.left)
        console.log(root.value);
        this.inOrder(root.right)
    }
  }
  postOrder(root){
    if (root) {
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value);
    }
  }

  levelOrder(){
    const queue = []
    queue.push(this.root)
    while (queue.length) {
        let current = queue.shift()
        console.log(current.value);
        if (current.left) {
            queue.push(current.left)
        } 
        
        if(current.right){
            queue.push(current.right)
        }
    }
  }
  
  min(root){
    if (!root.left) {
        return root.value
    }else{
        return this.min(root.left)
    }
  }

  max(root){
    if (!root.right) {
        return root.value
    }else{
        return this.min(root.right)
    }
  }
 
  delete(value){
    this.root = this.deleteNode(this.root , value)
  }

   deleteNode(root , value){
    if (root === null) {
        return root
    }
    if (value < root.value) {
       root.left = this.deleteNode(root.left , value) 
    }else if (value > root.value) {
        root.right = this.deleteNode(root.right ,value)
    }else{
        if (!root.left && !root.right ) {
            return null
        }
        if (!root.left) {
            return root.right
        }else if (!root.right) {
            return root.left
        }
        root.value = this.min(root.right)
        root.right = this.deleteNode(root.right , root.value)
    }
    return root
   }

}
