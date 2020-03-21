import React, { useState, useEffect } from "react";
import { ListItem } from "./ListItem";

const fetchURL =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

export const TodoList = () => {
  const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newDeadline, setNewDeadline] = useState("");

  useEffect(() => {
    const getData = async () => {
      const result = await fetch(fetchURL).then(res => res.json());
      setList(result);
    };
    getData();
  }, []);

  const handleComplete = id => {
    setList(
      list.map(item => {
        if (item.id === id) {
          return { ...item, complete: !item.complete };
        } else {
          return item;
        }
      })
    );
  };
  const handleDelete = id => {
    console.log(id);
    setList(list.filter(item => item.id !== id));
  };

  const handleNewTask = () => {
    if (newTask === "" && newDeadline === "") {
      return false;
    }
    const newList = [...list];
    const newTodo = {
      id: Math.random(),
      description: newTask,
      deadline: newDeadline
    };
    newList.push(newTodo);
    console.log(newList);
    setList(newList);
    setNewTask("");
    setNewDeadline("");
  };

  const handleEdit = (id, description) => {
    const newItem = list;
    newItem[id].description = description;
    setList([...newItem]);
  };

  return (
    <>
      <div className="add-new">
        <input
          placeholder="add a new task"
          className="addTodo addTask"
          type="text"
          value={newTask}
          onChange={event => setNewTask(event.target.value)}
        />
        <input
          className="addTodo"
          type="date"
          value={newDeadline}
          onChange={event => setNewDeadline(event.target.value)}
        />
        <button onClick={handleNewTask} className="addTodo btn">
          Add New Task
        </button>
      </div>
      {list.length === 0 ? (
        <Empty />
      ) : (
        <ul className="list-items">
          {list.map(item => (
            <ListItem
              key={item.id}
              description={item.description}
              deadline={item.deadline}
              complete={item.complete}
              onDelete={() => handleDelete(item.id)}
              onComplete={() => handleComplete(item.id)}
              // onEdit={() => handleEdit(item.id)}
              onEdit={handleEdit}
              itemId={item.id}
            />
            // <li key={item.id}>
            //   <div className={`task ${item.complete ? `complete` : ''}`}>
            //     <label>
            //       <input
            //         type='checkbox'
            //         // checked={item.complete} //remove the warning of changing uncontrolled input of checkbox
            //         onChange={() => handleComplete(item.id)}
            //       />
            //       {item.description}
            //     </label>

            //     <span className='deadline'>{item.deadline}</span>
            //   </div>
            //   <button
            //     type='button'
            //     className='btn'
            //     onClick={() => handleDelete(item.id)}
            //   >
            //     Delete
            //   </button>
            // </li>
          ))}
        </ul>
      )}
    </>
  );
};

export const Empty = () => <p> The list is empty </p>;
