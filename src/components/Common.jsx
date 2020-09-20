import React from "react";
import { NavLink } from "react-router-dom";

function Common(props) {
  return (
    <>
      <div className="container-fluid ">
        <div className="row first_row d-flex  flex-column flex-md-row justify-content-center align-items-center">
          <div className="col-md-6 order-2 order-md-1 left_col d-flex  flex-column  justify-content-center ">
            <h1 className="text-md-left text-center">
              {props.title}{" "}
              <strong className="text-uppercase " style={{ color: "#3498db" }}>
                {props.strong}
              </strong>
            </h1>
            <p className="lead text-md-left text-center">
              We are a team of talented developer making websites.{" "}
            </p>
            <NavLink
              className="btn btn-info align-self-md-start align-self-center  w-25 mb-4 "
              exact
              to={props.visit}
            >
              {props.visitTitle}
            </NavLink>
          </div>
          <div className="col-md-6 mb-2 mb-md-0 order-1 order-md-2 d-flex flex-column  right_col   ">
            <img className="floating" src={props.img} alt="offcie" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Common;
