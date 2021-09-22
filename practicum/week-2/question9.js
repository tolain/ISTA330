/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
<<<<<<< HEAD
  const res = [];
=======
  var res = [];
>>>>>>> 42b1682d505cbc2dcf13ccad234df560baa332d4
  for (let i = 0; i < shuffleIndices.length; i++){
    let result = shuffleIndices[i];
    res[result] = input.charAt(i);
  }
  return res.join("");

};
console.log(suffleString('emelwco', [1,5,6,2,0,3,4]))
