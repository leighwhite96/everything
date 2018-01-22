const addHTML = require('./index.js')

jest.mock(addHTML);

test('displays a h1 tag and an ul with 3 li', ( => {
  document.body.innerHTML = '';
  
}))
