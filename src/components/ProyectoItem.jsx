import React from "react";
import "../styles/proyectos.css";

const ProyectoItem = ({ proyectoData, image, darkLight }) => {
  return (
    <li className={darkLight ? "proyectos__list-item" : "proyectos__list-item dark"}>
      <img
        src={image}
        alt={proyectoData.title}
        className="proyectos__list-item__img"
      />
      <h5
        className={
          darkLight
            ? "proyectos__list-item__title"
            : "proyectos__list-item__title dark"
        }
      >
        {proyectoData.title}
      </h5>
      <div className="subTech__container">
        {proyectoData.subTech.map((item, index) => {
          return (
            <span
              className={darkLight ? "subTech__desc" : "subTech__desc dark"}
              key={index}
            >
              {item}
            </span>
          );
        })}
      </div>
      <div className="secBtn__container">
        <button className="secBtn">
          <a
            href={proyectoData.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={darkLight ? "secBtn__link" : "secBtn__link dark"}
          >
            DEMO
          </a>
        </button>
        <button className="secBtn">
          <a
            href={proyectoData.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={darkLight ? "secBtn__link" : "secBtn__link dark"}
          >
            CÓDIGO
          </a>
        </button>
      </div>
    </li>
  );
};

export default ProyectoItem;
