import React, { useState, useEffect } from "react";
import Nav from "../Header/Nav";
import Footer from "../Footer/Footer";
import { animated, useSpring } from "@react-spring/web";
import "./About.css";

function About() {
  const [loaded, setLoaded] = useState(false);

  const skills = [
    { lang: "Node", level: 70 },
    { lang: "React", level: 85 },
    { lang: "Express", level: 75 },
    { lang: "MongoDB", level: 80 },
    { lang: "JavaScript", level: 80 },
    { lang: "PHP", level: 90 },
    { lang: "MySQL", level: 90 },
    { lang: "PostgreSQL", level: 70 },
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
                alt="Kerwin Thompson"
              />
              <div className="about__author">
                <h1 className="about__name">Kerwin Thompson</h1>
                <h4 className="about__title">
                  Software Engineer | Full Stack Developer
                </h4>
                <ul className="about__skills-list">
                  {skills.map((skill, i) => {
                    return (
                      <li className="about__skill" key={i}>
                        <span>{skill.lang}</span>
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
