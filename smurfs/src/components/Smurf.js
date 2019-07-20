import React from "react";
import "./smurfs.css";

const Smurf = props => {
  // console.log(props);
  return (
    <article className="smurf">
      <h1>{props.name}</h1>
      <p>{props.age} smurf years old</p>
      <p>{props.height} CM tall</p>
    </article>
  );
};

export default Smurf;
