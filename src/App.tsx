import './App.css'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { TodoFilter } from './components/TodoFilter'
import { useTodos } from './hooks/useTodos'

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
    <div className="app">
      <header className="app-header">
        <h1>Todo App</h1>
        <p>Stay organized and get things done!</p>
      </header>

      <main className="app-main">
        <TodoForm onAddTodo={addTodo} />
        
        <TodoList
          todos={todos}
          onToggle={toggleTodoById}
          onUpdate={updateTodo}
          onDelete={removeTodo}
        />
        
        {stats.total > 0 && (
          <TodoFilter
            currentFilter={filter}
            onFilterChange={setFilter}
            stats={stats}
            onClearCompleted={clearCompletedTodos}
            onToggleAll={toggleAllTodos}
          />
        )}
      </main>
    </div>
  )
}

export default App
