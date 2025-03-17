import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  // Get stored value from localStorage or use the provided initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading localStorage key “' + key + '”: ', error);
      return initialValue;
    }
  });

  // Create a function to update the state and localStorage
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error setting localStorage key “' + key + '”: ', error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
