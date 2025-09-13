import { useState, useRef, useEffect } from "react";
import type { FC } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onUpdate: (id: number, newText: string) => void;
  onDelete: (id: number) => void;
}

export const TodoListItem: FC<TodoListItemProps> = ({
  todo,
  onToggle,
  onUpdate,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when editing starts
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleDone = () => {
    if (editText.trim() !== "") {
      onUpdate(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text); // reset to original text
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between bg-gray-100 p-2 rounded">
      <div className="flex items-center gap-2">
        {/* Toggle completion */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="cursor-pointer"
        />

        {/* Inline edit or text */}
        {isEditing ? (
        <input
  ref={inputRef}
  value={editText}
  onChange={(e) => setEditText(e.target.value)}
  className="border rounded px-3 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400 text-left"
/>
        ) : (
          <span
  onDoubleClick={() => setIsEditing(true)}
  className={`cursor-pointer break-words text-base text-left ${
    todo.completed ? "line-through text-gray-400" : "text-gray-800"
  }`}
>
  {todo.text}
</span>
        )}
      </div>

      <div className="flex gap-2">
        {/* Edit / Done / Cancel buttons */}
        {isEditing ? (
          <>
            <button
              onClick={handleDone}
              className="bg-green-500 text-white px-2 py-1 rounded"
            >
              Done
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-400 text-white px-2 py-1 rounded"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white px-2 py-1 rounded"
          >
            Edit
          </button>
        )}

        {/* Delete button */}
        <button
          onClick={() => onDelete(todo.id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
};
