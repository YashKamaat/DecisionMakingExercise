// Decision Making Exercise 
// 1a
let randomNum = Math.floor(Math.random() * 5 + 1);
console.log(randomNum);
// ================
// 1b
// I wanted to try if if instead of if else if, it let's both be executed instead of just one statement
if (randomNum >= 4){
    console.log("Equal to or more than 4");
  }
  if (randomNum >= 2){
    console.log("Equal to or more than 2");
  } else {
    console.log("Equal to 1");
  }
// ================
// 1c
if (randomNum != 3){
    console.log("Not equal to 3");
  }
// ================
// 1d
if (randomNum != 3 && randomNum != 5) {
    // if (randomNum != (3&&5)){
console.log("Not equal to 3 AND Not equal to 5");
}
// ================
// 1e
if (randomNum === (2 || 4)){
    console.log("Equal to 2 OR equal to 4");
}
// ================
// Bonus
// 2
// ================
// 3
// ================