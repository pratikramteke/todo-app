import React, { useRef, useState } from "react";
import style from "./style.css";
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
      <input type="text" ref={todoNameRef} placeholder="Enter Todo" />
      <button onClick={createTodo}>Add</button>
      <div className="todo-container">
        {todos.map((elem, ind) => {
          return (
            <div className="todo">
              <span className={style} key={ind}>
                {elem}
              </span>
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
