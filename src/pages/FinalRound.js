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
            
            <h3>Schedule</h3>
            <ul>
              <li><strong>High School Track:</strong> April 26 Saturday 3PM - 5:30PM EST</li>
              <li><strong>University Track:</strong> April 27 Sunday 3PM - 5:30PM EST</li>
            </ul>
            
            <p>
              Finalists must submit their slide deck that they will use during their pitch through the forms below by April 25 11:59 EST.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '30px 0' }}>
              <a
                href="https://airtable.com/appsSPuO4G3jMYsxD/pagxmMhoUo0zbFb4s/form"
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                High School Form
              </a>
              
              <a
                href="https://airtable.com/appsSPuO4G3jMYsxD/pagInmaTNZbvxg9T7/form"
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                University Form
              </a>
            </div>

            <h3>Final Presentation Format</h3>
            <p>
              The final deliverable will be a strictly capped 15 minute presentation supplemented by your 
              submitted slide deck followed by an 8 minute Q&A session from the judges. More information 
              on expectations/rubric can be found in the application portal via Airtable.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default FinalRound;