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
  //console.log(encoded);
  return encoded;
}

function ultraEncoding(str){
  var middleLetter = str.charAt(Math.floor(str.length-1)/2);
  //console.log(middleLetter);
  newStr = middleLetter + letterCipher(str);
  //console.log(newStr);
  return newStr;
}

function bonusExercise(str){
  var newStr = ultraEncoding(str);
  var finalStr = reverseLetters(newStr);
  console.log(finalStr);
  return finalStr;
}

$(document).ready(function(){

  var userSentence = prompt("Enter sentence");
  console.log(userSentence);

  //letterCipher(userSentence);  
  bonusExercise(userSentence);

  $("#originalText").click(function() {
    $("#revealedText").empty();
    $("#revealedText").append(userSentence);
  });

  $("#encodedText").click(function() {
    $("#revealedText").empty();
    $("#revealedText").append(bonusExercise(userSentence));
  });
});