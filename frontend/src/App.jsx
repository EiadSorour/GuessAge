import React from "react";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const SERVER_URL = "https://api.agify.io/";
const FRONT_URL = "http://localhost:3000/"

function App(){

    return (
        <div>
            <Header FRONT_URL={FRONT_URL}/>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />}/>
                    <Route path="/home" element={<Home SERVER_URL={SERVER_URL} />}/>
                    <Route path="/about" element={<About />}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    )
}

export default App;