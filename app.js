class Hashtable{
   constructor(size){
      this.table = new Array(size)
      this.size =size

   }
     
   hash(key){
     let total = 0
     for (let i = 0; i < key.length; i++) {
         total += key.charCodeAt(i)
     }
     return total % this.size
   }

   set(key , value){
    const  index = this.hash(key)
    const bucket = this.table[index]
    if (!bucket) {
        this.table[index] =[[key , value] ]
    } else {
        const sameKey = bucket.find(item => item[0] === key )
        if (sameKey) {
            sameKey[1] = value 
        } else {
            bucket.push([key, value])
        }
    }
   }
   
   get(key){
    const index = this.hash(key)
    const bucket = this.table[index]
     
    if (bucket) {
         const sameKey = bucket.find(item => item[0]  === key)
         if (sameKey) {
            return sameKey[1]
         }
    } 
     return undefined
   }
}

const table = new Hashtable(30)

table.set("name","abdu")
table.set("age",20)

console.log(table.get("age"));