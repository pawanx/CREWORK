function compareTriplets(a, b) {
    let result = [];
    let aScore = 0;
    let bScore = 0;
  
    for (let i = 0; i < 3; i++) {
      if (a[i] > b[i]) {
        aScore++;
      }
      if (b[i] > a[i]) {
        bScore++;
      }
    }
  
    result[0] = aScore;
    result[1] = bScore;
    return result;
  }
  
  console.log(compareTriplets([1, 2, 3], [3, 2, 1]));