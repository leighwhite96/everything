const draw = () => {
  // alert("Hello!")
  let house = document.getElementById("sexyCanvas").getContext("2d");
  house.fillStyle = 'brown';
  house.fillRect(75,150,250,200);
  window1 = document.getElementById("sexyCanvas").getContext("2d");
  window1.fillStyle = 'yellow';
  window1.fillRect(120,180, 40,40)
  window1.strokeRect(120,180,40,40)
  window2 = document.getElementById("sexyCanvas").getContext("2d");
  window2.fillStyle = 'yellow';
  window2.fillRect(240,180, 40,40)
  window2.strokeRect(240,180,40,40)
  door = document.getElementById("sexyCanvas").getContext("2d");
  door.fillStyle = 'gray';
  door.fillRect(180,220, 40,80)
  // context.strokeRect(30,30,100,100);
  // context.clearRect(40,40,100,100);
}

window.onload = draw;
