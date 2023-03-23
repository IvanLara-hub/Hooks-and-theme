import React, { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import { listTodos } from "../../Services/TodoServices";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    listTodos()
      .then((todos) => {
        setTodos(todos);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="m-auto mt-5" style={{ width: "500px" }}>
      <ul className="list-group">
        {todos.map((todo) => {
          return <Todo key={todo.id} {...todo} />;
        })}
      </ul>
    </div>
  );
};
export default TodoList;
