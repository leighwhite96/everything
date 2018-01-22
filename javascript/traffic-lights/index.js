var count = 0;
var lights = ['red', 'orange', 'green'];

function changeColor() {
  //this returns multiple elements - you can't chain them - could store in variable
  document.getElementsByClassName(lights[count])[0].classList.remove('active');
  count = (count + 1) % lights.length;
  //we only want the first element with class orange so that's why we use [0]
  document.getElementsByClassName(lights[count])[0].classList.add('active');
}
