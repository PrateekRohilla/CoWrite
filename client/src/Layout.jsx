import React from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import LandingPage from "./LandingPage";

const notify = () => toast(
    "Thanks for your interest.\nUser Account feature coming soon!",
    { duration: 5000,icon: '👋',}
  );

const Layout = () => {

    return(
        <div className="layout">
            <header className="header">
                <h1 className="logo">CoWrite</h1>
                <div className="auth-buttons">
                    <button className="btn btn-login" onClick={notify}>Login</button>
                    <button className="btn btn-create" onClick={notify} >Create an account</button>
                </div>
            </header>
            <div className="main-content">
                <Outlet />
            </div>
            <Toaster position="top-center" />
       </div>
    );

};

export default Layout;