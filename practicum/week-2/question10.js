/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    let maximum = 0;
    let minimum = 9;
    while (n!==0) {
        let r = n % 10;
        maximum = Math.max(r, maximum);
        minimum = Math.min(r, minimum);
        n = parseInt(n / 10);  
    }
        return maximum-minimum;
};
