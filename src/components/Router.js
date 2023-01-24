import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Technologies from './views/Technologies';
import Proyects from './views/Proyects';
import NotFound from "./views/NotFound";



function Router() {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Technologies' element={<Technologies />} />
            <Route exact path='/Proyects' element={<Proyects />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
    )
}

export default Router;