import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState('');

  const handleValue1Change = (e) => {
    setValue1(e.target.value);
  };

  const handleValue2Change = (e) => {
    setValue2(e.target.value);
  };

  const handleAdd = () => {
    if (value1 && value2) {
      setResult(parseFloat(value1) + parseFloat(value2));
    }
  };

  const handleSubtract = () => {
    if (value1 && value2) {
      setResult(parseFloat(value1) - parseFloat(value2));
    }
  };

  const handleMultiply = () => {
    if (value1 && value2) {
      setResult(parseFloat(value1) * parseFloat(value2));
    }
  };

  const handleDivide = () => {
    if (value1 && value2) {
      setResult(parseFloat(value1) / parseFloat(value2));
    }
  };

  return (
    <div className="calculator">
      <input
        type="text"
        value={value1}
        onChange={handleValue1Change}
        placeholder="Enter a number"
        className="input-field"
      />
      <input
        type="text"
        value={value2}
        onChange={handleValue2Change}
        placeholder="Enter a number"
        className="input-field"
      />
      <div className="buttons">
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>
        <button onClick={handleMultiply}>Multiply</button>
        <button onClick={handleDivide}>Divide</button>
      </div>
      {result !== '' && <h1 className="result">Result: {result}</h1>}
    </div>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1 className={`${isDarkMode ? 'dark-mode' : ''}`}>Simple Calculator</h1>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <Calculator />
    </div>
  );
}

export default App;
