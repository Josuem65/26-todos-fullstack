import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import TodoInput from './features/components/input';
import { CompletedBtn, ActiveBtn, DeleteBtn } from './features/components/buttons'

function App() {
  return (
    <div className="App">
        <TodoInput />
        <CompletedBtn />
        <ActiveBtn />
        <DeleteBtn />
    </div>
  );
}

export default App;
