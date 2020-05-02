import React, { useState } from "react";

export function BasicStateHook() {
  const [newTodo, setNewTodo] = useState({ text: "" });
  const [todos, setTodos] = useState([{ text: "Apprendre les Hooks" }]);

  function onChangeNewTodo({ target }) {
    setNewTodo({ text: target.value });
  }

  function onClickAddTodo(e) {
    setTodos(todos.concat(newTodo));
    setNewTodo({ text: "" });
  }

  return (
    <>
      <p>{todos.length} todos</p>
      <input type="text" value={newTodo.text} onChange={onChangeNewTodo}></input> {newTodo.text.length} car.
      <div>
        <button onClick={onClickAddTodo}>Ajouter cette todo</button>
      </div>
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo.text}</li>)}
      </ul>
    </>
  );
}