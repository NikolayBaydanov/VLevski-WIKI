import React, { useState, useEffect } from 'react';
import Counter from './Counter';
import FormExample from './FormExample';  // Import the FormExample component

function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Message
      </button>
      {isVisible && <p>This message can be toggled on and off.</p>}
    </div>
  );
}

function ListExample() {
  const items = ['Apple', 'Banana', 'Orange'];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  useEffect(() => {
    document.title = "My Custom React App";
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Welcome to My Custom React App</h1>
      <Greeting name="Developer" />
      <ToggleMessage />
      <ListExample />
      <Counter />
      <FormExample />  {/* Added our new form component */}
    </div>
  );
}

export default App;
