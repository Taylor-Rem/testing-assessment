const { shuffleArray } = require('./utils');

const arr = ['monke', 'elepant', 'tigre'];
let shuffle = shuffleArray(arr);

describe('shuffleArray should', () => {
  test('give me a response', () => {
    expect(shuffle).toContain('monke');
  });
  test('returns an array', () => {
    expect(Array.isArray(shuffle)).toBe(true);
  });
  test('both arrays contain same information', () => {
    for (let i = 0; i < arr.length; i++) {
      expect(shuffle).toContain(arr[i]);
    }
  });
});
