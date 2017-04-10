function mySet() {
  // array which will hold the set
  let collection = [];
  // this method checks for the presence of an element and return a boolean
  this.has = (element) => {
    return (collection.indexOf(element) !== -1);
  };
  // this method returns all the values in the set
  this.values = () => {
    return collection;
  };
  // this method adds an element to the set
  this.add = (element) => {
    if(!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };
  // this method removes an element from a set
  this.remove = (element) => {
    if(this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };
  // this method returns the size of the collection
  this.size = () => {
    return collection.length;
  }
  // this method will return the union of two sets
  this.union = (otherSet) => {
    const unionSet = new mySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    firstSet.forEach((e) => {
      unionSet.add(e);
    });
    secondSet.forEach((e) => {
      unionSet.add(e);
    });
    return unionSet;
  };
  // this method returns an intersection of two sets
  this.intersection = (otherSet) => {
    const intersectionSet = new mySet();
    const firstSet = this.values();
    firstSet.forEach((e) => {
      if(otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };
  // this method returns the difference of two sets
  this.difference = (otherSet) => {
    const differenceSet = new mySet();
    const firstSet = this.values();
    firstSet.forEach((e) => {
      if(!otherSet.has(e)) {
        differenceSet.add(e); 
      }
    });
    return differenceSet;
  };
  // this method tests if the set is a subset of a different set
  this.subset = (otherSet) => {
    const firstSet = this.values();
    return firstSet.every((value) => {
      return otherSet.has(value);
    });
  };
}



const setA = new mySet();
const setB = new mySet();
const setC = new mySet();
setA.add("b");
setB.add("a");
setB.add("c");
setB.add("o");
setB.add("n");
setC.add("bacon");
console.log(setA.union(setB).values());
console.log(setC.values());
console.log(setA.difference(setB).values());
setC.add("b");
setC.add("a");
setC.add("c");
setC.add("o");
setC.add("n");
console.log(setB.subset(setC));
console.log(setC.values());
console.log(setC.difference(setB).values());
console.log(setC.remove("bacon"));
console.log(setC.difference(setB).values());
console.log(setB.intersection(setA).values());
console.log(setC.intersection(setB).values());
console.log(setA.remove("a"));
console.log(setA.has("a"));
