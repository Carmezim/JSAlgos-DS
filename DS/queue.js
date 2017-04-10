// FIFO

function Queue () {
  collection = [];
  this.print = () => {
    console.log(collection);
  };
  this.enqueue = (element) => {
    collection.push(element);
  };
  this.dequeue = (element) => {
    return collection.shift();
  };
  this.front = () => {
    return collection[0]
  };
  this.size = () => {
    return collection.length;
  };
  this.isEmpty = () => {
    return (collection.length === 0);
  };

}

const q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.print();
q.dequeue();
q.front();
q.print();
q.dequeue();
q.print();
