import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // useEffect runs after every render when the count changes.
  useEffect(() => {
    // Update the document title with the current count.
    document.title = `Count: ${count}`;
  }, [count]); // The dependency array makes this effect run only when 'count' changes.

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
