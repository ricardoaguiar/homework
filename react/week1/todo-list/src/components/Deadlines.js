import React from 'react';

export const Deadlines = ({ listItems }) => {
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
