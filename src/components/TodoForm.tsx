import { useState } from 'react';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
  placeholder?: string;
}

export function TodoForm({ onAddTodo, placeholder = "What needs to be done?" }: TodoFormProps) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      onAddTodo(inputText);
      setInputText('');
    }
  };

  return (
    
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder={placeholder}
        className="todo-input"
        autoFocus
      />
      <button type="submit" className="add-btn">
        Add Todo
      </button>
    </form>
  );


}
