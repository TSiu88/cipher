function firstLastCapital(sentence){
  var firstLetter = sentence.charAt(0).toUpperCase();
  var lastLetter = sentence.charAt(sentence.length -1).toUpperCase();
  var newString = firstLetter + lastLetter;
  return newString;
}

function reverseLetters(string){
  var arrayedString = string.split("");
  var reversed = arrayedString.reverse();
  var joinedString = reversed.join("");
  return joinedString;
}

function letterCipher(sentence){
  var firstLast = firstLastCapital(sentence);
  var lastFirst = reverseLetters(firstLast);
  var encoded = sentence + lastFirst;
  console.log(encoded);
  return encoded;
}

$(document).ready(function(){

  var userSentence = prompt("Enter sentence");
  console.log(userSentence);

  letterCipher(userSentence);  
  
});