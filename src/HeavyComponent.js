// HeavyComponent.js
import React from 'react';

function HeavyComponent() {
  return (
    <div>
      <h2>This is a heavy component loaded lazily!</h2>
      <p>It only loads when needed, reducing the initial bundle size.</p>
    </div>
  );
}

export default HeavyComponent;
