// cb pattern

function makeRequest(url,done,err){
  const xhr = new XMLHttpRequest;
  xhr.open("GET",url);
  xhr.onload = () => done(xhr.responseText);
  xhr.onerror = () => err(xhr.statusText);
  xhr.send();
}

// promise pattern

function makeRequestPromise(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

makeRequest("https://jsonplaceholder.typicode.com/posts/1", obj => console.log(obj), err => console.log("Error: " + err))

makeRequestPromise("https://jsonplaceholder.typicode.com/posts/1")
  .then(answer => console.log(answer))
  .catch(error => console.log(error))


//if you just run the function makeRequestPromise you just get a promise pbject that has status pending
