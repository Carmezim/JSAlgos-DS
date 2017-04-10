const Stack = function() {
  this.count = 0;
  this.storage = {};

  // FILO 
  // Adds value onto the end of the stack
  this.push = (value) => {
    this.storage[this.count] = value;
    console.log('pushing ' + value);
    this.count++;
  }

  // Removes and returns value at the end of stack
  this.pop = () => {
    if (this.count === 0) {
      return underfined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    console.log('popping:');
    return result;
  }

  this.size = () => {
    console.log('Stack size:');
    return this.count;
  }
  
  // Returns value at the end of the stack
  this.peek = () => {
    console.log('Last element');
    return this.storage[this.count-1];
  }

}


let myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push('bacon is good');
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

