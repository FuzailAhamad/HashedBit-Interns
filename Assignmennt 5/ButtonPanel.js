import React from 'react';
import Button from './Button';
import './ButtonPanel.css';

const ButtonPanel = ({
  onDigitPress,
  onDotPress,
  onClearPress,
  onToggleSignPress,
  onPercentPress,
  onOperatorPress
}) => (
  <div className="button-panel">
    <Button className="function-button" onClick={onClearPress}>AC</Button>
    <Button className="function-button" onClick={onToggleSignPress}>±</Button>
    <Button className="function-button" onClick={onPercentPress}>%</Button>
    <Button className="operator-button" onClick={() => onOperatorPress('/')}>÷</Button>

    <Button className="digit-button" onClick={() => onDigitPress(7)}>7</Button>
    <Button className="digit-button" onClick={() => onDigitPress(8)}>8</Button>
    <Button className="digit-button" onClick={() => onDigitPress(9)}>9</Button>
    <Button className="operator-button" onClick={() => onOperatorPress('*')}>×</Button>

    <Button className="digit-button" onClick={() => onDigitPress(4)}>4</Button>
    <Button className="digit-button" onClick={() => onDigitPress(5)}>5</Button>
    <Button className="digit-button" onClick={() => onDigitPress(6)}>6</Button>
    <Button className="operator-button" onClick={() => onOperatorPress('-')}>−</Button>

    <Button className="digit-button" onClick={() => onDigitPress(1)}>1</Button>
    <Button className="digit-button" onClick={() => onDigitPress(2)}>2</Button>
    <Button className="digit-button" onClick={() => onDigitPress(3)}>3</Button>
    <Button className="operator-button" onClick={() => onOperatorPress('+')}>+</Button>

    <Button className="digit-button zero" onClick={() => onDigitPress(0)}>0</Button>
    <Button className="digit-button" onClick={onDotPress}>.</Button>
    <Button className="operator-button" onClick={() => onOperatorPress('=')}>=</Button>
  </div>
);

export default ButtonPanel;
