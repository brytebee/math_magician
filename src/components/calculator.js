import { Component } from 'react';
import './calculator.css';

/* eslint-disable react/prefer-stateless-function */
class Calculator extends Component {
  /* eslint-enable react/prefer-stateless-function */
  render() {
    return (
      <div className="container">
        <div className="button result">
          <p className="result-text">0</p>
        </div>
        <div className="first-row d-flex">
          <button className="button flex-child" data-id="AC" type="button">
            AC
          </button>
          <button className="button flex-child" data-id="" type="button">
            +/-
          </button>
          <button className="button flex-child" data-id="" type="button">
            %
          </button>
          <button
            className="button flex-child operator"
            data-id=""
            type="button"
          >
            &#247;
          </button>
        </div>
        <div className="second-row d-flex">
          <button className="button flex-child" data-id="" type="button">
            7
          </button>
          <button className="button flex-child" data-id="" type="button">
            8
          </button>
          <button className="button flex-child" data-id="" type="button">
            9
          </button>
          <button
            className="button flex-child operator"
            data-id=""
            type="button"
          >
            &#215;
          </button>
        </div>
        <div className="third-row d-flex">
          <button className="button flex-child" data-id="" type="button">
            4
          </button>
          <button className="button flex-child" data-id="" type="button">
            5
          </button>
          <button className="button flex-child" data-id="" type="button">
            6
          </button>
          <button
            className="button flex-child operator"
            data-id=""
            type="button"
          >
            {' '}
            -
            {' '}
          </button>
        </div>
        <div className="fourth-row d-flex">
          <button className="button flex-child" data-id="" type="button">
            1
          </button>
          <button className="button flex-child" data-id="" type="button">
            2
          </button>
          <button className="button flex-child" data-id="" type="button">
            3
          </button>
          <button
            className="button flex-child operator"
            data-id=""
            type="button"
          >
            {' '}
            +
            {' '}
          </button>
        </div>
        <div className="fifth-row d-flex">
          <button className="button big-child" data-id="" type="button">
            0
          </button>
          <button className="button flex-child" data-id="" type="button">
            {' '}
            .
            {' '}
          </button>
          <button
            className="button flex-child operator"
            data-id=""
            type="button"
          >
            {' '}
            =
            {' '}
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
