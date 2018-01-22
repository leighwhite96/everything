const solution = require('./recap.js');

test('first example test', () => {
  expect(solution([1,3,6,4,1,2])).toBe(5)
});

test('second example test', () => {
  expect(solution([1,2,3])).toBe(4)
});

test('third example test', () => {
  expect(solution([-1,-3])).toBe(1)
});

test('array of 0s should return 1', () => {
  expect(solution([0,0,0,0,0])).toBe(1)
});

test('empty array should return 1', () => {
  expect(solution([])).toBe(1);
})

test('any input other than array should return an error message', () => {
  expect(solution("Hello")).toBe("You entered something that wasn't an array")
});

test('number input returns an error message', () => {
  expect(solution(2)).toBe("You entered something that wasn't an array")
});

test('an array with an array in index 0 returns error message', () => {
  expect(solution([[1],[1,2]])).toBe("You entered an array with an array in")
});

test('an array with an array in any index returns error message', () => {
  expect(solution([1,2,[1,2]])).toBe("You entered an array with an array in")
});

test('break this shitty version', () => {
  expect(solution([1,2,3,3,3,4,2])).toBe(5)
  expect(solution([1,2,3,3,3,4,2,'a'])).toBe(5)
  expect(solution([1,2,3,3,3,4,5.1,2,'a'])).toBe(5)
})

test('random tests', () => {
  expect(solution([-10000,-653, 0,1,2])).toBe(3)
  expect(solution([-10000,-653, -50,-1,-2])).toBe(1)
  expect(solution([-10000,-653, 60,71,-2])).toBe(1)
  expect(solution([-10000,-653, 6000,1,2000])).toBe(2)
  expect(solution([-1000000,1000000])).toBe(1)
})

//chris tests

test('works for basic gap', () => {
  expect(solution([3,2,1,4,6])).toBe(5);
});
test('works for basic gap and repetition', () => {
  expect(solution([1,3,2,6,3,3,5,6])).toBe(4);
});
test('works for basic gap and negative', () => {
  expect(solution([3,1,-1,-5,4,5])).toBe(2);
});
test('works for no gap', () => {
  expect(solution([2,3,1])).toBe(4);
});
test('works for no gap and negative', () => {
  expect(solution([-2,-3,-1])).toBe(1);
});
test('works for ignoring strings', () => {
  expect(solution([-2,-3,-1,'a'])).toBe(1);
  expect(solution([1,2,-1,'a'])).toBe(3);
  expect(solution([1,2,5,6,4,-1,'a'])).toBe(3);
});
test('works for ignoring non-integers', () => {
  expect(solution([-2,-3,-1,1.1])).toBe(1);
  expect(solution([1,2,-1,3.3])).toBe(3);
  expect(solution([1,2,5,6,4,-1,3.2])).toBe(3);
});
