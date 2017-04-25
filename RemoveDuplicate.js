const removeDuplicates = (arr) => {
  const exists = {};
  const outArr = [];
  let elm;

  for (let i = 0; i < arr.length; i++) {
    elm = arr[i];
    if(!exists[elm]) {
      outArr.push(elm);
      exists[elm] = true;
    }
  }
  return outArr;
}

console.log(removeDuplicates([2, 3, 3, 4, 5, 6, 6, 46, 9]));