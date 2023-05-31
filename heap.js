// insert heap time  O(log n)
// insert heap space O(1)
// remove root element time O(logn)
// remove root element space O(1)

// build a heap from a given array time O(n)
// build a heap from a given array space O(n)

// A Heap is a specialized tree-based data structure that satisfies the heap property,
// The Heap is divided into two types: Max Heap and Min Heap.

// In a Max Heap, each parent node is greater than or equal to its children, and the root
// node has the largest value in the Heap. In a Min Heap, each parent node is less than or 
// equal to its children, and the root node has the smallest value in the Heap.

//The most common use of Heaps is to implement priority queues, where elements are removed in order of priority.



const parent = (i) => Math.floor((i - 1) / 2);
const lChild = (i) => 2 * i + 1;
const rChild = (i) => 2 * i + 2;

const heapify = (index, heap, size) => {
    let largest = index;
    let l = lChild(index)
    let r = rChild(index)

    if (l < size && heap[largest] > heap[l]) largest = l;
    if (r < size && heap[largest] > heap[r]) largest = r;

    if (largest != index) {
        let temp = heap[largest]
        heap[largest] = heap[index]
        heap[index] = temp
        heapify(largest, heap, size)
    }

}


class minHeap {
    constructor() {
        this.heap = []
        this.size = 0
    }

    insert(value) {
        let i = this.size
        this.heap[i] = value
        this.size += 1

        while (i > 0 && this.heap[parent(i)] > this.heap[i]) {

            [this.heap[parent(i)], this.heap[i]] = [this.heap[i], this.heap[parent(i)]]
            i = parent(i);
        }
    }

    remove() {
        // const root = this.heap[0];
        this.heap[0] = this.heap[this.size - 1];

        heapify(0, this.heap, this.size);

        this.heap.pop();
        this.size -= 1;

        // return root;
    }

    sort() {
        const sortedArray = [];

        while (this.heap.length > 0) {

            let minElement = this.heap[0];
            sortedArray.push(minElement);

            this.heap[0] = this.heap[this.heap.length - 1]
            heapify(0, this.heap, this.heap.length);
            this.heap.pop()
        }

        return sortedArray;
    }
    display() {

        console.log(this.heap)
    }
}

const obj = new minHeap()

obj.insert(10)
obj.insert(8)
obj.insert(6)
obj.insert(9)
obj.insert(11)
obj.insert(12)


obj.display()

obj.remove()

obj.display()
