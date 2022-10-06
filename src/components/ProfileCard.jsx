import React from "react";
import "../styles/app.css";
import "../styles/profileCard.css";
import image from "../images/profileImage.jpg";
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import resume from "../file/Kevin_Web_Developer_Resume.pdf";
import cv from "../file/Kevin_Web_Developer_ES.pdf";
import i18next from "i18next";

const ProfileCard = () => {
  const theme = useSelector((state) => state.theme.value);
  const { t } = useTranslation();
  console.log(i18next.language);
  return (
    <>
      <article className={theme ? "profile" : "profile dark"}>
        <img src={image} alt='Profile image' className='profile__image' />
        <h1 className={theme ? "profile__title" : "profile__title dark"}>
          Kevin Flores
        </h1>
        <h2 className='profile__desc'>FULLSTACK DEVELOPER</h2>
        <button className='btn'>
          <a
            href={i18next.language == "es" ? cv : resume}
            download
            className='profile__cv'
          >
            {t("profileCard.download")}
          </a>
        </button>
        <div className='profile__socialMedias'>
          <IconContext.Provider
            value={{
              size: "1.5rem",
              className: `${theme ? "profileIcons" : "profileIcons dark"}`,
            }}
          >
            <a
              href='https://www.linkedin.com/in/kevinnahuelf/'
              target='_blank'
              rel='noopener noreferrer'
              className={theme ? "profile__link" : "profile__link dark"}
            >
              <FaLinkedinIn />
            </a>
            <a
              href='https://github.com/zycness'
              target='_blank'
              rel='noopener noreferrer'
              className={theme ? "profile__link" : "profile__link dark"}
            >
              <FaGithub />
            </a>
            <a
              href='https://wa.me/541138084961'
              target='_blank'
              rel='noopener noreferrer'
              className={theme ? "profile__link" : "profile__link dark"}
            >
              <FaWhatsapp />
            </a>
            <a
              href='https://twitter.com/Codelearner13'
              target='_blank'
              rel='noopener noreferrer'
              className={theme ? "profile__link" : "profile__link dark"}
            >
              <FaTwitter />
            </a>
          </IconContext.Provider>
        </div>
        <div className='profile__about'>
          <h3
            className={
              theme ? "profile__about-title" : "profile__about-title dark"
            }
          >
            {t("profileCard.aboutMe.title")}
          </h3>
          <p
            className={
              theme ? "profile__about-desc" : "profile__about-desc dark"
            }
          >
            {t("profileCard.aboutMe.desc")}
          </p>
        </div>
      </article>
    </>
  );
};

export default ProfileCard;
