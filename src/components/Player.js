import React from "react"; //optional

//add a return statement that will return the Player HTML from the project overview reading
function Player() {
  return (
    <article className="Player">
      <h1>
        John <span>Secret</span> Doe
      </h1>
      {/* to be shown when there are no wins */}
      <h2 className="zero">Currently with no wins :( </h2>
      {/* to be shown when there is 1 win */}
      <h2>Currently at 1 win</h2>
      {/* to be shown when there are multiple wins */}
      <h2>Currently at 1+ wins</h2>
    </article>
  );
}

//after function, write statement to export it
export default Player;