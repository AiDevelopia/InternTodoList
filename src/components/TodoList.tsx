// import React from 'react';
import type { TodoListProps } from "../types/todo";

// export function TodoList() {
//   return (
//     <div>

//       <ul>
//         <li> Wake up </li>
//         <li> 30 pushups </li>
//         <li> Drink water </li>
//         <li> Read an article on webdev</li>
//         <li> Make todolist for the day</li>
//         <li> Code for 30mins </li>
//         <li> Ready for class </li>
//       </ul>
//     </div>
//   );
// }

export function TodoList() {
  const myMorningRoutine = [
    "Wake Up",
    "30 Pushups",
    "Drink water",
    "Read an article on Web dev",
    "Make a TodoList for the day",
    "Code for 30 Mins",
    "Ready for class",
  ];

  const routineItem = myMorningRoutine.map((routine, index) => (
    <li key={index}>{routine}</li>
  ));
  return (
    <div>
      {myMorningRoutine.length === 0 ? (
        <p>
          What do you plan on doing today! Add it to the list and let's crush
          some goals
        </p>
      ) : (
        <ul>{routineItem}</ul>
      )}
    </div>
  );
}

function TodoList2(props: TodoListProps) {
  // destructure the props to make them easier to use
  const { todos, onToggle, onUpdate, onDelete } = props;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-100 p-2 rounded mb-2"
          >
            {/* Click the text to mark as done or not */}
            <span
              onClick={() => onToggle(todo.id)}
              className={`cursor-pointer ${
                todo.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {todo.text}
            </span>

            {/* Edit and delete buttons */}
            <div className="space-x-2">
              <button
                onClick={() => {
                  const newText = prompt("Edit your todo", todo.text);
                  if (newText !== null && newText.trim() !== "") {
                    onUpdate(todo.id, newText);
                  }
                }}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(todo.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
