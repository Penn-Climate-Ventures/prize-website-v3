import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import './AboutPage.css';
import { Link } from 'react-router-dom';

const FinalRound = () => {
  return (
    <div>
      <Navbar />
      <header className="hero-section about-hero">
        <img
          src={`${process.env.PUBLIC_URL}/penn-campus3.png`}
          alt="PRIZE Committee"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="title">Final Round</h1>
        </div>
      </header>

      <main className="main-content">
        <section className="section">
          <div className="content">
            <h2 className="heading">Final Round Details</h2>
            <p>
              4 teams from each track will compete in a live zoom pitch to industry leaders and professors.
              Results will be announced live on the Zoom call after judges debrief.
            </p>

            <p style={{ marginTop: '30px', fontStyle: 'italic' }}>
              More information on our final round will be available after the results of our 1st round are released.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default FinalRound;