import React from "react";

function Home() {

    return (
        <>
            <div className="home_container">
                <div className="home_info">
                    <h1>Hi,</h1>
                    <h2>I'm Gonzalo</h2>
                    <h3>Full Stack Developer</h3>
                    <p>Front-End / Back-End</p>
                    <a download className="button_link" href="documents/CvOscarGonzaloAraya.pdf">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Download Cv
                    </a>
                </div>
                <div className="home_img">
                    <img src="img/fotoportfolio.jpeg" height={"600px"} alt="Foto de Gonzalo Araya Full Stack Developer" />
                </div>
            </div>
        </>
    )
} 

export default Home;