import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Technologies from './views/Technologies';
import Proyects from './views/Proyects';
import AboutMe from './views/AboutMe';
import Contact from './views/Contact';
import NotFound from "./views/NotFound";



function Router() {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Technologies' element={<Technologies />} />
            <Route exact path='/Proyects' element={<Proyects />} />
            <Route exact path='/AboutMe' element={<AboutMe />} />
            <Route exact path='/Contact' element={<Contact />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
    )
}

export default Router;