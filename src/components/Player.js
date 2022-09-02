import React from "react"; //optional

//add a return statement that will return the Player HTML from the project overview reading
function Player (props) {
  return (
    <article className="Player">
      <h1>{props.firstName} <span>{props.gamerTag}</span> {props.lastName}</h1>
      {props.wins === 0 && <h2 className="zero">Currently with no wins</h2>}
      {props.wins === 1 && <h2>Currently at {props.wins} win</h2>}
      {props.wins > 1 && <h2>Currently at {props.wins} wins</h2>}
    </article>
  );
};

//after function, write statement to export it
export default Player;