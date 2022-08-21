function sum() {
    let a = parseInt(document.getElementById("first").value);
    let b = parseInt(document.getElementById("second").value);
    if (a >= 1 && b <= 1000) {
      let sum = a + b;
      document.getElementById("answer").value = sum;
    }
  }