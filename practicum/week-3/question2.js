
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

var largestSubarray = function(input) {
  let highest = 0;
  let sub = 0;
    input.forEach(function (item) {
        sub += item; 
    highest = Math.max(highest, sub); 
    if (sub < 0)
    {
        sub = 0; 
    }
    
})
  return highest;

}

