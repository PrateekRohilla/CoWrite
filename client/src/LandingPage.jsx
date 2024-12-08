import React from "react";
import { useNavigate } from "react-router-dom";
import CoWriteLanding from './assets/CoWriteLanding.jpg'
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast(
    "Thanks for your interest.\nUser Account feature coming soon!",
    { duration: 5000,icon: '👋',}
  );

const LandingPage = () => {
  const navigate = useNavigate();

  const handleContinueAsGuest = () => {
    navigate(`/documents/${crypto.randomUUID()}`);
  };

  return (
    <div className="landing-page">
        <header className="header">
            <h1 className="logo">CoWrite</h1>
            <div className="auth-buttons">
                <button className="btn btn-login">Login</button>
                <button className="btn btn-create" onClick={notify} >Create an account</button>
            </div>
        </header>
        <section className="hero">
            <div className="hero-content">
                <h2 className="hero-title">Unleash your creativity with ease</h2>
                {/* <p className="hero-subtitle">Collaborate, write and create without limits</p> */}
                <p className="hero-subtitle">CoWrite is a Real-time, web based writing app that enables users to create
                and format rich-text documents collaboratively.</p>
            </div>
            <div className="hero-image">
                <img src={CoWriteLanding} alt="Notepad with pen" />
            </div>
        </section>
        <section className="features">
            {/* <div className="description">
                <p>
                CoWrite is a Real-time, web based writing app that enables users to create
                and format rich-text documents collaboratively.
                </p>
            </div> */}
            <div className="get-started">
                <h3>Get started in seconds - no account needed!</h3>
                
                <div className="cta-buttons">
                <div className="cta-option">
                    <button className="btn btn-secondary" onClick={notify}>Create an Account</button>
                    <p>Save your progress & Unlock advanced features (coming soon)</p>
                </div>
                
                <div className="cta-option">
                    <button className="btn btn-primary" onClick={handleContinueAsGuest}>Continue as guest</button>
                    <p>Jump right in & start writing instantly</p>
                </div>
                </div>
            </div>
        </section>
        <Toaster position="top-center" />
    </div>
  );
};

export default LandingPage;
