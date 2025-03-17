import React, { useState, useMemo, useCallback } from 'react';

// Move the expensive function outside the component to avoid re-creation on every render
const computeFactorial = (num) => {
  console.log("Calculating factorial for", num);
  if (num <= 0) return 1;
  return num * computeFactorial(num - 1);
};

function ExpensiveCalculation({ number }) {
  // useMemo caches the result until 'number' changes
  const factorial = useMemo(() => computeFactorial(number), [number]);

  return (
    <div>
      <h3>Factorial of {number} is {factorial}</h3>
    </div>
  );
}

function CounterWithCallback() {
  const [count, setCount] = useState(0);
  const [dummy, setDummy] = useState("");

  // useCallback memoizes the increment function so it doesn't get re-created on every render
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <button onClick={increment}>Increment Count</button>
      <p>Count: {count}</p>
      <input
        type="text"
        value={dummy}
        onChange={(e) => setDummy(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
}

function PerformanceDemo() {
  const [number, setNumber] = useState(5);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Performance Optimization Demo</h2>
      <div>
        <label>
          Enter a number for factorial: 
          <input 
            type="number" 
            value={number} 
            onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      <ExpensiveCalculation number={number} />
      <CounterWithCallback />
    </div>
  );
}

export default PerformanceDemo;
