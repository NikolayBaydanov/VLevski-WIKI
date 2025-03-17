import React, { useReducer, useState } from 'react';

// Initial state is an empty array of todos
const initialState = [];

// Reducer function to handle state updates based on action types
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      // Add a new todo with a unique id, the provided text, and not completed
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false }
      ];
    case 'TOGGLE_TODO':
      // Toggle the completed status of a todo identified by id
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      // Remove the todo with the given id
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

function TodoListWithReducer() {
  // useReducer returns the current state and a dispatch function to send actions to the reducer
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState('');

  // Handler to add a new todo when the form is submitted
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch({ type: 'ADD_TODO', payload: input });
    setInput('');
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Todo List with useReducer</h2>
      <form onSubmit={handleAddTodo}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Add new todo" 
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ margin: '10px 0' }}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', marginRight: '10px' }}>
              {todo.text}
            </span>
            <button 
              onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
            >
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button 
              onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
              style={{ marginLeft: '5px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListWithReducer;
