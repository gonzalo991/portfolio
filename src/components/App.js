import React from "react";
import './css/App.css';
import { HashRouter } from "react-router-dom";
import Router from './Router';
import SideNavBar from "./layout/SideNavBar";
import Particles from "./Particles";

function App() {

    return (
        <>
            <HashRouter>

                <SideNavBar>

                    <Router />

                </SideNavBar>

            </HashRouter>
            <Particles />

        </>
    )
}

export default App;