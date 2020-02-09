import React from 'react';

const listItems = [
  {
    id: '1',
    item: 'hyf react week1 homework',
    date: 'Wed Feb 12 2020 16:00:00'
  },
  {
    id: '2',
    item: 'hyf react week2 homework',
    date: 'Wed Feb 19 2020 16:00:00'
  },
  {
    id: '3',
    item: 'hyf react week3 homework',
    date: 'Wed Feb 26 2020 16:00:00'
  }
];

export const Deadlines = () => {
  return (
    <>
      {listItems.map(obj => (
        <li className={'b' + obj.id} key={obj.id}>
          {obj.date}
        </li>
      ))}
    </>
  );
};
