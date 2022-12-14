import React, { useRef, useState, useEffect } from "react";
import "../styles/app.css";
import "../styles/contacto.css";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Contacto = () => {
  const theme = useSelector((state) => state.theme.value);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const form = useRef();
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicApi = import.meta.env.VITE_PUBLIC_API;
  const { t } = useTranslation();

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
    <article className='contacto'>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={theme ? "contacto__form" : "contacto__form dark"}
        ref={form}
      >
        <h4 className={theme ? "contacto__title" : "contacto__title dark"}>
          {t("contact.title")}
        </h4>
        <label
          htmlFor='nombre'
          className={theme ? "contacto__label" : "contacto__label dark"}
        >
          {t("contact.name")}
        </label>
        <input
          type='text'
          name='nombre'
          id='nombre'
          required
          placeholder='Escriba su nombre y apellido *'
          className={theme ? "contacto__input" : "contacto__input dark"}
        />
        <label
          htmlFor='correo'
          className={theme ? "contacto__label" : "contacto__label dark"}
        >
          {t("contact.email")}
        </label>
        <input
          type='email'
          name='correo'
          id='correo'
          required
          placeholder='Escriba su correo *'
          className={theme ? "contacto__input" : "contacto__input dark"}
        />
        <label
          htmlFor='telefono'
          className={theme ? "contacto__label" : "contacto__label dark"}
        >
          {t("contact.phone")}
        </label>
        <input
          type='tel'
          name='telefono'
          id='telefono'
          className={theme ? "contacto__input" : "contacto__input dark"}
          placeholder='Escriba su tel??fono'
        />
        <label
          htmlFor='mensaje'
          className={theme ? "contacto__label" : "contacto__label dark"}
        >
          {t("contact.message")}
        </label>
        <textarea
          name='mensaje'
          id='mensaje'
          required
          placeholder='Escriba su mensaje *'
          className={theme ? "contacto__textarea" : "contacto__textarea dark"}
        ></textarea>
        <button type='submit' className='btn' value='send'>
          {t("contact.send")}
        </button>
        {error && <p className='error'> {t("contact.error")}</p>}
        {success && <p className='success'> {t("contact.success")}</p>}
      </form>
    </article>
  );
};

export default Contacto;
