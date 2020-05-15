function findWaterLevel(arr){
  
    const n = arr.length;
     var waterCollected = 0;
  
    for(var i =0; i < n-1;i++){
       var left = arr[i];
      var right = arr[i];
      for(var j =0;j < i;j++ ){
         left = Math.max(left, arr[j]);
        
      }
        for(var c =i + 1; c < n;c++ ){
        right = Math.max(right, arr[c]);
      }
      waterCollected = waterCollected + (Math.min(left, right) - arr[i]);
    }
  return waterCollected;
}


console.log(findWaterLevel([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));