import React, { useState, useEffect } from 'react';
import AddBar from './AddBar';
import TaskList from './TaskList';
import Heading from './Heading';
import './styles.scss';

const App = () => {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState('todo');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    status === 'todo'
      ? setFiltered(tasks.filter((task) => !task.completed))
      : setFiltered(tasks.filter((task) => task.completed));
    localStorage.setItem('todos', JSON.stringify(tasks));
  }, [tasks, status]);

  const getLocalTodos = () => {
    const localTodos = JSON.parse(localStorage.getItem('todos'));
    localTodos ? setTasks(localTodos) : setTasks([]);
  };

  const onFilterBtnClick = () => {
    status === 'todo' ? setStatus('completed') : setStatus('todo');
  };

  const onClearBtnClick = () => {
    setTasks(tasks.filter((task) => !filtered.includes(task)));
    setFiltered([]);
  };

  return (
    <div className="container">
      <header>
        <h1>Todo List 📝</h1>
        {status === 'todo' ? (
          <AddBar
            input={input}
            setInput={setInput}
            tasks={tasks}
            setTasks={setTasks}
          />
        ) : (
          ''
        )}
      </header>
      <div className="todo-list">
        <Heading
          filtered={filtered}
          onFilterBtnClick={onFilterBtnClick}
          status={status}
        />
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          filtered={filtered}
          status={status}
        />
      </div>
      <div className="clear-btn">
        {status === 'completed' && filtered.length > 0 ? (
          <button onClick={onClearBtnClick}>
            ❌ Clear All Completed Tasks
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default App;
