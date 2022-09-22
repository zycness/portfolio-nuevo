import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import icons from "../features/techIcons";
import tecnologiasObj from "../features/tecnologias.json";
import "../styles/app.css";
import "../styles/sobre.css";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";

const Sobre = () => {
  const theme = useSelector((state) => state.theme.value);
  const [darkLight, setDarkLight] = useState(true);
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

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  useEffect(() => {
    theme ? setDarkLight(true) : setDarkLight(false);
  }, [theme]);

  return (
    <article className={darkLight ? "about" : "about dark"}>
      <section className={darkLight ? "firstSec" : "firstSec dark"}>
        <h4 className={darkLight ? "firstSec__title" : "firstSec__title dark"}>
          ¿Quién soy?
        </h4>
        <p className={theme ? "firstSec__desc" : "firstSec__desc dark"}>
          ¡Hola! Soy Kevin, tengo 20 años, soy un apasionado por la programación
          desde muy chico, actualmente me encuentro estudiando de forma
          autodidacta, día tras día sin parar, con la intención y motivación de
          poder ser muy bueno en lo que hago y poder ayudar a otros; tengo la
          capacidad y perseverancia para afrontar y seguir a través de cualquier
          aventura/problema que se me ponga en frente.
        </p>
        <p className={theme ? "firstSec__desc" : "firstSec__desc dark"}>
          Voy a dar mi mejor intento tratando de solucionar cualquier
          inconveniente o problema por el cual estés/en cruzando utilizando
          todos mis recursos y capacidad para llegar a una solución que le/s
          satisfaga.
        </p>
      </section>
      <section className={darkLight ? "secondSec" : "secondSec dark"}>
        <h4
          className={darkLight ? "secondSec__title" : "secondSec__title dark"}
        >
          Tecnologías que utilizo
        </h4>
        <article>
          <IconContext.Provider value={{ size: "3rem", className: "techIcon" }}>
            <motion.ul
              className='tech__list'
              initial='hidden'
              animate='visible'
              variants={list}
            >
              {tecnologiasObj.tecnologias.map((item1, i) => {
                return (
                  <motion.li
                    variants={item}
                    className={
                      theme ? "tech__list-item" : "tech__list-item dark"
                    }
                    key={i}
                  >
                    {icons[i]}
                    <h5 className={theme ? "tech__title" : "tech__title dark"}>
                      {item1.title}
                    </h5>
                    <div className='subTech'>
                      {item1.subTech &&
                        item1.subTech.map((item1, i) => {
                          return (
                            <span
                              className={
                                theme ? "subTech__desc" : "subTech__desc dark"
                              }
                              key={i}
                            >
                              {item1}
                            </span>
                          );
                        })}
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </IconContext.Provider>
        </article>
      </section>
    </article>
  );
};

export default Sobre;
