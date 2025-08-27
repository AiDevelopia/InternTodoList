import { useState, useMemo } from 'react';
import type { Todo, TodoFilter } from '../types/todo';
import { useLocalStorage } from './useLocalStorage';
import {
  createTodo,
  filterTodos,
  getTodoStats,
  toggleTodo,
  updateTodoText,
  deleteTodo,
  clearCompleted,
} from '../utils/todoUtils';

export function useTodos() {
  // Persist todos in localStorage
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  const [filter, setFilter] = useState<TodoFilter>('all');

  // Memoized filtered todos and stats
  const filteredTodos = useMemo(() => filterTodos(todos, filter), [todos, filter]);
  const stats = useMemo(() => getTodoStats(todos), [todos]);

  // Todo operations
  const addTodo = (text: string) => {
    if (text.trim()) {
      const newTodo = createTodo(text);
      setTodos(prev => [...prev, newTodo]);
    }
  };

  const toggleTodoById = (id: string) => {
    setTodos(prev => toggleTodo(prev, id));
  };

  const updateTodo = (id: string, newText: string) => {
    if (newText.trim()) {
      setTodos(prev => updateTodoText(prev, id, newText));
    }
  };

  const removeTodo = (id: string) => {
    setTodos(prev => deleteTodo(prev, id));
  };

  const clearCompletedTodos = () => {
    setTodos(prev => clearCompleted(prev));
  };

  const toggleAllTodos = () => {
    const allCompleted = todos.every(todo => todo.completed);
    setTodos(prev =>
      prev.map(todo => ({
        ...todo,
        completed: !allCompleted,
        updatedAt: new Date(),
      }))
    );
  };

  return {
    todos: filteredTodos,
    allTodos: todos,
    filter,
    stats,
    setFilter,
    addTodo,
    toggleTodoById,
    updateTodo,
    removeTodo,
    clearCompletedTodos,
    toggleAllTodos,
  };
}
