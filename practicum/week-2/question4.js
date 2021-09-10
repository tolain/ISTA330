/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
   var c = 0;

    var b_array = B.split('');
    for(let i=0;i<b_array.length;i++){
        if(A.indexOf(b_array[i])>-1){
            c+=1;
        }

    }
    return count;
};
