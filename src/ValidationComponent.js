import React from "react";

const validationComponent = props => {
  return (
    <div>
      <p>Length from Validation component: {props.length}</p>
      {props.length <= 5 && <p>Text too short</p>}
    </div>
  );
};

export default validationComponent;
