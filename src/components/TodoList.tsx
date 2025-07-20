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

  const routineItem = myMorningRoutine.map((routine, index) => <li key={index}>{routine}</li>);
  return (
    <div>
      {myMorningRoutine.length === 0 ?
      ( 
        <p>
          What do you plan on doing today! Add it to the list and let's crush
          some goals
        </p>
      ) : (<ul>{routineItem}</ul>)}
    </div>
  );
}
