function reverseArray(a) {
    // Write your code here
    let rev = new Array;
    for(let i = a.length-1; i >= 0; i--) {
        rev.push(a[i]);
    }
    return rev;

}