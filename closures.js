//-------------------EXERCISE 1-------------------------------
// function makeLoadedDie() {
//   var index = 0;
//   var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];

//   return function() {
//     index += 1;
//     return list[index-1];
//   }
// }

// var rollLoadedDie = makeLoadedDie();

// console.log(rollLoadedDie());
// console.log(rollLoadedDie());
// console.log(rollLoadedDie());
// console.log(rollLoadedDie());
// console.log(rollLoadedDie());
// console.log(rollLoadedDie());
// console.log(rollLoadedDie());
// console.log(rollLoadedDie());
// console.log(rollLoadedDie());
// console.log(rollLoadedDie());

//-------------------EXERCISE 2-------------------------------
var countdownGenerator = function (x) {
  return function(){
    x--;

    if ((x+1) > 0) {
      console.log('T-minus',x+1);
    }
    if ((x+1) === 0) {
      return console.log("Blast Off!");
    }
    if ((x+1) < 0) {
      return console.log("Rockets already gone, bub!");
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown();
countdown();