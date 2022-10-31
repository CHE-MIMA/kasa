import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
// import Error from './pages/Error';
import Home from "./pages/Home";
import Logement from './pages/Logement';
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" exact element={<Home />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/logement/:id" exact element={<Logement />} />



            </Routes>
        </BrowserRouter>
    );
};

export default App;
