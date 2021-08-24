import React from "react";
const Form = (setInputText, todos, setTodos, inputText) => {
  const InputTextHandler = (e) => {
    e.preventDefault();
    console.log(setInputText);
    setInputText = [e.target.value];
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(todos);
    setTodos = [
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 100 }
    ];
  };
  return (
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
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
