class Queue{
    constructor(){
        this.a = []

    }
    // to add value in front
    enqueue(value){
        this.a.unshift(value)
    }
    // to remove value from front
    dequeue(){
        return this.a.shift()
    }
    // to get front element
    front(){

            return this.a[0]
    }
    // size of queue
    size(){
        return this.a.length
    }
    // to check if queue is empty
    empty(){
        if(this.a.length === 0){
            return true
        }else{
          return false
        }
    }
}

let queue = new Queue
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()
console.log(queue.size())
console.log(queue.a)