

import type { FC } from "react";
import { TodoListItem } from "./TodoListItem"; // import the new component

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onUpdate: (id: number, newText: string) => void;
  onDelete: (id: number) => void;
}

export const TodoList: FC<TodoListProps> = ({
  todos,
  onToggle,
  onUpdate,
  onDelete,
}) => {
  if (todos.length === 0) {
    return (
      <p>
        What do you plan on doing today? Add it to the list and let's crush some
        goals!
      </p>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Todos</h2>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};
