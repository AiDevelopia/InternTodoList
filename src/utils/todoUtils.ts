import type { Todo, TodoFilter, TodoStats } from '../types/todo';

// Generate unique ID for todos
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Create a new todo
export const createTodo = (text: string): Todo => {
  const now = new Date();
  return {
    id: generateId(),
    text: text.trim(),
    completed: false,
    createdAt: now,
    updatedAt: now,
  };
};

// Filter todos based on filter type
export const filterTodos = (todos: Todo[], filter: TodoFilter): Todo[] => {
  switch (filter) {
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    case 'all':
    default:
      return todos;
  }
};

// Calculate todo statistics
export const getTodoStats = (todos: Todo[]): TodoStats => {
  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const active = total - completed;

  return { total, active, completed };
};

// Toggle todo completion status
export const toggleTodo = (todos: Todo[], id: string): Todo[] => {
  return todos.map(todo =>
    todo.id === id
      ? { ...todo, completed: !todo.completed, updatedAt: new Date() }
      : todo
  );
};

// Update todo text
export const updateTodoText = (todos: Todo[], id: string, newText: string): Todo[] => {
  return todos.map(todo =>
    todo.id === id
      ? { ...todo, text: newText.trim(), updatedAt: new Date() }
      : todo
  );
};

// Delete todo
export const deleteTodo = (todos: Todo[], id: string): Todo[] => {
  return todos.filter(todo => todo.id !== id);
};

// Clear completed todos
export const clearCompleted = (todos: Todo[]): Todo[] => {
  return todos.filter(todo => !todo.completed);
};
