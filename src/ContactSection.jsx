import React from "react";
function ContactSection() {
  return (
    <div className="row justify-content-center body_color" id="contact">
      <div className="shadow-lg d-flex align-items-center justify-content-center nav_color">
        <h1
          className="display-4 text-uppercase text-white mb-3"
          style={{ WebkitTextStroke: "0.4px yellow" }}
        >
          Contact
        </h1>
      </div>
      <div className="col-md-4  ">
        <div className="my-3 ">
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
      </div>
      <div className="col-md-4">
        <div className="my-3">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
          />
        </div>
      </div>
      <div className="col-md-8">
        <div className="my-3">
          <input type="text" className="form-control" placeholder="Subject" />
        </div>
      </div>
      <div className="col-md-8">
        <div className="my-3">
          <textarea
            className="form-control"
            placeholder="Message"
            rows="3"
          ></textarea>
        </div>
      </div>
      <div className="col-md-8  d-flex align-items-center justify-content-center ">
        <button type="button" className="All_btn ">
          {" "}
          Send Message
        </button>
      </div>
    </div>
  );
}
export default ContactSection;
