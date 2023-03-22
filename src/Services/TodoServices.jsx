import { useEffect, useState } from "react";
import http from "./BaseService";

export const listTodos = () => http.get("/todos");

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    listTodos()
      .then((todos) => {
        setTodos(todos);
      })

      .catch((err) => console.error(err));
  }, []);
};

return (
  <div className="todos">
    {todos.map((todo) => {
      return <Todo key={todo.id} />;
    })}
  </div>
);

export default TodoList;
