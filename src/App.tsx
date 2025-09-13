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

  // ✅ Apply filter logic here
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // "all"
  });

  return (
    <div className="min-h-screen text-gray-800 flex items-center justify-center font-sans p-4 sm:p-6">
      <div className="app p-4 sm:p-6 lg:p-8 max-w-full sm:max-w-2xl md:max-w-3xl w-full bg-white shadow-md rounded-xl">
      <header className="app-header mb-6 text-center"> 
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
    Todo App 
    <span className="text-xl sm:text-2xl lg:text-3xl relative -top-3 ml-1">🎯</span>
  </h1>
  <p className="text-gray-500 text-sm sm:text-base">
    Stay organized and get things done!
  </p>
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

  {/* ✅ Todo list logic */}
  {filter === "completed" && filteredTodos.length === 0 ? (
    <p className="text-center text-gray-500 italic">
      You haven't had any completed task yet
    </p>
  ) : filter === "active" && filteredTodos.length === 0 ? (
    <p className="text-center text-gray-500 italic">
      You don’t have any active tasks right now 🎉
    </p>
  ) : (
    <TodoList
      todos={filteredTodos}
      onToggle={toggleTodoById}
      onUpdate={updateTodo}
      onDelete={removeTodo}
    />
  )}
</main>

      </div>
    </div>
  );
}

export default App;
