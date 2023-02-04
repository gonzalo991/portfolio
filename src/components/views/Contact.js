import React from "react";
import FormInput from '../fragments/FormInput';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

function Contact() {
    return (
        <>
            <div className="contact">

                <h1 className="contact_title">Contact Me</h1>

                <form className="contact_form" method="POST" action="/send">

                    <div className="campos">

                        <FormInput labelText="Nombre" id="nombre" name="nombre" />
                        <FormInput labelText="Apellido" id="apellido" name="apellido" />
                        <FormInput labelText="Email" id="email" name="email" type="email" />
                        <FormInput labelText="Teléfono" id="telefono" name="telefono" />

                    </div>

                    <textarea name="consulta" cols={30} rows={10} placeholder="Escriba su consulta aquí..."></textarea>

                    <button className="form_button" type="submit">Enviar</button>

                </form>

                <div className="icons">
                    <a href="https://www.linkedin.com/in/gonzalo-araya-416a6520b/" target="_blank"><BsLinkedin /></a>
                    <a href="https://github.com/gonzalo991" target="_blank"><FaGithub /></a>
                </div>
            </div>
        </>
    )
}

export default Contact;