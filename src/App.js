// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggler from './ThemeToggler';
import LevskiPage from './LevskiPage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app-wrapper">
        {/* Fixed theme toggler in the top left corner */}
        <div className="theme-toggler">
          <ThemeToggler />
        </div>
        {/* Main content: the Levski page */}
        <LevskiPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
  