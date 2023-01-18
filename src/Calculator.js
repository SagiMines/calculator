import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import CalculatorButton from './CalculatorButton';
import './styles/Calculator.css';

function Calculator() {
  const [equation, setEquation] = useState('');
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const signs = ['+', '-', '*', '/'];

  // Handles calculator's buttons clicks
  const handleClick = async e => {
    const buttonValue = e.target.value;
    let tempEquation = equation;
    // if Error or Right answer
    if (tempEquation.search('=') !== -1 || tempEquation.search('!') !== -1) {
      tempEquation = '';
    }
    if (buttonValue !== 'Calculate!') {
      tempEquation = tempEquation + buttonValue;
    } else {
      let equationValue;
      try {
        equationValue = eval(equation);
      } catch {
        equationValue = undefined;
      }
      tempEquation =
        equationValue !== undefined && equationValue !== Infinity
          ? tempEquation + ' = ' + eval(equation)
          : 'Error!';
    }
    setEquation(tempEquation);
  };

  return (
    <Row className="calculator-container">
      <Row className="result">
        <Col>{equation}</Col>
      </Row>
      <Row className="buttons-container">
        {signs.map((number, index) => (
          <CalculatorButton onClick={handleClick} key={index} symbol={number} />
        ))}
        {numbers.map((number, index) => (
          <CalculatorButton onClick={handleClick} key={index} symbol={number} />
        ))}
        <CalculatorButton onClick={handleClick} symbol="Calculate!" />
      </Row>
    </Row>
  );
}

export default Calculator;
