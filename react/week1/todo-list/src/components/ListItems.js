import React from 'react';
import { Deadlines } from './Deadlines';

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

export const TodoItems = ({ id, item, date }) => {
  return (
    <ul className='list-items'>
      {listItems.map(obj => (
        <li className={'a' + obj.id} key={obj.id}>
          {obj.item}
        </li>
      ))}
      <Deadlines listItems={listItems} />
    </ul>
  );
};
