import calculate from '../logic/calculate';

describe('Test calculate function', () => {
  let obj = {};
  let buttonName = '';

  it('Test AC button', () => {
    obj = { total: 0, next: 150, operation: '+' };
    buttonName = 'AC';
    expect(calculate(obj, buttonName)).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('Test = button', () => {
    obj = { total: 80, next: 20, operation: '+' };
    buttonName = '=';
    expect(calculate(obj, buttonName)).toStrictEqual({
      total: '100',
      next: null,
      operation: null,
    });
  });

  it('Test 0 button', () => {
    obj = { total: 6, next: 0, operation: '+' };
    buttonName = '0';
    expect(calculate(obj, buttonName)).toStrictEqual({
      total: 6,
      next: '0',
      operation: '+',
    });
  });
});
