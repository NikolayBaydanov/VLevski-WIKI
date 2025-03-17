import { useState } from 'react';

function FormExample() {
  // State to store the current input value and the submitted message.
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission (page reload)
    setMessage(input);  // Update the message state with the input value
    setInput("");       // Optionally clear the input field after submission
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Enter Your Message</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="messageInput">Message: </label>
        <input
          id="messageInput"
          type="text"
          value={input}                   // Controlled component: value comes from state
          onChange={(e) => setInput(e.target.value)} // Update state on input change
        />
        <button type="submit">Submit</button>
      </form>
      {message && (
        <div style={{ marginTop: '10px' }}>
          <strong>Your message:</strong> {message}
        </div>
      )}
    </div>
  );
}

export default FormExample;
