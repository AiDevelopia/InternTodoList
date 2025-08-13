// src/components/TodoFilter.tsx
import type { FC } from "react";

interface TodoFilterProps {
  filter: string;
  onChangeFilter: (filter: string) => void;
}

export const TodoFilter: FC<TodoFilterProps> = ({ filter, onChangeFilter }) => {
  return (
    <div>
      <button onClick={() => onChangeFilter("all")} disabled={filter === "all"}>
        All
      </button>
      <button
        onClick={() => onChangeFilter("active")}
        disabled={filter === "active"}
      >
        Active
      </button>
      <button
        onClick={() => onChangeFilter("completed")}
        disabled={filter === "completed"}
      >
        Completed
      </button>
    </div>
  );
};
