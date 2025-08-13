import { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodoFilter } from "./components/TodoFilter";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  // Add a new todo
  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: title,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  // Toggle completion
  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Update todo text
  const updateTodo = (id: number, newText: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  // Delete a todo
  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Filter todos based on selection
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // all
  });

  return (
    <div className="app p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>

      {/* Form to add todos */}
      <TodoForm onAddTodo={addTodo} />

      {/* Filter buttons */}
      <div className="mt-4">
        {/* <TodoFilter filter={filter} onChangeFilter={setFilter} /> */}
      </div>

      {/* List of todos */}
      <div className="mt-4">
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onUpdate={updateTodo}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}
