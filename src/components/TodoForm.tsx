// import { useState } from 'react';

// export function TodoForm ({ onAddTodo, placeholder = "What needs to be done?" }: TodoFormProps)
// {

//     const [inputText, setInputText] = useState("");

// return( )
// }

// import React, { useState } from "react";

// // Define the expected props
// type TodoFormProps = {
//   addTodo: (text: string) => void;
// };

// const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
//   // This state holds the text the user types in
//   const [text, setText] = useState("");

//   // This function runs when the form is submitted
//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault(); // Prevent page reload

//     // Don't do anything if the input is empty or just spaces
//     if (text.trim() === "") return;

//     // Call the function passed from the parent component
//     addTodo(text.trim());

//     // Clear the input box
//     setText("");
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex gap-2 p-4 bg-white rounded-xl shadow-md"
//     >
//       {/* Input for typing task */}
//       <input
//         type="text"
//         placeholder="Enter a new task"
//         value={text}
//         onChange={(e) => setText(e.target.value)} // Update state on every keystroke
//         className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />

//       {/* Button to add the task */}
//       <button
//         type="submit"
//         className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//       >
//         Add
//       </button>
//     </form>
//   );
// };

// export default TodoForm;

// import React, { useState, FormEvent } from "react";

// interface TodoFormProps {
//   onAddTodo: (title: string) => void;
// }

// const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
//   const [title, setTitle] = useState("");

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     if (!title.trim()) return; // Ignore empty input
//     onAddTodo(title.trim());
//     setTitle(""); // Reset input
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex items-center gap-2 bg-white shadow-md p-3 rounded-xl w-full"
//     >
//       <input
//         type="text"
//         placeholder="Add a new task..."
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <button
//         type="submit"
//         className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all"
//       >
//         Add
//       </button>
//     </form>
//   );
// };

// export default TodoForm;

// import React, { useState } from "react";
// import type { FormEvent } from "react";

// interface TodoFormProps {
//   onAddTodo: (title: string) => void;
// }

// const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
//   const [title, setTitle] = useState("");

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     if (!title.trim()) return;
//     onAddTodo(title.trim());
//     setTitle("");
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex items-center gap-2 bg-white shadow-md p-3 rounded-xl w-full"
//     >
//       <input
//         type="text"
//         placeholder="Add a new task..."
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <button
//         type="submit"
//         className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all"
//       >
//         Add
//       </button>
//     </form>
//   );
// };

// export default TodoForm;

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onAddTodo(inputText.trim());
    setInputText("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 w-full bg-gray-100 rounded-full px-4 py-2 shadow-sm"
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
        className="flex-grow bg-transparent border-none focus:ring-0 focus:outline-none placeholder-gray-400 text-gray-700"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-medium transition-colors"
      >
        Add
      </button>
    </form>
  );
}
