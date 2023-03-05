import React, { useState, useEffect } from "react";
import Nav from "../Header/Nav";
import Footer from "../Footer/Footer";
import { animated, useSpring } from "@react-spring/web";
import "./About.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaGithubAlt,
} from "react-icons/fa";

function About() {
  const [loaded, setLoaded] = useState(false);

  const skills = [
    { lang: "Node", level: 70 },
    { lang: "React", level: 85 },
    { lang: "Express", level: 75 },
    { lang: "MongoDB", level: 80 },
    { lang: "JavaScript", level: 80 },
    { lang: "PHP", level: 90 },
    { lang: "SQL", level: 90 },
    { lang: "Git", level: 75 },
  ];

  const SocialShare = [
    {
      Social: <FaFacebookF className="about__social-icon about__facebook " />,
      link: "https://www.facebook.com/kerwinbendavid",
    },
    {
      Social: <FaLinkedinIn className="about__social-icon about__linkedin" />,
      link: "https://www.linkedin.com/in/kerwindows/",
    },
    {
      Social: <FaInstagram className="about__social-icon about__instagram" />,
      link: "https://www.instagram.com/kerwindows",
    },
    {
      Social: <FaGithubAlt className="about__social-icon about__github" />,
      link: "https://github.com/kerwindows",
    },
    {
      Social: <FaWhatsapp className="about__social-icon about__whatsapp" />,
      link: "https://wa.me/message/R4FYYAOFBHAWL1",
    },
  ];

  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div>
      <Nav />
      <div className="main">
        <animated.div style={style}>
          <section className="about">
            <div className="about__project">
              <h1 className="about__project-title">About Project</h1>
              <p className="about__project-description">
                The Frontend project was built using the React library and the
                TMDB API. It is a single-page application that allows users to
                search for movies, view information about them, and watch
                trailers.
              </p>
            </div>
            <div className="about__developer">
              <h1 className="about__developer-name">About Developer</h1>
              <p>
                I am a former high school teacher who has transitioned into
                software development. I had a great time creating this project
                and sharing it with you. This was my final project for the
                Software Engineering Bootcamp at Practicum (2022 - 2023). I hope
                you enjoy it as much as I enjoyed making it. - Kerwin Thompson
              </p>
            </div>
            <div className="about__info">
              <div>
                <img
                  className="about__image"
                  src="https://media.licdn.com/dms/image/C5603AQG4owklox6HkA/profile-displayphoto-shrink_200_200/0/1517013629179?e=1683158400&v=beta&t=Hyl7RuBmoun7IBlJPiUsTvn9j2enMu08Bw4ToPpnhGU"
                  alt="Kerwin Thompson"
                />

                <div className="about__socials">
                  <div className="about__social">
                    {SocialShare.map((val, i) => (
                      <a
                        key={i}
                        href={`${val.link}`}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {val.Social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="about__author">
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
      </div>
      <Footer />
    </div>
  );
}

export default About;
