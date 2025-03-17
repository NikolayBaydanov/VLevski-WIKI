import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Helper function to generate a random hex color
  const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Add a new todo with a timestamp and a random color
  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    const newTodo = {
      text: input,
      completed: false,
      timestamp: new Date().toLocaleString(), // get the current date/time as a string
      color: randomColor()                     // assign a random color
    };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  // Toggle the 'completed' status of a todo
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Delete a todo from the list
  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Todo List</h2>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            <span
              style={{
                color: todo.color,  // apply the random color to the text
                textDecoration: todo.completed ? 'line-through' : 'none',
                marginRight: '10px'
              }}
            >
              {todo.text}
            </span>
            <small style={{ marginRight: '10px', color: 'gray' }}>
              {todo.timestamp}
            </small>
            <button onClick={() => toggleTodo(index)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTodo(index)} style={{ marginLeft: '5px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
