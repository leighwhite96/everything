document.querySelector('#foo').addEventListener('submit', function (event) {
  var xhr = new XMLHttpRequest();

  xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      // ... do something with the response
    }
  });

  xhr.open('GET', 'https://example.com/search?query=' + event.target[0].value);
  xhr.send();
});

document.querySelector('#bar').addEventListener('click', function (event) {
  var xhr = new XMLHttpRequest();

  xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      // ... do something with the response
    }
  });

  var element = document.querySelector('#baz');
  xhr.open('GET', 'https://lulz.org/search?query=' + element.value);
  xhr.send();
});

/*

function addListener(selector,eventName,cbfunction){
  document.querySelector(selector).addEventListener(eventName,cbfunction());
}

function fetch (url,cbfunction) {
      var xhr = new XMLHttpRequest();
      xhr.addEventListener('load',function(){
      if(xhr.status === 200){
      var response = JSON.parse(xhr.responseText);
      return cbfunction(response);
    }
  });
  xhr.open('GET',url);
  xhr.send();
}

addListener('#foo','submit',(event) => 
  {var url = ...;
  }){
  fetch(url,(response) => {
  //do something with repsonse
  });
  })
 */
