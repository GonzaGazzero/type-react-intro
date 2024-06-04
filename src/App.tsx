import { useState } from "react";

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
      <form>
        <label htmlFor="todo">
          Todo
          <input type="text" id="todo" placeholder="Ingrese Todo" />
          <button type="submit">Add todo</button>
        </label>
      </form>
    </div>
  );
};

export default App;
