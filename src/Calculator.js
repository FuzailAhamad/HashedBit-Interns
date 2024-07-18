import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './Calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [operator, setOperator] = useState(null);
  const [value, setValue] = useState(null);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplayValue(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
    }
  };

  const inputDot = () => {
    if (!(/\./).test(displayValue)) {
      setDisplayValue(displayValue + '.');
      setWaitingForOperand(false);
    }
  };

  const clearDisplay = () => {
    setDisplayValue('0');
  };

  const toggleSign = () => {
    setDisplayValue((displayValue.charAt(0) === '-') ? displayValue.substr(1) : '-' + displayValue);
  };

  const inputPercent = () => {
    const currentValue = parseFloat(displayValue);
    if (currentValue === 0) return;
    setDisplayValue(String(currentValue / 100));
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (value == null) {
      setValue(inputValue);
    } else if (operator) {
      const currentValue = value || 0;
      const newValue = calculate[operator](currentValue, inputValue);

      setValue(newValue);
      setDisplayValue(String(newValue));
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const calculate = {
    '/': (prevValue, nextValue) => prevValue / nextValue,
    '*': (prevValue, nextValue) => prevValue * nextValue,
    '+': (prevValue, nextValue) => prevValue + nextValue,
    '-': (prevValue, nextValue) => prevValue - nextValue,
    '=': (prevValue, nextValue) => nextValue,
  };

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <ButtonPanel
        onDigitPress={inputDigit}
        onDotPress={inputDot}
        onClearPress={clearDisplay}
        onToggleSignPress={toggleSign}
        onPercentPress={inputPercent}
        onOperatorPress={performOperation}
      />
    </div>
  );
};

export default Calculator;
