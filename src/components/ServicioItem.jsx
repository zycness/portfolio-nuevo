import { React, useState, useEffect } from "react";
import "../styles/servicios.css";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";

const ServicioItem = ({ servicio, icon }) => {
  const theme = useSelector((state) => state.theme.value);
  const [darkLight, setDarkLight] = useState(true);

  useEffect(() => {
    theme ? setDarkLight(true) : setDarkLight(false);
  }, [theme]);

  return (
    <IconContext.Provider
      value={{
        size: "3.5rem",
        className: `${
          darkLight
            ? "servicios__list-item__icon"
            : "servicios__list-item__icon dark"
        }`,
      }}
    >
      <li
        className={
          darkLight ? "servicios__list-item" : "servicios__list-item dark"
        }
      >
        {icon}
        <div className="servicios__list-item__text">
          <h5
            className={
              darkLight
                ? "servicios__list-item__title"
                : "servicios__list-item__title dark"
            }
          >
            {servicio.title}
          </h5>
          <p
            className={
              darkLight
                ? "servicios__list-item__desc"
                : "servicios__list-item__desc dark"
            }
          >
            {servicio.desc}
          </p>
        </div>
      </li>
    </IconContext.Provider>
  );
};

export default ServicioItem;
