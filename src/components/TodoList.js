import React from "react";
import Todo from "./Todo";
const TodoList = ({ filterdTodos, todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list"></ul>
      {filterdTodos.map((todo) => (
        <Todo
          setTodos={setTodos}
          todos={todos}
          todo={todo}
          key={todo.id}
          text={todo.text}
        />
      ))}
    </div>
  );
};
export default TodoList;
