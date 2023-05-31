function array(...values) {
    return values;
  }
  
  function length(array) {
    return array.length;
  }
  
  function element(array, n) {
    return array[n-1];
  }

 console.log( array(1,2,3,4))
 console.log( length(array(1,2,3,4)))
 console.log(element(array(1,2,3,4),3))