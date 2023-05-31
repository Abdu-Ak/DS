// storing string in tree
// A Trie, also known as a Prefix Tree, is a tree-based data structure that stores a set of strings or sequences

// In a Trie, each node in the tree represents a single character of a string. The root node represents
// an empty string, and the children of each node represent the possible characters that can follow the
// character represented by that node. A string is stored in the Trie by traversing the tree from the root
// node to the node representing the last character of the string.

// One of the primary benefits of a Trie is that it can perform string
// search operations quickly, with a time complexity of O(k) where k is
// the length of the string being searched.


class Node {
    constructor() {
      this.children = {}
      this.end = "*"
    }
  }
  
  class Trie {
    constructor() {
      this.root = new Node()
    }
  
    insert(word) {
  
      let currentNode = this.root
      for (let i = 0; i < word.length; i++) {
        const char = word[i]
        if (!currentNode.children[char]) {
          currentNode.children[char] = new Node()
        }
        currentNode = currentNode.children[char]
      }
      currentNode.end = "*"
    }
  
    search(word) {
      let currentNode = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!currentNode.children[char]) {
          return false;
        }
        currentNode = currentNode.children[char];
      }
      return true
    }

    autocomplete(prefix) {
        let current = this.root;
        let words = [];

        for (let i = 0; i < prefix.length; i++) {
            let char = prefix[i];
            if (!current.children[char]) {
                return words;
            }
            current = current.children[char];
        }
        
        function traverse(node, prefix) {
            for (let char in node.children) {
                let childNode = node.children[char];
                let newPrefix = prefix + char;
                if (childNode.end) {
                    words.push(newPrefix);
                }
                traverse(childNode, newPrefix);
            }
        }

        traverse(current, prefix);

        return words;


    }
  }
  
  const obj = new Trie()
  
  obj.insert("shafi")
  obj.insert("hisish")
  obj.insert("shamil")
  
  console.log(obj.autocomplete("sh"))







  
