import React from 'react';

const Heading = ({ filtered, onFilterBtnClick, status }) => {
  return (
    <div className="todo-list__heading">
      <h2>
        {status === 'todo'
          ? `ToDo Item (${filtered.length})`
          : `Completed Item (${filtered.length})`}
      </h2>
      <button
        className={`todo-list__btn ${
          status === 'todo' ? 'todo-list__btn--todo' : ''
        }`}
        onClick={onFilterBtnClick}
      >
        {status === 'todo' ? 'Completed Item' : 'Todo Item'}
      </button>
    </div>
  );
};

export default Heading;
