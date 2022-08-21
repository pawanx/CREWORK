let numbers =[1000,2145,1222,3695,1001];
let total = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
},0)

console.log(total);