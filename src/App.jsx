import { React, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import "./styles/app.css";
import "./styles/footer.css";
import {
  changeThemeDark,
  changeThemeLight,
} from "./features/slices/themeSlice";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { useTranslation } from "react-i18next";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "es"],
    fallbackLng: "en",
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
    },
    backend: {
      loadPath: "/src/locales/{{lng}}/translations.json",
    },
    react: {
      useSuspense: false,
    },
  });

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);
  const [darkLight, setDarkLight] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const themeLocalStorage = localStorage.getItem("theme");
    if (themeLocalStorage == "dark") {
      dispatch(changeThemeDark());
    } else if (themeLocalStorage == "light") {
      dispatch(changeThemeLight());
    }

    theme ? setDarkLight(true) : setDarkLight(false);
  }, [theme]);

  return (
    <>
      <IconContext.Provider
        value={{ size: "1.5rem", className: "footer_icon" }}
      >
        <main className={darkLight ? "App" : "App dark"}>
          <section className='App__profile'>
            <ProfileCard />
          </section>
          <section className='App__content'>
            <Navbar />
            <Outlet />
          </section>
        </main>
        <footer id='footer'>
          <h5 className='footer_title'>
            {t("footer.made")}{" "}
            <a
              href='https://www.linkedin.com/in/kevinnahuelf/'
              target='_blank'
              rel='noopener noreferrer'
              className='footer_link'
            >
              KEVIN FLORES
              <FaLinkedin />
            </a>
          </h5>
        </footer>
      </IconContext.Provider>
    </>
  );
}

export default App;
