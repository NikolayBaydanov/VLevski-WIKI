import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';

function NoteApp() {
  const [notes, setNotes] = useLocalStorage('notes', []);
  const [input, setInput] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setNotes([...notes, input]);
    setInput('');
  };

  // New function to delete a note by its index
  const deleteNote = (index) => {
    const newNotes = notes.filter((note, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Notes</h2>
      <form onSubmit={addNote}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Add a note" 
        />
        <button type="submit">Add Note</button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {notes.map((note, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            {note}
            <button onClick={() => deleteNote(index)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteApp;
