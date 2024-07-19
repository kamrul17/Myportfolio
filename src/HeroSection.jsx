import React from "react";
import ProfilePic from "./assets/mainIMg.webp";
import CV from "./assets/Kamrul_Resume.pdf";
function HeroSection() {
  return (
    // <div className="container-fluid  justify-content-center ">
    <div
      className="row  d-flex align-items-center justify-content-center "
      id="banner"
    >
      <div className="col-md-6 col-11 my-4 text-center " id="bannertext">
        <div className="name_section ">
          Hi, My name is <span className="purple">Kamrul Ansari</span>
          <div>and I am a passionate</div>
          <div className="sec-text purple">
            <span className="purple">Full Stack Java Developer</span>
          </div>
        </div>
        <a href={CV} download>
          <button type="button" className="All_btn mt-3">
            Download CV
          </button>
        </a>
      </div>
      <div className="col-md-4 d-md-block my-3  text-center">
        <div id="bannerimg">
          <img
            src={ProfilePic}
            alt="dogimage"
            className="img-fluid"
            id="my_img"
          />
        </div>
      </div>
    </div>
    // </div>
  );
}
export default HeroSection;
