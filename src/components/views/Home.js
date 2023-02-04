import React from "react";

function Home() {

    return (
        <>
            <div className="home_container">
                <div className="home_info">
                    <div className="home_info_container">
                        <div className="info_text">
                            <h1>Hi,</h1>
                            <h2>I'm Gonzalo</h2>
                            <h3>Full Stack Web Developer</h3>
                            <p>Great ideas make wonderful solutions</p>
                        </div>
                        <div className="home_img">
                            <img src="img/fotoportfolio.jpeg" height={"600px"} alt="Foto de Gonzalo Araya Full Stack Developer" />
                        </div>
                    </div>
                    <a download className="button_link" href="documents/CvOscarGonzaloAraya.pdf">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Download Cv
                    </a>
                </div>
            </div>
        </>
    )
}

export default Home;