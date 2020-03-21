import React, { useState } from "react";

export const ListItem = ({
  id,
  description,
  deadline,
  complete,
  onDelete,
  onComplete,
  onEdit
}) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState("");

  const editItem = event => {
    setEdit(true);
    setEditTodo(description);
  };

  return (
    <li key={id}>
      <div className={`task ${complete ? `complete` : ""}`}>
        <label>
          <input type="checkbox" onChange={onComplete} />
          {edit ? (
            <input
              type="text"
              value={description}
              onChange={event => setEditTodo(event.target.value)}
            />
          ) : (
            description
          )}
        </label>
        <span className="deadline">{deadline}</span>
      </div>
      {edit ? (
        <button
          type="button"
          className="btn"
          onClick={() => onEdit(id, description)}
        >
          Update
        </button>
      ) : (
        <button type="button" className="btn" onClick={editItem}>
          Edit
        </button>
      )}
      <button type="button" className="btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};
