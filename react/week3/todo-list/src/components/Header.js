import React, { useState, useEffect } from "react";

export const Header = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setSeconds(seconds + 1);
    }, 1000);
  });

  return (
    <>
      <header className="App-header">
        <h1 className="title">Todo List</h1>
        <p>You've been {seconds} seconds on this page.</p>
      </header>
    </>
  );
};
