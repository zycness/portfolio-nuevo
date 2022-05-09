import React, { useRef, useState, useEffect } from "react";
import "../styles/contacto.css";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicApi = import.meta.env.VITE_PUBLIC_API;

const Contacto = () => {
  const theme = useSelector((state) => state.theme.value);
  const [darkLight, setDarkLight] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const form = useRef();

  useEffect(() => {
    theme ? setDarkLight(true) : setDarkLight(false);
  }, [theme]);

  async function handleSubmit(e) {
    e.preventDefault();

    await emailjs.sendForm(serviceId, templateId, form.current, publicApi).then(
      (result) => {
        console.log(result);
        setSuccess(true);
        setError(false);
      },
      (error) => {
        console.log(error);
        setError(true);
        setSuccess(false);
      }
    );
  }

  return (
    <article className="contacto">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={theme ? "contacto__form" : "contacto__form dark"}
        ref={form}
      >
        <h4 className={theme ? "contacto__title" : "contacto__title dark"}>
          Contácteme y será respondido/a a la brevedad.
        </h4>
        <label
          htmlFor="nombre"
          className={theme ? "contacto__label" : "contacto__label dark"}
        >
          Nombre:
        </label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          required
          placeholder="Escriba su nombre y apellido *"
          className={theme ? "contacto__input" : "contacto__input dark"}
        />
        <label
          htmlFor="correo"
          className={theme ? "contacto__label" : "contacto__label dark"}
        >
          Correo:
        </label>
        <input
          type="email"
          name="correo"
          id="correo"
          required
          placeholder="Escriba su correo *"
          className={theme ? "contacto__input" : "contacto__input dark"}
        />
        <label
          htmlFor="telefono"
          className={theme ? "contacto__label" : "contacto__label dark"}
        >
          Teléfono:
        </label>
        <input
          type="tel"
          name="telefono"
          id="telefono"
          className={theme ? "contacto__input" : "contacto__input dark"}
          placeholder="Escriba su teléfono"
        />
        <label
          htmlFor="mensaje"
          className={theme ? "contacto__label" : "contacto__label dark"}
        >
          Mensaje:
        </label>
        <textarea
          name="mensaje"
          id="mensaje"
          required
          placeholder="Escriba su mensaje *"
          className={theme ? "contacto__textarea" : "contacto__textarea dark"}
        ></textarea>
        <button type="submit" className="btn" value="send">
          Enviar mensaje
        </button>
        {error && (
          <p className="error">Ha surgido un error al enviar el mensaje.</p>
        )}
        {success && (
          <p className="success">¡Se ha enviado su mensaje correctamente!</p>
        )}
      </form>
    </article>
  );
};

export default Contacto;
