import React from "react";

function Filters(props) {
  function showAll() {
    props.setFilter("all");
  }

  function showCompleted() {
    props.setFilter("completed");
  }
  function showActive() {
    props.setFilter("active");
  }

  return (
    <div>
      <button onClick={showAll}>All</button>
      <button onClick={showCompleted}>Completed</button>
      <button onClick={showActive}> Active</button>
    </div>
  );
}
export default Filters;
