import React from "react";
import './css/App.css';
import { HashRouter } from "react-router-dom";
import Router from './Router';
import Header from './layout/Header';
import Footer from './layout/Footer';
import SideNavBar from "./layout/SideNavBar";
import Particles from "./Particles";

function App() {

    return (
        <>
            <HashRouter>
                <Header />
                <SideNavBar>

                    <Router />

                </SideNavBar>

                <Footer />

            </HashRouter>
            <Particles />

        </>
    )
}

export default App;