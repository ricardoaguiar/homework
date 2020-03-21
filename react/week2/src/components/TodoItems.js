import React, { useState } from "react";

const todos = [
  {
    id: 1,
    description: "Get out of bed",
    complete: false
  },
  {
    id: 2,
    description: "Brush teeth",
    complete: false
  },
  {
    id: 3,
    description: "Eat breakfast",
    complete: false
  },
  {
    id: 4,
    description: "hyf react week1 homework",
    complete: false
  },
  {
    id: 5,
    description: "hyf react week2 homework",
    complete: false
  },
  {
    id: 6,
    description: "hyf react week3 homework",
    complete: false
  }
];

export const TodoItems = () => {
  const [list, setList] = useState(todos);
  const [show, setShow] = useState(false);

  const handleDelete = id => {
    setList(list.filter(item => item.id !== id));
  };

  const handleNew = () => {
    const newList = [...list];
    const newTodo = {
      id: Math.random(),
      description: "Random todo " + newList.length
    };
    newList.push(newTodo);
    setList(newList);
  };

  return (
    <>
      <input
        onClick={handleNew}
        className="addTodo"
        type="submit"
        value="Add Todo"
      />
      {list.length === 0 ? (
        <Empty />
      ) : (
        <ul className="list-items">
          {list.map(item => (
            <li
              key={item.id}
              className={`${show ? "help" : "not-help"} liItem` + item.id}
            >
              <label>
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={item.complete}
                  // onChange={() => handleChangeCheckbox(item.id)}
                />
                {item.description}
              </label>
              <button type="button" onClick={() => handleDelete(item.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export const Empty = () => <p> The list is empty </p>;
