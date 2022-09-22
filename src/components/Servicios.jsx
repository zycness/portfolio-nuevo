import { React, useState, useEffect } from "react";
import "../styles/app.css"
import "../styles/servicios.css";
import ServicioItem from "./ServicioItem";
import serviciosObj from "../features/servicios.json";
import serviciosIcon from "../features/serviciosIcon";
import { useSelector } from "react-redux";

const Servicios = () => {
  const theme = useSelector((state) => state.theme.value);
  const [darkLight, setDarkLight] = useState(true);

  useEffect(() => {
    theme ? setDarkLight(true) : setDarkLight(false);
  }, [theme]);

  return (
    <article className="servicios">
      <h4 className={darkLight ? "servicios__title" : "servicios__title dark"}>
        Estos son los servicios que ofrezco
      </h4>
      <p className={darkLight ? "servicios__desc" : "servicios__desc dark"}>
        Cada uno de éstos es realizado con el debido conocimiento y
        procedimiento, ofreciendo una gran atención al cliente y disponibilidad
        a cualquier tipo de cambio.
      </p>
      <ul className="servicios__list">
        {serviciosObj.servicio.map((item, i) => {
          return (
            <ServicioItem servicio={item} key={i} icon={serviciosIcon[i]} />
          );
        })}
      </ul>
    </article>
  );
};

export default Servicios;
