import React, { useRef, useState } from "react";
export default function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  const createTodo = () => {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, name];
    });
    todoNameRef.current.value = null;
  };

  const deleteTodo = (id) => {
    console.log(id);
    const updateTodo = todos.filter((elem, ind) => {
      return ind !== id;
    });
    setTodos(updateTodo);
  };

  return (
    <div>
      <input type="text" ref={todoNameRef} placeholder="Enter Todo" />
      <button onClick={createTodo}>Add</button>
      <div>
        {todos.map((elem, ind) => {
          return (
            <li key={ind} onClick={() => deleteTodo(ind)}>
              {elem}
            </li>
          );
        })}
      </div>
    </div>
  );
}
