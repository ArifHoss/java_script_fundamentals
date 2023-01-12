let word1 = document.getElementById("value1");
let word2 = document.getElementById("value2");
let word3 = document.getElementById("value3");





function check (str){


  let result = "";

  for(let char of str){
    if(char >= "A" && char <= "Z"){
      result += char;
    }
  }


  for(let char of str){
    if(char >= "a" && char <= "z"){
      result += char;
    }
  }

  for(let char of str){
    if(char >= "0" && char <= "9"){
      result += char;
    }
  }
  return result;
}


check(word1)
check(word2)
check(word3)

console.log(check(word1))

console.log(check(word2))

console.log(check(word3))

