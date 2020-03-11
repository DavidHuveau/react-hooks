import React, { useState } from 'react';

export default () => {
  const [newTodo, setNewTodo] = useState({ text: '' });
  const [todos, setTodos] = useState([{ text: 'Apprendre les Hooks' }]);

  function onChangeNewTodo({ target }) {
    setNewTodo({ text: target.value });
    // console.log(newTodo);
  }

  function onClickAddTodo(e) {
    setTodos(todos.concat(newTodo));
    setNewTodo({ text: '' });
    // console.log(todos);
  }

  return (
    <div>
      <p>{todos.length} items</p>
      <input type="text" value={newTodo.text} onChange={onChangeNewTodo}></input>{newTodo.text.length}
      <button onClick={onClickAddTodo}>Ajouter cette todo</button>
      <ul>
        {todos.map((todo, index) => {
          return (<li key={index}>{todo.text}</li>)
        })}
      </ul>

    </div>
  );
}