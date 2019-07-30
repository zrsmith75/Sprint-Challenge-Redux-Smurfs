import React from "react";
import "./smurfs.css";

const Smurf = props => {
  // console.log(props);
  // console.log("hello");

  // SmurfList renders Smurfs

  return (
    <article className="smurf">
      <h1>{props.smurf.name}</h1>
      <p>{props.smurf.age} smurf years old</p>
      <p>{props.smurf.height} tall</p>
    </article>
  );
};

export default Smurf;
