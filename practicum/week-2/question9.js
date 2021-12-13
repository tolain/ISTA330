/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
  let s = new Array(shuffleIndices.length);

    const inputSplit = input.split("");
    inputSplit.forEach((letter, index) => {
        s[shuffleIndices[index]] = letter;
    });

    return s.join("");
};
