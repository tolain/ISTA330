/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function (n) {
    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [[1]];
    } else {
        let res = [[1], [1, 1]];
        for (let i = 2; i < n; i++) {
            let beg = [1];
            for (let j = 1; j < i; j++) {
                beg[j] = res[i-1][j-1] + res[i-1][j];
            }
            beg[i] = 1;
            res[i] = beg;
        }
        return res;
    }
}
