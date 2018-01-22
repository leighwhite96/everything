function whoIsTheHero(nAndN){
  var product = Object.values(nAndN).reduce(function(a,b){
    return a*b;
  });
  var count = 0;
  var i = 1;
  while(i <= product){
    if(product%i == 0){
      count++;
    }
    i++;
  }
	var stringCount = count.toString();
	var lengthM1 = stringCount.length - 1;
	var lastDigit = parseInt(stringCount.charAt(lengthM1));
	var unluckyGuy = Object.keys(nAndN)[lastDigit];
  return "Good-bye, Hero " + unluckyGuy + "! We'll take care of your children and your wife."
}
//modulus ten would return the last digit 
