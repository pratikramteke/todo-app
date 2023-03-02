import React, { useEffect, useRef, useState } from "react";
import "./style.css";

export default function App() {
  const [todos, setTodos] = useState(() => {
    if (JSON.parse(localStorage.getItem("todos")))
      return JSON.parse(localStorage.getItem("todos"));
    return [];
  });
  const todoNameRef = useRef();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function createTodo(e) {
    e.preventDefault();
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, name];
    });
    todoNameRef.current.value = null;
  }

  const editTodo = (id) => {
    const updateTodo = todos.filter((elem, ind) => {
      return ind === id;
    });
    todoNameRef.current.value = updateTodo;
    deleteTodo(id);
  };

  const deleteTodo = (id) => {
    const updateTodo = todos.filter((elem, ind) => {
      return ind !== id;
    });
    setTodos(updateTodo);
  };

  return (
    <div className="container">
      <form onSubmit={createTodo}>
        <input type="text" ref={todoNameRef} placeholder="Enter Todo" />
        <button onClick={createTodo}>Add</button>
      </form>
      <div className="todo-container">
        {todos.map((elem, ind) => {
          return (
            <div className="todo" key={ind}>
              <span>{elem}</span>
              <div className="btn">
                <button className="edit" onClick={() => editTodo(ind)}>
                  Edit
                </button>
                <button className="delete" onClick={() => deleteTodo(ind)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
