// ThemeToggler.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './ThemeToggler.css'; // Optional: for additional button styling

function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-toggler-button">
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
}

export default ThemeToggler;
