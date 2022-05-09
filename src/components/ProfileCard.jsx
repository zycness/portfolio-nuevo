import React from "react";
import "../styles/profileCard.css";
import image from "../images/profileImage.jpg";
import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";

const ProfileCard = () => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <>
      <article className={theme ? "profile" : "profile dark"}>
        <img src={image} alt="Profile image" className="profile__image" />
        <h1 className={theme ? "profile__title" : "profile__title dark"}>
          Kevin Flores
        </h1>
        <h2 className="profile__desc">Front-end web developer</h2>
        <button className="btn">
          <a href="../file/Curriculum.pdf" download className="profile__cv">
            Descargar CV
          </a>
        </button>
        <div className="profile__socialMedias">
          <IconContext.Provider
            value={{
              size: "1.5rem",
              className: `${theme ? "profileIcons" : "profileIcons dark"}`,
            }}
          >
            <a
              href="https://www.linkedin.com/in/kevinnahuelf/"
              target="_blank"
              rel="noopener noreferrer"
              className={theme ? "profile__link" : "profile__link dark"}
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/zycness"
              target="_blank"
              rel="noopener noreferrer"
              className={theme ? "profile__link" : "profile__link dark"}
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/541138084961"
              target="_blank"
              rel="noopener noreferrer"
              className={theme ? "profile__link" : "profile__link dark"}
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://twitter.com/Codelearner13"
              target="_blank"
              rel="noopener noreferrer"
              className={theme ? "profile__link" : "profile__link dark"}
            >
              <FaTwitter />
            </a>
          </IconContext.Provider>
        </div>
        <div className="profile__about">
          <h3
            className={
              theme ? "profile__about-title" : "profile__about-title dark"
            }
          >
            Sobre mí
          </h3>
          <p
            className={
              theme ? "profile__about-desc" : "profile__about-desc dark"
            }
          >
            Soy un joven muy apasionado por el desarrollo web, en búsqueda de
            nuevos desafíos, superándose día a día con perseverancia, capacidad
            y motivación. Puedo comunicar de manera eficiente los problemas y
            dar su resolución de una forma lógica entablando una conversación
            cálida.
          </p>
        </div>
      </article>
    </>
  );
};

export default ProfileCard;
