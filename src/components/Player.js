import React from "react"; //optional

//add a return statement that will return the Player HTML from the project overview reading
function Player(props) {

    return (
      <article className="Player">
        <h1>{props.firstName} <span>{props.gamerTag}</span> {props.lastName}</h1>
        {/* To be shown when there is no wins */}<h2 className="zero">Currently with no wins </h2>:(
        {/* To be shown when there is 1 win */}<h2>Currently at 1 win</h2>
        {/* To be shown when there is more than one win */}<h2>Currently at {props.wins} wins</h2>
      </article>
    );
  }

//after function, write statement to export it
export default Player;