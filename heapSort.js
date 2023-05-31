const parent= (i)=>Math.floor((i-1)/2)
const lChild = (i)=> 2*i+1
const rChild = (i)=> 2*i+2

function buildHeap(array) {
    let heap = []
    for (let i = 0; i < array.length; i++) {
        heap.push(array[i])

        let currentIndex = heap.length - 1

        while (currentIndex) {
            let parentIndex = parent(currentIndex)

            if (heap[parentIndex] > heap[currentIndex]) {
                let temp = heap[currentIndex]
                heap[currentIndex] = heap[parentIndex]
                heap[parentIndex] = temp

                currentIndex = parentIndex
            } else {
                break
            }
        }
    }

    return heap
}

function heapify(index, heap, size) {
    let largest = index
    let l = lChild(index)
    let r = rChild(index)

    if (l < size && heap[largest] > heap[l]) largest = l
    if (r < size && heap[largest] > heap[r]) largest = r

    if (largest !== index) {
        let temp = heap[largest]
        heap[largest] = heap[index]
        heap[index] = temp
        heapify(largest, heap, size)
    }

}

function heapSort(array) {
    const heap = buildHeap(array);
    const sortedArray = [];

    while (heap.length > 0) {
        let minElement = heap[0];
        sortedArray.push(minElement);

        heap[0] = heap[heap.length - 1]
        heapify(0, heap, heap.length);

        heap.pop()
    }

    return sortedArray;
}

console.log(heapSort([21, 43, 12, 4, 5, 7, 19]))