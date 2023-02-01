import React from "react";
import TechLogos from "../fragments/TechLogos";

function Technologies() {

    let counter = 0;

    const FRONT_LOGOS = [
        {
            path: "img/html.png"
        },
        {
            path: "img/css.png"
        },
        {
            path: "img/javascript.png"
        },
        {
            path: "img/angular.png"
        },
        {
            path: "img/reactlogo.jpg"
        },
        {
            path: "img/sass.png"
        },
        {
            path: "img/tslogo.png"
        },
        {
            path: "img/thymeleaf.png"
        },
        {
            path: "img/jquerylogo.png"
        },
    ]

    const BACK_LOGOS = [
        {
            path: "img/javalogo.png"
        },
        {
            path: "img/nodejs-1-logo.png"
        },
        {
            path: "img/php-1-logo.png"
        },
        {
            path: "img/9-python.jpg"
        },
        {
            path: "img/django-python-logo.png"
        },
        {
            path: "img/laravel.png"
        },
        {
            path: "img/springboot.png"
        },
        {
            path: "img/R_logo.svg.png"
        },
    ]

    const DB_LOGOS = [
        {
            path: "img/mongo_logo.jpg"
        },
        {
            path: "img/mysqllogo.png"
        },
        {
            path: "img/postgresql-ar21.jpg"
        },
    ]

    const METH_LOGOS = [
        {
            path: "img/scrumlogo.png"
        },,
        {
            path: "img/Jira-new-logo.png"
        },
        {
            path: "img/github-logo-vector.png"
        }
    ]

    return (
        <>
            <div className="tech_container">
                <h1 className="technologies_title" style={{ color: "#fff" }}>
                    <span></span>Technologies i work with</h1>

                <div className="technologies">

                    <div className="technologies_front">

                        <h2 className="technologies_subtitle">Front End Technologies</h2>

                        <div className="logos">
                            {
                                FRONT_LOGOS.map(url => {
                                    return (
                                        <TechLogos logo_url={url.path} key={counter++}/>
                                    )
                                })
                            }
                        </div>

                    </div>

                    <div className="technologies_back">

                        <h2 className="technologies_subtitle">Back End Technologies</h2>

                        <div className="logos">
                            {
                                BACK_LOGOS.map(url => {
                                    return (
                                        <TechLogos logo_url={url.path} key={counter++}/>
                                    )
                                })
                            }
                        </div>

                    </div>

                    <div className="technologies_database">

                        <h2 className="technologies_subtitle">Data Bases</h2>

                        <div className="logos">
                            {
                                DB_LOGOS.map(url => {
                                    return (
                                        <TechLogos logo_url={url.path} key={counter++}/>
                                    )
                                })
                            }
                        </div>

                    </div>

                    <div className="technologies_methodologies">

                        <h2 className="technologies_subtitle">Methodologies</h2>

                        <div className="logos">
                            {
                                METH_LOGOS.map(url => {
                                    return (
                                        <TechLogos logo_url={url.path} key={counter++}/>
                                    )
                                })
                            }
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Technologies;