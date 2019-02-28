import React from "react";

const charComponent = props => {
  const style = {
    backgroundColor: "white",
    border: "1px solid #eee",
    borderRadius: "4px",
    padding: "15px",
    color: "black",
    display: "inline-block"
  };

  return (
    <p style={style} onClick={props.click}>
      {props.char}
    </p>
  );
};

export default charComponent;
