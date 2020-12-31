class Stack {
    constructor (){
        this.a = []
        this.count = 0;
    }
    // to add value to array
    push(value){
        this.a[this.count] = value ;
        console.log([value, this.count])
        this.count++
        return this.count
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
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.a)
stack.pop();
console.log(stack.a)
console.log(stack.pop());
console.log(stack.a)
console.log(stack.clear())
