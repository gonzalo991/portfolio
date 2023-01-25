import React from "react";
import { FiChrome } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

function Proyects() {

    let counter = 0;

    const MY_PROYECTS = [
        {
            proyectName: "ISEP N°8232",
            proyectImg: "img/logoisep.png",
            proyectLink: "",
            proyectGit: "https://github.com/gonzalo991/ISEP"
        },
        {
            proyectName: "Reciclarg",
            proyectImg: "img/reciclarg.png",
            proyectLink: "https://reciclarg.onrender.com/",
            proyectGit: "https://github.com/gonzalo991/hackathon2022-reciclarg"
        },
        {
            proyectName: "Cinema Center",
            proyectImg: "img/peliculas.jpg",
            proyectLink: "",
            proyectGit: "https://github.com/gonzalo991/ProyectoPeliculas"
        }
    ]

    return (
        <>
            <div className="proyects">
                <h1 className="proyects_title">My Proyects</h1>

                <div className="proyects_body">
                    {
                        MY_PROYECTS.map(info => {
                            return (
                                <div className="proyect_container" key={counter++}>
                                    <h2 className="proyect_container_title">{info.proyectName}</h2>
                                    <img src={info.proyectImg} alt="Imagen de proyecto de Oscar Gonzalo Araya" />
                                    <div className="proyect_info">
                                        <a href={info.proyectLink} target="_blank"><FiChrome /></a>
                                        <a href={info.proyectGit} target="_blank"><FaGithub /></a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>

    )
}

export default Proyects;