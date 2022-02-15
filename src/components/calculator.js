import '../App.css';
import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const firstRow = ['AC', '+/-', '%', '÷'];
  const secondRow = ['7', '8', '9', 'x'];
  const thirdRow = ['4', '5', '6', '-'];
  const fourthRow = ['1', '2', '3', '+'];

  const clickHandler = (e) => {
    const buttonName = e.currentTarget.textContent.trim();
    setState(calculate(obj, buttonName));
  };

  return (
    <div className="d-flex">
      <div className="container">
        <div className="button result">
          <p className="result-text">
            {obj.next || obj.operation || obj.total || 0}
          </p>
        </div>
        <div className="d-flex">
          {firstRow.map((text, i) => (
            <button
              key={text}
              className={
                i + 1 === firstRow.length
                  ? 'button flex-child operator'
                  : 'button flex-child'
              }
              type="button"
              onClick={clickHandler}
            >
              {text}
            </button>
          ))}
        </div>
        <div className="d-flex">
          {secondRow.map((text, i) => (
            <button
              key={text}
              className={
                i + 1 === secondRow.length
                  ? 'button flex-child operator'
                  : 'button flex-child'
              }
              type="button"
              onClick={clickHandler}
            >
              {text}
            </button>
          ))}
        </div>
        <div className="d-flex">
          {thirdRow.map((text, i) => (
            <button
              key={text}
              className={
                i + 1 === thirdRow.length
                  ? 'button flex-child operator'
                  : 'button flex-child'
              }
              type="button"
              onClick={clickHandler}
            >
              {text}
            </button>
          ))}
        </div>
        <div className="d-flex">
          {fourthRow.map((text, i) => (
            <button
              key={text}
              className={
                i + 1 === fourthRow.length
                  ? 'button flex-child operator'
                  : 'button flex-child'
              }
              type="button"
              onClick={clickHandler}
            >
              {text}
            </button>
          ))}
        </div>
        <div className="d-flex">
          <button
            className="button big-child"
            type="button"
            onClick={clickHandler}
          >
            0
          </button>
          <button className="button flex-child" type="button">
            {' '}
            .
            {' '}
          </button>
          <button
            className="button flex-child operator"
            type="button"
            onClick={clickHandler}
          >
            {' '}
            =
            {' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
