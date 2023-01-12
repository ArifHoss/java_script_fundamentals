// let word1 = document.getElementById("value1");
// let word2 = document.getElementById("value2");
// let word3 = document.getElementById("value3");
//
//
//
//
//
// function check (str){
//
//
//   let result = "";
//
//   for(let char of str){
//     if(char >= "A" && char <= "Z"){
//       result += char;
//     }
//   }
//
//
//   for(let char of str){
//     if(char >= "a" && char <= "z"){
//       result += char;
//     }
//   }
//
//   for(let char of str){
//     if(char >= "0" && char <= "9"){
//       result += char;
//     }
//   }
//   return result;
// }
//
//
// check(word1)
// check(word2)
// check(word3)
//
// console.log(check(word1))
//
// console.log(check(word2))
//
// console.log(check(word3))
//
//





function reorder(string) {

  let result = "";

  let upperCase = "";
  let lowerCase = "";
  let number = "";

  for (let char of string) {

    if (char >= "A" && char <= "Z") {
      upperCase += char;

    }else if (char >= "a" && char <= "z") {
      lowerCase += char;

    }else if (char >= "0" && char <= "9") {
      number += char;
    }

  }
  return result = upperCase + lowerCase + number;

}

console.log(reorder("hA2p4Py"));
console.log(reorder("m11oveMENT"));
console.log(reorder("s9hOrt4CAKE"));

