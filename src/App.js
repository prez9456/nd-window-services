import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./components/nav";
import Home from "./pages/home";
import About from './pages/about';
import Contact from './pages/contact';

import './style/App.css';


const App = () => {
    return(
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Nav />}>
                        <Route index element={<Home />}/>
                        <Route path='About' element={<About />}/>
                        <Route path='Contact' element={<Contact />}/>
                        {/* <Route path="*" element={<NoPage/>}/> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
