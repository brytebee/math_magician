import operate from '../logic/operate';

describe('Test for operators', () => {
  const num1 = '3';
  const num2 = '6';
  it('test + operator', () => {
    expect(operate(num1, num2, '+')).toBe('9');
  });

  it('test - operator', () => {
    expect(operate(num1, num2, '-')).toBe('-3');
  });

  it('test ÷ operator', () => {
    expect(operate(num2, num1, '÷')).toBe('2');
  });

  it('test x operator', () => {
    expect(operate(num2, num1, 'x')).toBe('18');
  });

  it('test % operator', () => {
    expect(operate(num2, num1, '%')).toBe('0');
  });
});
