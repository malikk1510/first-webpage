import React from "react";
import Card from "./Card";

function Services() {
  return (
    <>
      <div className="container-fluid  ">
        <div className="row ">
          <div className=" col-md-12 d-flex justify-content-center align-items-center">
            <h1>Our services</h1>
          </div>
        </div>
        <div className="row ">
          <div className=" col-md-12 d-flex justify-content-center flex-wrap align-items-center">
            <Card img="https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336378_1280.jpg" />
            <Card img="https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_1280.jpg" />
            <Card img="https://cdn.pixabay.com/photo/2015/01/09/11/09/startup-594091_1280.jpg" />
            <Card img="https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336378_1280.jpg" />
            <Card img="https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_1280.jpg" />
            <Card img="https://cdn.pixabay.com/photo/2015/01/09/11/09/startup-594091_1280.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
