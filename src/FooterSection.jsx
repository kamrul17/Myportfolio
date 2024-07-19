import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
function FooterSection() {
  return (
    <>
      <div className="row justify-content-center text-white" id="footer">
        <div className="col-md-4 col-11 text-center my-2 ">
          <a href="https://www.instagram.com/x_lezen/">
            {" "}
            <i className="bi bi-instagram social-icon fs-1 mx-2 "></i>
          </a>
          <a href="https://www.facebook.com/kamrul.khan.98284566/">
            <i className="bi bi-facebook social-icon fs-1  mx-2"></i>
          </a>
          <a href="https://github.com/kamrul17">
            <i className="bi bi-github social-icon fs-1  mx-2"></i>
          </a>

          <a href="https://www.linkedin.com/in/kamrulansari/">
            <i className="bi bi-linkedin social-icon fs-1  mx-2"></i>
          </a>
        </div>
        <div className="d-flex justify-content-center  my-2 ">
          <a className="text-white" href="#">
            Privacy
          </a>
          <span className="px-3">|</span>
          <a className="text-white" href="#contact">
            Help
          </a>
        </div>
        <div className="d-flex justify-content-center my-2 ">
          <p className="m-0">
            <a className="text-white fw-bold" href="" target="_blank">
              Kamrul Ansari
            </a>
            &copy; All Rights Reserved
            <br />
          </p>
        </div>
      </div>
      <a href="#" className="btn px-0 back-to-top">
        <i className="bi bi-caret-up-square-fill"></i>
      </a>
    </>
  );
}
export default FooterSection;
