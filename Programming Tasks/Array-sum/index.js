function sumArray(a){
    let total = 0;
    for (const i in a) {
       total += a[i];
    }
    return total;
    }
    
    console.log(sumArray([2,1,3]));