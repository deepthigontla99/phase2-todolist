import "./styles.css";
import React, { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
//import Todo from "./components/Todo";
export default function App() {
  //const [todos:any[], Text]=useState("");
  useEffect(() => {
    getLocalTodos();
  }, []);
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterdTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const InputTextHandler = (e) => {
    e.preventDefault();
    //console.log(setInputText);
    setInputText(e.target.value);
  };
  const setStatusHandler = (e) => {
    setStatus(e.target.value);
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(todos);
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 100 }
    ]);
    //console.log(setTodos);
  };
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let Todolocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(Todolocal);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Todo List Apllication</h1>
      </header>
      <form>
        <input
          value={inputText}
          onChange={InputTextHandler}
          type="text"
          className="todo-input"
        />
        <button onClick={SubmitHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select" onChange={setStatusHandler}>
          <select name="todos" className="filter-todo">
            <option onClick={filterHandler} value="all">
              All
            </option>
            <option onClick={filterHandler} value="completed">
              Completed
            </option>
            <option onClick={filterHandler} value="uncompleted">
              Uncompleted
            </option>
          </select>
        </div>
      </form>
      <TodoList filterdTodos={filterdTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}
