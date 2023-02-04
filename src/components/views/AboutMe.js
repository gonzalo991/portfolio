import React from "react";

function AboutMe() {

    const HABILITIES = [
        {
            skill: "teamwork"
        },
        {
            skill: "Communication"
        },
        {
            skill: "Creativity"
        },
        {
            skill: "Responsability"
        },
        {
            skill: "Commitment"
        },
        {
            skill: "Analytical Skills"
        },
        {
            skill: "Error Resolution"
        },
        {
            skill: "productiveness"
        }
    ]

    return (
        <>
            <div className="about_container">

                <h1 className="about_title">About Me</h1>

                <div className="about_description">
                    <p>
                        My name is Oscar Gonzalo Araya, I'm a fullstack developer since 2021, i am graduated
                        from Egg Tech Institute and UTN B.A E-learning Center.
                    </p>
                    <p>
                        Since then i've spent my time to enhance my programming habilities and work in some projects
                        for customers from my city.
                    </p>
                    <p>
                        Actually i'm studying the last years of the programming degree at Universidad Tecnológica Nacional in San Rafael, Mendoza
                        and looking for a job.
                    </p>
                </div>

                <div className="about_skills">

                    <h2 className="about_subtitle">Skills</h2>
                   
                    <div className="about_habilities">
                        {
                            HABILITIES.map(hability => {
                                return (
                                    <>
                                        <div className="skills_description">
                                            <h3 className="border">{hability.skill}</h3>
                                            <h3 className="wavy">{hability.skill}</h3>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

/*
        Mi nombre es Oscar Gonzalo Araya, soyt programador fullstack desde el año
    2021 en el que me recibí del instituto egg.
        Desde entonces me he dedicado a perfeccionarme y a trabajar en proyectos
    individuales para algunos clientes de mi ciudad.
        Actualmente, aparte de lo mencionado anteriormente, estoy cursando el último
    año de la Tecnicatura Universitaria en Programación en la Universidad Tecnológica Nacional
    en la ciudad de San Rafael Mendoza.
 
    Habilidades
    -Trabajo en equipo
    -Buena comunicación
    -Creatividad
    -Responsabilidad
    -Compromiso
    -Capacidad Analítica
    -Resolución de errores
    -Liderazgo
    -Productividad
*/

export default AboutMe;