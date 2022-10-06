import React from "react";
import { Link } from "react-router-dom";
import "../styles/app.css";
import "../styles/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../features/slices/themeSlice";
import { FaMoon, FaSun } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);
  const { t } = useTranslation();
  const handleClick = () => {
    dispatch(changeTheme());
    localStorage.setItem("theme", theme ? "dark" : "light");
  };

  return (
    <nav className='navbar'>
      <ul className={theme ? "navbar__list" : "navbar__list dark"}>
        <li className='navbar__list-item'>
          <Link
            to='/proyectos'
            className={
              theme ? "navbar__list-item__link" : "navbar__list-item__link dark"
            }
          >
            {t("navbar.projects")}
          </Link>
        </li>
        <li className='navbar__list-item'>
          <Link
            to='/sobre-mi'
            className={
              theme ? "navbar__list-item__link" : "navbar__list-item__link dark"
            }
          >
            {t("navbar.about")}
          </Link>
        </li>

        <li className='navbar__list-item'>
          <Link
            to='/contacto'
            className={
              theme ? "navbar__list-item__link" : "navbar__list-item__link dark"
            }
          >
            {t("navbar.contact")}
          </Link>
        </li>
        <IconContext.Provider value={{ size: "1rem", className: "themeIcon" }}>
          <button
            className={theme ? "theme__btn btn2" : "theme__btn btn2 dark"}
            onClick={handleClick}
          >
            {theme ? <FaMoon /> : <FaSun />}
          </button>
        </IconContext.Provider>
        <select
          className={theme ? "language__btn btn2" : "language__btn btn2 dark"}
          onClick={(e) => i18next.changeLanguage(e.target.value)}
        >
          <option value='en'>English</option>
          <option value='es'>Español</option>
        </select>
      </ul>
    </nav>
  );
};

export default navbar;
