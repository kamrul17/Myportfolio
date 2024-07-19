import React from "react";
import aboutImg from "./assets/aboutImg.png";
function AboutSection() {
  const personalDetails = [
    { label: "Name", value: "Kamrul Ansari" },
    { label: "Birthday", value: "26th December, 1999" },
    { label: "Degree", value: "Bachelor of Technology (B.Tech)" },
    { label: "Experience", value: "Fresher" },
    { label: "Phone No.", value: "+91-8789577654" },
    { label: "Email", value: "kamrula786@gmail.com" },
    { label: "Address", value: "Panchet Dam, Dhanbad, Jharkhand, 828206" },
  ];
  const links = [
    { href: "https://github.com/kamrul17", label: "GitHub" },
    { href: "https://www.linkedin.com/in/kamrulansari/", label: "LinkedIn" },
    { href: "#contact", label: "Hire Me" },
  ];
  const PersonalDetails = ({ label, value }) => (
    <div className="col-sm-6 py-2">
      <h6>
        {label}: <span className="text-secondary">{value}</span>
      </h6>
    </div>
  );
  const LinkButton = ({ href, label }) => (
    <a
      href={href}
      className="All_btn"
      style={{ textDecoration: "none" }}
      target="_blank"
    >
      {label}
    </a>
  );
  return (
    <div className="row align-items-center body_color" id="about">
      <div className=" shadow-lg position-relative d-flex align-items-center justify-content-center nav_color">
        <h1
          className="display-4 text-uppercase text-white"
          style={{ WebkitTextStroke: "0.4px yellow" }}
        >
          About Me
        </h1>
      </div>
      <div className="col-lg-5 pb-4 pb-lg-0">
        <img
          className="img-fluid rounded w-100"
          src={aboutImg}
          alt="My photo"
        />
      </div>
      <div className="col-lg-7 mb-5">
        <h3 className="mb-4"> Java Full Stack Web_Developer </h3>
        <p>
          I am Kamrul Ansari, a recent graduate with a Bachelor of Technology
          (B.Tech) in Computer Science and Engineering (CSE) from Chaibasa
          Engineering College. Throughout my academic journey,I have developed a
          strong foundation in C++,Java,React js as frontend and Spring boot as
          backend.
        </p>
        <div className="row mb-3">
          {personalDetails.map((detail) => (
            <PersonalDetails
              key={detail.label}
              label={detail.label}
              value={detail.value}
            />
          ))}
        </div>
        {links.map((link) => (
          <LinkButton key={link.label} href={link.href} label={link.label} />
        ))}
      </div>
    </div>
  );
}
export default AboutSection;
