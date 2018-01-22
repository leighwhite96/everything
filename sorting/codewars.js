function moveVowel(input) {
  for(var i = 0; i< input.length; i++){
    if(input.charAt(i) == "a" || input.charAt(i) == "e" || input.charAt(i) == "i" || input.charAt(i) == "o" || input.charAt(i) == "u"){
      input.replace(input.charAt(i),"");
      console.log(input);
      input.padEnd(input.length,input.charAt(i));
      console.log(input);
    }
  }
  return input;
}

// look through every letter in the word
//if the letter is a vowel (a,e,i,o,u)
      //1.store it in a variable
      //2.remove from string
      //3.put it at end of string
