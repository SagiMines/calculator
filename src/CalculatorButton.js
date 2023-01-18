import { Button, Col } from 'react-bootstrap';
import './styles/CalculatorButton.css';

function CalculatorButton(props) {
  return (
    <Col
      xs={
        props.symbol === 0 || props.symbol === 'Calculate!'
          ? 12
          : typeof props.symbol === 'string'
          ? 3
          : 4
      }
      className="button-col"
    >
      <Button
        onClick={props.onClick}
        value={props.symbol}
        variant="dark"
        className={
          props.symbol !== 'Calculate!' ? 'button' : 'button calculate'
        }
      >
        {props.symbol}
      </Button>
    </Col>
  );
}

export default CalculatorButton;
