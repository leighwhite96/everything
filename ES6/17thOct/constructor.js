function Piece(value,position,playerName){
  this.value = value;
  this.setValue = function setValue(val){
    return this.value = val;
  }
  this.getValue = function getValue(){
    return "Value is " + value;
  }
  this.position = position;
  this.move = function move(x,y) {
    return [position[0]+x,position[1]+y];
  };
  this.playerName = playerName;
}

function Rectangle(width,height,position){
  this.width = width;
  this.height = height;
  this.position = position;
}

/* Could have done it this way (and its better to do it this way...) */

Piece.prototype.move = function(x,y){
  this.position = [this.position[0]+x,this.position[1]+y];
}

Piece.prototype.setValue = function(val) {
  this.value = val;
  return true;
}

Piece.prototype.getValue = function() {
  return "Value is " + this.value;
}

/*ES6*/

class Piece {
  constructor(value,position,playerName){
    this._value = value;
    this.position = position;
    this.playerName = playerName;
  }

  //Getter
  get value() {
    return "Value is " + this._value;
  }

  //Methods
  set value(val) {
    return this._value = val;
  }

  move(x,y) {
    this.position = [this.position[0]+x,this.position[1]+y];
  }
}

class Rectangle {
  constructor(width,height,position){
    this.width = width;
    this.height = height;
    this.position = position;
  }
}

//default set and get is when we call the object and manually set and get values - in ES6 we can override.


/* Person class */

class Person {
  constructor(firstname,lastname,hat){
    this.firstname = firstname;
    this.lastname = lastname;
    this.hat = hat;
  }

  get fullname() {
    return "Their name is " + this.firstname + " " + this.lastname;
  }

  set name(fullName) {
    const names = fullName.split(' ');
    this.firstname = names[0];
    this.lastname = names[1];

  }
}
