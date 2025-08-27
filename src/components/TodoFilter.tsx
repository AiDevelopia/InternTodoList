import type { TodoFilter as FilterType, TodoStats } from '../types/todo';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  stats: TodoStats;
  onClearCompleted: () => void;
  onToggleAll: () => void;
}

export function TodoFilter({ 
  currentFilter, 
  onFilterChange, 
  stats, 
  onClearCompleted,
  onToggleAll 
}: TodoFilterProps) {
  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' },
  ];

  return (
    <div className="todo-footer">
      <div className="todo-stats">
        <span className="todo-count">
          {stats.active} {stats.active === 1 ? 'item' : 'items'} left
        </span>
        {stats.total > 0 && (
          <button
            onClick={onToggleAll}
            className="toggle-all-btn"
            title={stats.active > 0 ? 'Mark all as complete' : 'Mark all as active'}
          >
            {stats.active > 0 ? '☐' : '☑'} Toggle All
          </button>
        )}
      </div>

      <div className="filter-buttons">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            className={`filter-btn ${currentFilter === key ? 'active' : ''}`}
          >
            {label}
            {key === 'active' && stats.active > 0 && (
              <span className="count-badge">{stats.active}</span>
            )}
            {key === 'completed' && stats.completed > 0 && (
              <span className="count-badge">{stats.completed}</span>
            )}
          </button>
        ))}
      </div>

      {stats.completed > 0 && (
        <button
          onClick={onClearCompleted}
          className="clear-completed-btn"
        >
          Clear Completed ({stats.completed})
        </button>
      )}
    </div>
  );
}
