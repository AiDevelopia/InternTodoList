export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onUpdate: (id: number, newText: string) => void;
  onDelete: (id: number) => void;
}
