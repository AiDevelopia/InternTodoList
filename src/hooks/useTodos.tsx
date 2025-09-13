import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
import type { Todo } from '../types/type'

export function useTodos() {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', [])
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

  const stats = {
    total: todos.length,
    active: todos.filter(todo => !todo.completed).length,
    completed: todos.filter(todo => todo.completed).length,
  }

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false }
    setTodos(prev => [...prev, newTodo])
  }

  const toggleTodoById = (id: number) => {
    setTodos(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    )
  }

  const updateTodo = (id: number, text: string) => {
    setTodos(prev => prev.map(todo => (todo.id === id ? { ...todo, text } : todo)))
  }

  const removeTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const clearCompletedTodos = () => {
    setTodos(prev => prev.filter(todo => !todo.completed))
  }

  const toggleAllTodos = () => {
    const allCompleted = todos.every(todo => todo.completed)
    setTodos(prev => prev.map(todo => ({ ...todo, completed: !allCompleted })))
  }

  return {
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
  }
}
