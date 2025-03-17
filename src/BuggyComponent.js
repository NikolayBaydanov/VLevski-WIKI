import React from 'react';

function BuggyComponent() {
  // Simulate an error during rendering
  throw new Error('I crashed!');
  // This line is never reached
  return <div>This text will not be rendered.</div>;
}

export default BuggyComponent;
