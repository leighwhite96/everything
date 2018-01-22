/*

We need to figure out a way to create people on the table.

- We need to take user input and generate a player from that
- So we need a constructor function
- Need a way to count for their ID -- suggests an increment at some point
- Closure so nothing else can change the ID count


*/
  function f() {
      var count = 0;
      return function Player(name) {
        this.id = count++;
        this.name = name;
        this.score = 0;
        this.profile = url("pp.jpg");
      }
  }
  var Person = f();
  var chris = new Person('chris');
  var sonj = new Person("sonj");
  var nicola = new Person("nicola");

  var arr = [chris,sonj,nicola];   //map over the array and display the people?
/*

- We need to do something with these now, placing them in a table
- Still don't have something to grab the input from the player
- We need to get all of these objects into an array - it will make it easier to append to a table?
*/
//add new players created to the array
  function addPlayer(player) {
    var input = document.getElementById("name").value;
    arr.push(new Player("input"));
  }

  function displayTable() {

    var tablebody = document.getElementById("body");

    for(var i = 0; i < arr.length; i++) {                             //loop through the array [PLayer,...]

    var player = arr[i];                                            //selects one of the Players (this is an object)
    var row = document.createElement("tr");                         //creates a row
    var properties = ["id","name","score","profile"];               //creates an array of the propeties from the individual player objects
    for(var j = 0; j < properties.length;) {                        //loops through the properties
      var cell = document.createElement("td");                      // creates table data
      cell.innerHTML = player[properties[j]];                     //properties[j] is a string. This changes the innerHTML of the td to whatever is located at that property of the single player
      row.appendChild(cell);                                        //appends the new td to the row
    }
    table.appendChild(row);                                         //appends the row to the table
  }
  }
