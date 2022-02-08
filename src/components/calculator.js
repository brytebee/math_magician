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

  const clickHandler = (e) => {
    const buttonName = e.currentTarget.textContent.trim();
    setState(calculate(obj, buttonName));
  };

  return (
    <div className="main d-flex">
      <div className="container">
        <div className="button result">
          <p className="result-text">
            {obj.next || obj.operation || obj.total || 0}
          </p>
        </div>
        <div className="d-flex">
          {firstRow.map((text) => (
            <button
              key={text}
              className="button flex-child"
              type="button"
              onClick={clickHandler}
            >
              {text}
            </button>
          ))}
        </div>
        <div className="d-flex">
          {secondRow.map((text) => (
            <button
              key={text}
              className="button flex-child"
              type="button"
              onClick={clickHandler}
            >
              {text}
            </button>
          ))}
        </div>
        <div className="d-flex">
          <button
            className="button flex-child"
            type="button"
            onClick={clickHandler}
          >
            4
          </button>
          <button
            className="button flex-child"
            type="button"
            onClick={clickHandler}
          >
            5
          </button>
          <button
            className="button flex-child"
            type="button"
            onClick={clickHandler}
          >
            6
          </button>
          <button
            className="button flex-child operator"
            type="button"
            onClick={clickHandler}
          >
            {' '}
            -
            {' '}
          </button>
        </div>
        <div className="d-flex">
          <button
            className="button flex-child"
            type="button"
            onClick={clickHandler}
          >
            1
          </button>
          <button
            className="button flex-child"
            type="button"
            onClick={clickHandler}
          >
            2
          </button>
          <button
            className="button flex-child"
            type="button"
            onClick={clickHandler}
          >
            3
          </button>
          <button
            className="button flex-child operator"
            type="button"
            onClick={clickHandler}
          >
            {' '}
            +
            {' '}
          </button>
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
