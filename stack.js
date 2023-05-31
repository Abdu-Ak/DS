class Stack { 

    constructor() {
        this.items = []
    }

     push(element){
        this.items.push(element)
     }

     pop(element){
        return this.items.pop(element)
     }

     peek(){
        return this.items[this.items.length - 1 ]
     }

     isEmpty(){
        return this.items.length === 0 
     }

     size(){
        return this.items.length
     }
      
     print(){
        console.log(this.items.toString());
     }
     
     delete(){
      let mid =  Math.floor(this.items.length/2) 
       delete  this.items[mid]
      
    }    
  
}

const stack = new Stack()

stack.push(20)
stack.push(10)
stack.push(30)

stack.delete()

stack.print()

