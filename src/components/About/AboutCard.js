import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, my name is <span className="purple">Amir Hackett </span>
            from <span className="purple"> Brooklyn, New York.</span>
            <br /> 
            I'm proficient in both backend and frontend programming. I'm excited to improve my skills and learning new technologies. 
            <br />
            Additionally, I am currently employed as a software engineer at
            Solodev.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching F1
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Amir</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
