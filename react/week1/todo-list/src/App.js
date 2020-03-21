import React from 'react';
import './App.css';
import { TodoItems } from './components/ListItems';
import { ListTitles } from './components/ListTitles';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Todo List</h1>
      </header>
      <div className='content'>
        <ListTitles />
        <TodoItems />
      </div>
    </div>
  );
};

export default App;
