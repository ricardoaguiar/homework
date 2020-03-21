import React, { useState } from 'react';

const todos = [
  {
    id: 1,
    description: 'Get out of bed',
    complete: false
  },
  {
    id: 2,
    description: 'Brush teeth',
    complete: false
  },
  {
    id: 3,
    description: 'Eat breakfast',
    complete: false
  },
  {
    id: 4,
    description: 'hyf react week1 homework',
    complete: false
  },
  {
    id: 5,
    description: 'hyf react week2 homework',
    complete: false
  },
  {
    id: 6,
    description: 'hyf react week3 homework',
    complete: false
  }
];

export const TodoItems = () => {
  const [list, setList] = useState(todos);

  const handleDelete = id => {
    setList(list.filter(item => item.id !== id));
  };

  const handleNew = () => {
    const newList = [...list];
    const newTodo = {
      id: Math.random(),
      description: 'Random todo ' + newList.length
    };
    newList.push(newTodo);
    setList(newList);
  };

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

  return (
    <>
      <input
        onClick={handleNew}
        className='addTodo'
        type='submit'
        value='Add Todo'
      />
      {list.length === 0 ? (
        <Empty />
      ) : (
        <ul className='list-items'>
          {list.map(item => (
            <li key={item.id}>
              <label className={`${item.complete ? `complete` : ''}`}>
                <input
                  type='checkbox'
                  checked={item.complete}
                  onChange={() => handleComplete(item.id)}
                />
                {item.description}
              </label>
              <button type='button' onClick={() => handleDelete(item.id)}>
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
