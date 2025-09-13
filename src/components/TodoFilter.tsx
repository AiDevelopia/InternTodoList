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
  const buttonBase =
    "px-3 py-1 rounded-md text-sm font-medium border transition-colors";

  const activeStyles = {
    all: "bg-purple-600 text-white border-purple-600",
    active: "bg-blue-600 text-white border-blue-600",
    completed: "bg-green-600 text-white border-green-600",
  };

  const inactiveStyle =
    "bg-white text-gray-600 border-gray-300 hover:bg-gray-100 hover:text-gray-800";

  return (
    <div className="flex flex-col items-center gap-4 w-full text-center p-4">
      {/* Filter buttons */}
      <div className="flex gap-2 flex-wrap justify-center">
        <button
          onClick={() => onFilterChange("all")}
          className={`${buttonBase} ${
            currentFilter === "all" ? activeStyles.all : inactiveStyle
          }`}
        >
          All
        </button>
        <button
          onClick={() => onFilterChange("active")}
          className={`${buttonBase} ${
            currentFilter === "active" ? activeStyles.active : inactiveStyle
          }`}
        >
          Active
        </button>
        <button
          onClick={() => onFilterChange("completed")}
          className={`${buttonBase} ${
            currentFilter === "completed" ? activeStyles.completed : inactiveStyle
          }`}
        >
          Completed
        </button>
      </div>

      {/* Stats */}
      <div className="flex gap-4 text-sm text-gray-700 flex-wrap justify-center">
        <span>Total: {stats.total}</span>
        <span>Active: {stats.active}</span>
        <span>Completed: {stats.completed}</span>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 flex-wrap justify-center">
        <button
          onClick={onClearCompleted}
          className="px-3 py-1 rounded-md border border-red-500 text-red-500 text-sm font-medium hover:bg-red-500 hover:text-white transition"
        >
          Clear Completed
        </button>
        <button
          onClick={onToggleAll}
          className="px-3 py-1 rounded-md border border-gray-600 text-gray-700 text-sm font-medium hover:bg-gray-700 hover:text-white transition"
        >
          Toggle All
        </button>
      </div>
    </div>
  );
}
