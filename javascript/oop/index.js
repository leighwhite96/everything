var person = {
  name: ["Leigh", "White"],
  age: 21,
  gender: "female",
  interests: ["sleeping", "eating"],
  greeting: function() {
    alert("Hi! I\'m " + this.name[0]);
  }
}

function Person(name,gender) {
  this.name = name;
  this.gender = gender;
  this.greeting = function() {
    alert("Hi! I am " + this.name[0]);
  };
  this.title = function() {
	if(gender == "female") {
		return this.title="Mrs";
} else {
	return this.title = "Mr";
}
}

}
