function PriorityQueue() {
  const collection = [];
  this.printCollection = () => {
    console.log(collection);
  };
  this.enqueue = (element) => {
    if (this.isEmpty()) {
      collection.push(element);
    }
    else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) { // checking priority
          collection.splice(i, 0, element);
          added = true;
          break;
        }   
      }
       if (!added) {
        collection.push(element);
      }
    }
  }
  this.dequeue = () => {
    const value = collection.shift();
    return value[0];
  };
  this.front = () => {
    return collection[0];
  };
  this.size = () => {
    return collection.length;
  };
  this.isEmpty = () => {
    return (collection.length === 0);
  };
}

const pq = new PriorityQueue();
pq.enqueue(['Bacon', 4]);
pq.enqueue(['Eggs', 3]);
pq.enqueue(['Waffles', 2]);
pq.printCollection();
pq.enqueue(['Coffee', 4]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();
