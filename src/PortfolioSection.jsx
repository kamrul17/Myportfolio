import React from "react";
import Pic1 from "./assets/p1.png";
import Pic2 from "./assets/p2.png";
import Pic3 from "./assets/p3.png";
function PortfolioSection() {
  const allProject = [
    { img: Pic1, href: "https://kamrul17.github.io/payment-gateway/" },
    { img: Pic2, href: "https://kamrul17.github.io/QuoteGenerator/" },
    { img: Pic3, href: "https://kamrul17.github.io/RockPaperScissors/" },
  ];
  return (
    <div className="row  justify-content-evenly body_color" id="portfolio">
      <div className="shadow-lg d-flex align-items-center justify-content-center nav_color">
        <h1
          className="display-4 text-uppercase text-white"
          style={{ WebkitTextStroke: "0.4px yellow" }}
        >
          Portfolio
        </h1>
      </div>
      {allProject.map((project, index) => (
        <div
          key={index}
          className="card col-md-3 text-center mt-5 mb-5 bg-transparent border border-4"
          style={{ width: "18rem" }}
        >
          <img src={project.img} className="card-img-top mt-4" alt="..." />
          <div className="card-body mt-3">
            <a href={project.href} className="All_btn">
              Go Live
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
export default PortfolioSection;
