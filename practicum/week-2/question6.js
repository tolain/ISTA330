/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
  var midian = Math.floor(input.length / 2),
    number = [...input].sort((a, b) => a - b);
  return input.length % 2 !== 0 ? number[midian] : (number[midian - 1] + number[midian]) / 2;
};
