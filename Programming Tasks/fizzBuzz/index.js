function fizzBuzz() {
    for (let i = 0; i < 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log(i,"FIZZBUZZ");
      }
      if (i % 3 === 0) {
          console.log(i,"FIZZ");
      }
      if (i % 5 === 0) {
          console.log(i,"BUZZ");
      }
      else{
          console.log(i);
      }
    }
  }
  fizzBuzz();
  