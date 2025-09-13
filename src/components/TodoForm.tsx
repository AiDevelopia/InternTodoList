import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

export interface TodoFormProps {
  onAddTodo: (title: string) => void;
  placeholder?: string;
}

export function TodoForm({
  onAddTodo,
  placeholder = "What needs to be done?",
}: TodoFormProps) {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e?: FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim()) {
      alert("Please enter a todo before adding!");
      return;
    }
    onAddTodo(inputText.trim());
    setInputText("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex w-full bg-gray-100 rounded-full px-4 py-3 sm:py-2 shadow-sm sm:flex-grow sm:flex"
      >
        <label htmlFor="todo-input" className="sr-only">
          New todo
        </label>
        <input
          id="todo-input"
          type="text"
          value={inputText}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full bg-transparent border-none focus:ring-0 focus:outline-none placeholder-gray-400 text-gray-700 text-base sm:text-sm"
        />

        {/* Desktop button */}
        <button
          type="submit"
          className="hidden sm:block bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-medium text-sm sm:text-base transition-colors"
        >
          Add
        </button>
      </form>

      {/* Mobile button */}
      <button
        onClick={() => handleSubmit()}
        className="sm:hidden w-full bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-full font-medium text-base transition-colors"
      >
        Add
      </button>
    </div>
  );
}
