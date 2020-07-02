import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h4>{props.id}</h4>
          <h2 className="name">{props.name}</h2>
          <Avatar imgURL={props.imgURL} />
        </div>
        <div className="bottom">
          <Details DetailInfo={props.phone} />
          <Details DetailInfo={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Card;
