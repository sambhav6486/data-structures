class Stack {
    constructor (){
        this.a = []
        this.count = 0;
    }
    // to add value to array
    push(...args){
        this.a.push(...args) ;
        // console.log([value, this.count])
        this.count = this.a.length
        return this.a.length
    }
    // to remove value
    pop(){
        if(this.count == 0){
            return null
        }else{
            let b = this.a.splice(this.count-1, 1)
            this.count--
            return b;
        }

    }
    // size of array
    size(){
        return this.count;
    }
    // empty or not
    isEmpty(){
        if(this.count == 0){
            return false;
        }else{
            return true;
        }
    }
    //clear
    clear(){
        this.a = []
        this.count = 0;
        return this.size();
    }
}




let stack = new Stack();
console.log(stack.push(1,2,3,4))
console.log(stack.pop())
console.log(stack.a)
console.log(stack.count)