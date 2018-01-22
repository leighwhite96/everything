(function makeSomeHTML(){
  let heading = document.createElement("h1");
  let list = document.createElement("ul");
  list.setAttribute("id","list");
  let listItem1 = document.createElement("li");
  let listItem2 = document.createElement("li");
  let listItem3 = document.createElement("li");

  let listItemArray = [listItem1,listItem2,listItem3]

  document.body.appendChild(heading);
  document.body.appendChild(list);

  listItemArray.map((item) => {
    document.getElementById("list").appendChild(item)
  })

})();
