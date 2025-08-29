import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodoFilter } from "./components/TodoFilter";
import { useTodos } from "./hooks/useTodos";

function App() {
  const {
    todos,
    filter,
    stats,
    setFilter,
    addTodo,
    toggleTodoById,
    updateTodo,
    removeTodo,
    clearCompletedTodos,
    toggleAllTodos,
  } = useTodos();

  return (
    <div className="min-h-screen text-gray-800 flex items-center justify-center font-sans">
      <div className="app p-6 max-w-lg w-full bg-white shadow-md rounded-xl">
        <header className="app-header mb-6 text-center">
          <h1 className="text-2xl font-bold">Todo App</h1>
          <p className="text-gray-500">Stay organized and get things done!</p>
        </header>

        <main className="app-main space-y-4">
          {/* Add new todos */}
          <TodoForm onAddTodo={addTodo} />

          {/* ✅ Filter & stats come before the list */}
          {stats.total > 0 && (
            <TodoFilter
              currentFilter={filter}
              onFilterChange={setFilter}
              stats={stats}
              onClearCompleted={clearCompletedTodos}
              onToggleAll={toggleAllTodos}
            />
          )}

          {/* List of todos */}
          <TodoList
            todos={todos}
            onToggle={toggleTodoById}
            onUpdate={updateTodo}
            onDelete={removeTodo}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
