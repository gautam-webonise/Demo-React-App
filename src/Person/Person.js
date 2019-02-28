import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="person">
      <p onClick={props.click}>Name:{props.name}</p>
      <p>Age:{props.age}</p>
      {props.children ? <p>{props.children}</p> : null}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
