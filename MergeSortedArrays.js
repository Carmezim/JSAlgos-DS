const mergeSortedArrays = (a, b) => {
  const merged;
  let aElm = a[0];
  let bElm = b[0];
  let i, j;

  if (a.length == 0)
    return b;
  if (b.length == 0)
    return a;

// check if either elemtns exists
  while (aElm || bElm) {
    // existing elements will be merged into new array
    // if aElm is the only element or smaller it is merged
    // else bElm is merged
    if((aElm && !bElm) || aElm < bElm) {
      merged.push(aElm);
      aElm = a[i++];
    }
    else {
      merged.push(bElm);
      bElm = b[j++];
    }
  }
  return merged;
}

console.log(mergeSortedArrays([2, 6, 8, 10], [1, 2, 4, 6, 10, 12]));