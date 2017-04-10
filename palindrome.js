let letters = []; //stack
// let word = 'racecar';
let word = 'bacon';
let rword = '';

//insert letters in stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + ' is a palindrome');
}
else {
  console.log(word + ' is not a palindrome.')
;}
