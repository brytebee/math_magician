import '../App.css';
import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

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
        <div className="first-row d-flex">
          <button
            className="button flex-child"
            data-id="AC"
            type="button"
            buttonName="AC"
            onClick={clickHandler}
          >
            AC
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="+/-"
            onClick={clickHandler}
          >
            +/-
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="%"
            onClick={clickHandler}
          >
            %
          </button>
          <button
            className="button flex-child operator"
            data-id=""
            type="button"
            buttonName="÷"
            onClick={clickHandler}
          >
            &#247;
          </button>
        </div>
        <div className="second-row d-flex">
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="7"
            onClick={clickHandler}
          >
            7
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="8"
            onClick={clickHandler}
          >
            8
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="9"
            onClick={clickHandler}
          >
            9
          </button>
          <button
            className="button flex-child operator"
            data-id=""
            type="button"
            buttonName="x"
            onClick={clickHandler}
          >
            x
          </button>
        </div>
        <div className="third-row d-flex">
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="4"
            onClick={clickHandler}
          >
            4
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="5"
            onClick={clickHandler}
          >
            5
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="6"
            onClick={clickHandler}
          >
            6
          </button>
          <button
            className="button flex-child operator"
            data-id=""
            type="button"
            buttonName="-"
            onClick={clickHandler}
          >
            {' '}
            -
            {' '}
          </button>
        </div>
        <div className="fourth-row d-flex">
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="1"
            onClick={clickHandler}
          >
            1
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="2"
            onClick={clickHandler}
          >
            2
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="3"
            onClick={clickHandler}
          >
            3
          </button>
          <button
            className="button flex-child operator"
            data-id=""
            type="button"
            buttonName="+"
            onClick={clickHandler}
          >
            {' '}
            +
            {' '}
          </button>
        </div>
        <div className="fifth-row d-flex">
          <button
            className="button big-child"
            data-id=""
            type="button"
            buttonName="0"
            onClick={clickHandler}
          >
            0
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="."
          >
            {' '}
            .
            {' '}
          </button>
          <button
            className="button flex-child operator"
            data-id=""
            type="button"
            buttonName="="
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
