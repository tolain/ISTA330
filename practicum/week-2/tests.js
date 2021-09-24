<<<<<<< HEAD
var largestGroupsCount = function(n) {
	let digit_sum = {};
	for (let i = 1; i <= n; i++) {
		let sum = 0;
		let num = i;
		while (num > 0) {
			sum += num % 10;
			num = Math.floor(num / 10);
	}
	if (!digit_sum[sum]) {
		digit_sum[sum] = [];
	}
		digit_sum[sum].push(i);
	}
	let max_count = 0;
	for (let n in digit_sum) {
		if (digit_sum[n].length > max_count) {
			max_count = digit_sum[n].length;
	}
	let result = 0;
	for (let n in digit_sum) {
		if (digit_sum[n].length === max_count) {
			++result;
		}
	}
	return result;{
        console.log(largestGroupsCount(11))
=======

const q1 = [{
    input: [[5, 6, 1]],
    output: [5, 11, 12]
},
{
    input: [[43, -3, -39]],
    output: [43, 40, 1]
}];

const q2 = [{
    input: [[5, 6, 1], 6],
    output: true
},
{
    input: [[3, 5, 2], 6],
    output: false
}];

const q3 = [{
    input: [[5, 6, 1]],
    output: 1
},
{
    input: [[3, 5, 2, 8]],
    output: 4
}];

const q4 = [{
    input: ['asDf', 'dsssaaFa'],
    output: 6
},
{
    input: ['te', 'TTTER'],
    output: 0
}];

const q5 = [{
    input: [12],
    output: 3
},
{
    input: [19],
    output: 5
}];

const q6 = [{
    input: [[1, 2, 2, 3, 4, 7, 9 ]],
    output: 3
},
{
    input: [[1, 2, 3, 4, 5, 6, 7, 8]],
    output: 4.5
}];

const q7 = [{
    input: [[4, 3, 8, 0]],
    output: 4
},
{
    input: [[1, 3, 4, 2, 6, 8, 5, 7]],
    output: 16
}];

const q8 = [{
    input: [[23, 44, 12, 4]],
    output: [1, 0, 1, 2]
},
{
    input: [[1, 3, 4, 2, 6, 8, 5, 7]],
    output: [4, 3, 2, 3, 1, 0, 2, 1]
}];

const q9 = [{
    input: ['llheo', [2, 3, 0, 1, 4]],
    output: 'hello'
},
{
    input: ['emelwco', [1, 5, 6, 2, 0, 3, 4]],
    output: 'welcome'
}];

const q10 = [{
    input: [472],
    output: 5
},
{
    input: [87034],
    output: 8
}];

const q11 = [{
    input: [[2, 5, 4, 2]],
    output: [5, 5, 2, 2, 2, 2]
},
{
    input: [[0, 8, 1, 3, 2, 7]],
    output: [3, 7, 7]
}];

const q12 = [{
    input: ['abaabbabab'],
    output: 4
},
{
    input: ['aaababbb'],
    output: 2
}];

let result = [{
    functionName: 'runningSum',
    functionCode: runningSum,
    trials: [],
    cases: q1
},
{
    functionName: 'canGetEqualCookies',
    functionCode: canGetEqualCookies,
    trials: [],
    cases: q2
},
{
    functionName: 'numberOfOrderedPairs',
    functionCode: numberOfOrderedPairs,
    trials: [],
    cases: q3
},
{
    functionName: 'howManyCommon',
    functionCode: howManyCommon,
    trials: [],
    cases: q4
},
{
    functionName: 'minimalReduction',
    functionCode: minimalReduction,
    trials: [],
    cases: q5
},
{
    functionName: 'median',
    functionCode: median,
    trials: [],
    cases: q6
},
{
    functionName: 'maxSumOfMins',
    functionCode: maxSumOfMins,
    trials: [],
    cases: q7
},
{
    functionName: 'biggerAndEven',
    functionCode: biggerAndEven,
    trials: [],
    cases: q8
},
{
    functionName: 'suffleString',
    functionCode: suffleString,
    trials: [],
    cases: q9
},
{
    functionName: 'maxMinusMin',
    functionCode: maxMinusMin,
    trials: [],
    cases: q10
},
{
    functionName: 'decode',
    functionCode: decode,
    trials: [],
    cases: q11
},
{
    functionName: 'maxBalanceNumber',
    functionCode: maxBalanceNumber,
    trials: [],
    cases: q12
>>>>>>> 36c0fed2e2f0e687d955e1bd6391f2b256c304ec
}
