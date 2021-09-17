/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
	let sum_of_digit = {};
	for (let i = 1; i <= n; i++) {
		let sum = 0;
		let number = i;
		while (number > 0) {
			sum += number % 10;
			number = Math.floor(number / 10);
		}
		if (!sum_of_digit[sum]) {
		sum_of_digit[sum] = [];
		}
		sum_of_digit[sum].push(i);
	}
	let max = 0;
	for (let n in sum_of_digit) {
		if (sum_of_digit[n].length > max) {
			max = sum_of_digit[n].length;
		}
	}
	let res = 0;
	for (let n in sum_of_digit) {
		if (sum_of_digit[n].length === max) {
			res++;
		}
	}
	return res;
}
