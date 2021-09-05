import React, { useState, useEffect, useMemo, useCallback } from 'react';

import List, { Todo } from './List';

const intialTodoList = [
  {
    id: 0,
    task: 'Make a project using Web socket'
  },
  {
    id: 1,
    task: 'Write query for the future task'
  }
];

const App = () => {
  const [todoList, setTodoList] = useState(intialTodoList);
  const [task, setTask] = useState('');
  const [term, setTerm] = useState('');

  const printTodoList = useCallback(() => {
    console.log('Changing todoList', todoList);
  }, [todoList]);

  useEffect(() => {
    // console.log('Rending <App/>');
  });

  useEffect(() => {
    printTodoList();
  }, [todoList, printTodoList]);

  const handleCreate = () => {
    const newTodo = {
      id: Date.now(),
      task
    };

    setTodoList([...todoList, newTodo]);
    setTask('');
  };

  const handleSearch = () => {
    setTerm(task);
  };

  const filteredTodoList = useMemo(
    () =>
      todoList.filter((todo: Todo) => {
        // console.log('Filtering.....');

        return todo.task.toLocaleLowerCase().includes(term.toLocaleLowerCase());
      }),
    [term, todoList]
  );

  const handleDelete = useCallback(
    (taskId: number) => {
      const newTodo = todoList.filter((todo: Todo) => todo.id !== taskId);
      setTodoList(newTodo);
    },
    [todoList]
  );

  return (
    <div>
      <input type="text" value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleSearch}>Search</button>
      <List
        todoList={term ? filteredTodoList : todoList}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
