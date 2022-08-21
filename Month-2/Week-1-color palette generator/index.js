const hex = document.querySelector(".hex");

let body = document.querySelector("body");
const text = document.getElementById("text");
const color = document.querySelector(".color");

const numArr = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f"
];

hex.addEventListener("click", () => {
  let str = "";
  for (let i = 0; i < 6; i++) {
    str += numArr[Math.floor(Math.random() * numArr.length)];
  }
  document.body.style.background = `#${str}`;
  text.innerHTML = `#${str}`;
  color.style.background = `#${str}`;
});

