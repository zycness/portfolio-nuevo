import React from "react";
import "../styles/app.css";
import "../styles/proyectos.css";
import { motion } from "framer-motion";

const ProyectoItem = ({ proyectoData, image, darkLight }) => {
  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <motion.li
      variants={item}
      className={
        darkLight ? "proyectos__list-item" : "proyectos__list-item dark"
      }
    >
      <img
        src={image}
        alt={proyectoData.title}
        className='proyectos__list-item__img'
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
      <div className='subTech__container'>
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
      <div className='secBtn__container'>
        <button className='secBtn'>
          <a
            href={proyectoData.demo}
            target='_blank'
            rel='noopener noreferrer'
            className={darkLight ? "secBtn__link" : "secBtn__link dark"}
          >
            DEMO
          </a>
        </button>
        <button className='secBtn'>
          <a
            href={proyectoData.repo}
            target='_blank'
            rel='noopener noreferrer'
            className={darkLight ? "secBtn__link" : "secBtn__link dark"}
          >
            CÓDIGO
          </a>
        </button>
      </div>
    </motion.li>
  );
};

export default ProyectoItem;
