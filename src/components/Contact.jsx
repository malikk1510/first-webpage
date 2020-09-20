import React, { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const submit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullname} `);
  };

  return (
    <>
      <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <h1  className="text-center">Contact</h1>
        </div>
      </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <form onSubmit={submit}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Full name
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={inputEvent}
                  name="fullname"
                  value={data.fullname}
                  placeholder="Enter your name.. "
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={inputEvent}
                  name="phone"
                  value={data.phone}
                  placeholder="Enter your phone no.."
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  onChange={inputEvent}
                  name="email"
                  value={data.email}
                  placeholder="Enter your email address.."
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={inputEvent}
                  name="message"
                  value={data.message}
                  placeholder="Message for us.."
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
