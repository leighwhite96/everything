const sum = require('./sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});

test('adds 1 + -2 to equal -1', () => {
  expect(sum(1,-2)).toBe(-1);
});

test('adds 1 to infinty',() => {
  expect(sum(1,Infinity)).toBe(Infinity);
});

test('adds 0.1 + 0.2 to be 0.3', () => {
  expect(sum(0.1,0.2)).toBe(0.3);
})
