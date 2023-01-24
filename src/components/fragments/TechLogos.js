import React from "react";

function TechLogos({ logo_url }) {

    return (
        <>
            <div className="logos">

                <div className="logo_img">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <img src={logo_url} alt="logo de tecnología frontend" />
                </div>

            </div>
        </>
    )
}

export default TechLogos;