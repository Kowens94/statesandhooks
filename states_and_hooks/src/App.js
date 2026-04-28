import Simplecounter from './components/Simple_counter';
import './App.css';
import Forminput from './components/form_input';
import React , { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="App">
      
      <Simplecounter />
      <Forminput  text={inputValue} setText={handleChange} />
      <p>Value entered: {inputValue}</p>
      <TodoList />
    </div>
  );
}

export default App;
