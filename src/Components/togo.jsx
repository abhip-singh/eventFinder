import React from 'react';

function ToGo(props) {

  function handleDelete(){
    props.onDelete(props.id);
  }

  return (
    <div className="togo">
      <h1>{props.title}</h1>
      <h1>{props.date}</h1>
      <h1>{props.price}</h1>
      <h1>{props.location}</h1>
      <p>{props.description}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default ToGo;