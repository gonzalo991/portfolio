import React from "react";
import FormInput from '../fragments/FormInput';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

function Contact() {
    return (
        <>
            <div className="contact">

                <h1 className="contact_title">Contactame</h1>

                <form className="contact_form" method="POST" action="">

                    <div className="campos">

                        <FormInput labelText="Nombre" id="nombre" name="nombre" />
                        <FormInput labelText="Apellido" id="apellido" name="apellido" />
                        <FormInput labelText="Email" id="email" name="email" type="email" />
                        <FormInput labelText="Teléfono" id="telefono" name="telefono" />

                    </div>

                    <textarea cols={80} rows={10} placeholder="Escriba su consulta aquí..."></textarea>

                    <button className="form_button" type="submit" style={{ display: "block" }}>Enviar</button>

                </form>

                <div className="icons">
                    <a href="" target="_blank"><BsLinkedin /></a>
                    <a href="" target="_blank"><FaGithub /></a>
                </div>
            </div>
        </>
    )
}

export default Contact;