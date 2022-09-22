import React, { useEffect, useState } from "react";
import "../styles/app.css";
import "../styles/proyectos.css";
import proyectosObj from "../features/proyectos.json";
import ProyectoItem from "./ProyectoItem";
import proyectoImg from "../features/projectImages";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Proyectos = () => {
  const theme = useSelector((state) => state.theme.value);
  const [darkLight, setDarkLight] = useState(true);

  useEffect(() => {
    theme ? setDarkLight(true) : setDarkLight(false);
  }, [theme]);

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  return (
    <article className='proyectos'>
      <h4 className={theme ? "proyectos__title" : "proyectos__title dark"}>
        Estos son mis proyectos
      </h4>
      <p className={theme ? "proyectos__desc" : "proyectos__desc dark"}>
        Todos los proyectos fueron hechos a través de documentación, sin
        referencia visual alguna.
      </p>
      <motion.ul
        className='proyectos__list'
        initial='hidden'
        animate='visible'
        variants={list}
      >
        {proyectosObj.proyectos.map((item, index) => {
          return (
            <ProyectoItem
              key={index}
              proyectoData={item}
              image={proyectoImg[index]}
              darkLight={darkLight}
            />
          );
        })}
      </motion.ul>
    </article>
  );
};

export default Proyectos;
