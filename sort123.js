//Given an array of size N containing 0s, 1s, and 2s; sort the array in ascending order.

//Input:
//First line of input contains number of testcases T. 
//For each testcase, there will be two lines, first of which will contain N. 
//The second lines contains the elements of the array.


function sort123(originalArr) {
    if (originalArr.length <= 1) {
       return originalArr;
       } else {
             var leftArr = [];              
             var rightArr = [];
             var newArr = [];
             var pivot = originalArr.pop();      //  Take a pivot value
             var length = originalArr.length;
             for (var i = 0; i < length; i++) {
                if (originalArr[i] <= pivot) {    // using pivot value start comparing
                   leftArr.push(originalArr[i]);      
             } else {
                     rightArr.push(originalArr[i]);
           }
         }
       return newArr.concat(sort123(leftArr), pivot, sort123(rightArr)); // array will be                                                                            //returned untill sorting occurs
    }
 }

console.log(sort123([0, 2, 0, 2, 1]));