import { useState } from "react";
import FormAddTodo from "./components/FormAddTodo";

interface Todo {
  text: string,
  complete: boolean
}

const initialTodos = [
  {
    text: "aprender react",
    complete: false,
  },
  {
    text: "aprender typescript",
    complete: false,
  },
  {
    text: "aprender python",
    complete: true,
  },
]

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  return (
    <div className="container">
      <h1>Todo</h1>
      <FormAddTodo />
      <div>
        {todos.map((todo) => (
          <article key={todo.text}>
            <label htmlFor="todo">
              <input type="checkbox" checked={todo.complete} />
              {todo.text}
            </label>
          </article>
        ))}
      </div>
    </div>
  );
};

export default App;
