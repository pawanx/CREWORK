function rotateLeft(d, arr) {
    for( let i = 0 ; i < d ; i++ ) {
          const removedElement =  arr.shift();
           arr.push(removedElement);
      }
      return arr;
  
  }