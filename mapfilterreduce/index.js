let data = [
  {name: "Chris", score: 10},
  {name: "Lily", score: 7},
  {name: "Scott", score: 22},
  {name: "Leigh", score: 0},
  {name: "Ash", score: 12},
  {name: "Victoria", score: 5},
  {name: "Matthew", score: 16}
]
//map
function checkInput(input) {
  if(!input){
    return false;
  }
  if(!Array.isArray(input)) {
    return false;
  }
  if(input.length == 0) {
    return false;
  }
  return true;
}

function getNames(input) {
  if(!checkInput(input)){
    return 'Error with input';
  }
  return input.map((item,idx) => {
    return item.name;
  })
}
function getScores(input) {
  if(!checkInput(input)){
    return 'Error with input';
  }
  return input.map((item,idx) => {
    return item.score;
  })
}

const names = getNames(data);
console.log(names);

const scores = getScores(data);
console.log(scores);


//filter


function searchByName(input,search){
  if(!checkInput(input)) {
    return 'Error with the input'
  }
  return input.filter((item,idx) => {
    return item.name === search;
  })
}


function capitalise(word){
  let caps = word.charAt(0).toUpperCase();
  let restofWord = word.substring(1);
  return `${caps}${restofWord}`
}

function searchByNameCI(input,search){
  if(!checkInput(input)) {
    return 'Error with the input'
  }
  const ciSearch = capitalise(search);

  return input.filter((item,idx) => {
    return item.name === ciSearch;
  })
}

function searchByNameAnything(input,search){
  if(!checkInput(input)) {
    return 'Error with the input'
  }
  return input.filter((item,idx) => {
    return item.name.toLowerCase().includes(search);
  })
}

//reduce
//return edits the accumulator
function scoreTotal(input) {
  if(!checkInput(input)) {
    return 'Error with the input'
  }
  return input.reduce((acc,cur) => {
    return cur.score + acc;
  },0);
}
//combined

function searchAndScore(input,search){
  if(!checkInput(input)) {
    return 'Error with the input'
  }
  return scoreTotal(searchByNameAnything(input,search));
}







let Leigh = searchByName(data,"Leigh");
console.log('Search Results:', Leigh);
let leigh = searchByNameCI(data,"leigh");
console.log('Search Results:', leigh);

let ei = searchByNameAnything(data,"ei")
console.log(ei);

let total = scoreTotal(data);
console.log(total);

let e = searchAndScore(data,"e");
console.log(e);
