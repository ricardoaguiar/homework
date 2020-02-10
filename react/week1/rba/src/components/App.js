import React from 'react';
import '../css/App.css';
import { TodoItems } from './ListItems';
import { ListTitles } from './ListTitles';

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
