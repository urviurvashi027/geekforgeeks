function largestNumberFromArray(arr){
    arr.sort(compare);
    // console.log(arr);
    var largestNumber = arr.join('')
    return largestNumber;
    }
    
    
    function compare(a,b){
     var aStirngify = a.toString();
     var bStringify = b.toString();
    
    var ab = aStirngify + bStringify;
    var ba = bStringify + aStirngify;
    
    return (ab > ba) ? -1:1
    }
    
    console.log(compare(40,3));
    console.log(largestNumberFromArray([3, 30, 34, 5, 9]))
    
    
    function getLargest(array) {
        return array
            .map(String)
            .sort((a, b) => (b + a) - (a + b))
            .join('');
    }
    
    console.log(getLargest([3, 30, 34, 5, 9]));