'use strict';

function capitaliseObjectKeys (input) {
  const keys = Object.keys(input);
  const result = {};

  for (var ii = 0; ii < keys.length; ii++) {
    const capitalisedKey = keys[ii].slice(0, 1).toUpperCase().concat(keys[ii].slice(1));
    result[capitalisedKey] = input[keys[ii]];
  }

  return result;
}
//takes in an input (could be object or array)
//keys = an array of keys
//sets a variable = to empty Object
//for all the keys: capitalisedKey takes a key, turns it to uppercase,
//
//


function capitaliseObjectValues (input) {
  const keys = Object.keys(input);
  const result = {};

  for (var ii = 0; ii < keys.length; ii++) {
    const value = input[keys[ii]];
    const capitalisedValue = value.slice(0, 1).toUpperCase().concat(value.slice(1));
    result[keys[ii]] = capitalisedValue;
  }

  return result;
}

/*function capitalise(input){
  const keys = Object.keys(input);
  const result = {};
  for (var ii = 0; ii < keys.length; ii++) {
    const value = input[keys[ii]];
    const capitalisedKey = keys[ii].slice(0, 1).toUpperCase().concat(keys[ii].slice(1));
    const capitalisedValue = value.slice(0, 1).toUpperCase().concat(value.slice(1));
    result[capitalisedKey] = input[keys[ii]];
    result[keys[ii]] = capitalisedValue;
  }

  return result;
}*/

/*
  function(input, function(){}){}


 */




function incrementObjectValues (input) {
  const keys = Object.keys(input);
  const result = {};

  for (var ii = 0; ii < keys.length; ii++) {
    const value = input[keys[ii]];
    result[keys[ii]] = value + 1;
  }

  return result;
}





function reverseObjectKeys (input) {
  const keys = Object.keys(input);
  const result = {};

  for (var ii = 0; ii < keys.length; ii++) {
    const reversedKey = keys[ii].split('').reverse().join('');
    result[reversedKey] = input[keys[ii]];
  }

  return result;
}

/* CHRIS EXPLANATION
  first thing - create a function called Capitalise... in capKey and capvalue
  we are doing the same thing on two different values - SCREAMS function

  in the for loop we want ot return an object. We know that reduce can be handed an array
  and output an object





 */



var capitalize = (value) => {
  return value.slice(0,1).toUpperCase().concat(value.slice(1));
}
function capObjKeys(input) {
  return Object.keys(input).reduce((acc,cur) => {
    return acc[capitalize(cur)] = input[cur];
    return acc;
  },{})
}

//for capvalue acc[cur] = capitalise(input[cur])
