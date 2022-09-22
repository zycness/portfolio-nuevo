import { React, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import "./styles/app.css";
import { useDispatch, useSelector } from "react-redux";
import "./styles/footer.css";
import {
  changeThemeDark,
  changeThemeLight,
} from "./features/slices/themeSlice";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);
  const [darkLight, setDarkLight] = useState(true);

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
            HECHO POR{" "}
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
