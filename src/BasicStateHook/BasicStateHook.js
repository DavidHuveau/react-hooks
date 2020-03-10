import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([{ text: 'Apprendre les Hooks' }]);

  function onChangeNewTodo(e) {
    const target = {e};
    setNewTodo(target.value);
  }

  function onClickAddTodo(e) {
    setTodos(todos.push({text: newTodo}));
    debugger
    setNewTodo('');
  }

  return (
    <div>
      <input type="text" name="newTodo" value={newTodo} onChange={onChangeNewTodo}></input>
      <button onClick={onClickAddTodo}>Ajouter cette todo</button>
      Todos
      <ul>
        { todos.map((todo, index) => {
          return(<li key={index}>{todo.text}</li>)
        })}
      </ul>


      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}