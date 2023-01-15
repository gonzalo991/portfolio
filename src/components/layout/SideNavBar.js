import React, { useState } from "react";
import { RiCodeBoxFill } from 'react-icons/ri';
import { FaHome, FaRegUserCircle, FaHiking, FaBars } from 'react-icons/fa';
import { DiReact } from "react-icons/di";
import { NavLink } from "react-router-dom";

function SideNavBar({children}) {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const MENU_ITEMS = [
        {
            path: "/",
            name: "Home",
            icon: <FaHome />
        },
        {
            path: "/Technologies",
            name: "Technologies",
            icon: <DiReact />
        },
        {
            path: "/Proyects",
            name: "Proyects",
            icon: <RiCodeBoxFill />
        },
        {
            path: "/AboutMe",
            name: "About Me",
            icon: <FaHiking />
        },
        {
            path: "/Contact",
            name: "Contact",
            icon: <FaRegUserCircle />
        }
    ]

    return (
        <div className="sidenav_container">

            <div className="sidebar" style={{ width: isOpen ? "250px" : "50px", transition: "all 0.9s ease" }}>

                <div className="top_section">
                    {
                        isOpen ?
                            <>
                                <h1 className="logo" style={{ display: isOpen ? "block" : "none" }}>AG</h1>
                                <div style={{ marginLeft: isOpen ? "150px" : "0px" }} className="closeBar" onClick={handleToggle}>
                                    X
                                </div>
                            </>
                            :
                            <div style={{ marginLeft: isOpen ? "120px" : "0px" }} className="bars">
                                <FaBars onClick={handleToggle} />
                            </div>

                    }
                </div>

                {
                    MENU_ITEMS.map((item, index) => {
                        return (
                            <NavLink to = {item.path} key = {index} className="link" activeClassName="active">
                                <div className="icon">{item.icon}</div>
                                <div className="link_text" style={{ display: isOpen ? "block" : "none" }}>{item.name}</div>
                            </NavLink>
                        )
                    })
                }
            </div>
            <main>{children}</main>
        </div>
    )
}

export default SideNavBar;