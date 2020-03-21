import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TodoItems } from "./components/TodoItems";
import { ListTitles } from "./components/ListTitles";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <ListTitles />
        <TodoItems />
      </div>
    </div>
  );
};

export default App;
