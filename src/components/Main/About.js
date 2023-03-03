import React, { useState, useEffect } from "react";
import Nav from "../Header/Nav";
import Footer from "../Footer/Footer";
import { animated, useSpring } from "@react-spring/web";
import "./About.css";

function About() {
  const [loaded, setLoaded] = useState(false);

  const skills = [
    { name: "React", level: 80 },
    { name: "Node", level: 50 },
    { name: "Express", level: 60 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "PHP", level: 85 },
    { name: "MySQL", level: 80 },
    { name: "PostgreSQL", level: 50 },
    { name: "MongoDB", level: 66 },
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  return (
    <div>
      <Nav />
      <div className="main">
        <animated.div style={style}>
          <section className="about">
            <div className="about__info">
              <img
                className="about__image"
                src="https://media.licdn.com/dms/image/C5603AQG4owklox6HkA/profile-displayphoto-shrink_200_200/0/1517013629179?e=1683158400&v=beta&t=Hyl7RuBmoun7IBlJPiUsTvn9j2enMu08Bw4ToPpnhGU"
                alt=""
              />
              <div className="about__author">
                <h1 className="about__name">Kerwin Thompson</h1>
                <h4 className="about__title">
                  Software Engineer | Full Stack Developer
                </h4>
                <ul className="about__skills-list">
                  {skills.map((skill) => {
                    return (
                      <li className="about__skill" key={skill.name}>
                        <span>{skill.name}</span>
                        <div className="about__progress-bar">
                          <div
                            className="about__progress-bar-fill"
                            style={{ width: loaded ? `${skill.level}%` : "0%" }}
                          ></div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>
        </animated.div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
