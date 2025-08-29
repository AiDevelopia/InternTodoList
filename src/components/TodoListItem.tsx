import { useState } from "react";
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

  const handleSave = () => {
    if (editText.trim() !== "") {
      onUpdate(todo.id, editText.trim());
      setIsEditing(false);
    }
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
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
            className="border rounded px-2 py-1"
            autoFocus
          />
        ) : (
          <span
            onDoubleClick={() => setIsEditing(true)}
            className={`cursor-pointer ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      {/* Delete button */}
      <button
        onClick={() => onDelete(todo.id)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </li>
  );
};
