import React from "react";

interface TodoFilterProps {
  currentFilter: "all" | "active" | "completed";
  onFilterChange: (filter: "all" | "active" | "completed") => void;
  stats: { total: number; active: number; completed: number };
  onClearCompleted: () => void;
  onToggleAll: () => void;
}

export function TodoFilter({
  currentFilter,
  onFilterChange,
  stats,
  onClearCompleted,
  onToggleAll,
}: TodoFilterProps) {
  return (
    <div className="todo-filter">
      <button
        disabled={currentFilter === "all"}
        onClick={() => onFilterChange("all")}
      >
        All
      </button>
      <button
        disabled={currentFilter === "active"}
        onClick={() => onFilterChange("active")}
      >
        Active
      </button>
      <button
        disabled={currentFilter === "completed"}
        onClick={() => onFilterChange("completed")}
      >
        Completed
      </button>

      <div>
        <span>Total: {stats.total}</span>
        <span>Active: {stats.active}</span>
        <span>Completed: {stats.completed}</span>
      </div>

      <button onClick={onClearCompleted}>Clear Completed</button>
      <button onClick={onToggleAll}>Toggle All</button>
    </div>
  );
}
