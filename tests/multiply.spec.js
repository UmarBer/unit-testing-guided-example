const { multiply } = require('./../calculator.js');
describe('Multiply', () => {
  test('should multiply two positive integers correctly', () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });
  test('should multiply a negative and a positive integer correctly', () => {
    const result = multiply(2, -3);
    expect(result).toBe(-6);
  });
  test('should return 0 when one of the arguments passed is 0', () => {
    const result = multiply(2, 0);
    expect(result).toBe(0);
  });
});
