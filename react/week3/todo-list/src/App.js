import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { ListTitles } from "./components/ListTitles";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <ListTitles />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
