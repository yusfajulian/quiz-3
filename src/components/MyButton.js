import React from "react";
import Welcome from "./Welcome";

function MyButton(props) {
  if (props.name === "") {
    return <button>Login</button>;
  } else {
    return <Welcome name={props.name} />;
  }
}

export default MyButton;
