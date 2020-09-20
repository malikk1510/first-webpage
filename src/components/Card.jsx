import React from "react";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="card mr-3 mb-3" style={{ width: "25rem" }}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body ">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <NavLink exact to="/" className="btn btn-primary">
            Go somewhere
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Card;
