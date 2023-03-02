import React from 'react';
import Home from './pages/Home'
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Single from "./pages/Single";
import Shop from "./pages/Shop";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Basket from "./pages/Basket";
import Profile from "./pages/Profile";
import {ToastContainer} from "react-toastify";

import "@stripe/stripe-js";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/shop/:slug" element={<Shop/>}/>
                <Route path="/product/:slugName" element={<Single/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            <ToastContainer closeOnClick visibilityTime={2000} autoHide={true}/>
        </BrowserRouter>
    );
}

export default App;
