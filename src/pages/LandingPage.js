import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Countdown from '../components/countdown/countdown';

import './LandingPage.css';

const LandingPage = () => {
  return (
    <div>
      <Navbar />

      <header className="hero-section">
      <video className="hero-video" autoPlay loop muted controlsList="nodownload nofullscreen noremoteplayback">
          <source src={`${process.env.PUBLIC_URL}/windmill.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="title">UPenn Eco-Venture Challenge</h1>
          <p className="subheading">Preparing tomorrow's leaders to tackle today's climate crisis!</p>
          <p className="subcountdown">ROUND 1 APPLICATION OPENS</p>
          <Countdown targetDate={new Date("2026-01-26T00:00:00")} />
          <img 
            src={`${process.env.PUBLIC_URL}/double-arrow-down.png`} 
            alt="Scroll down"
            className="scroll-arrow"
            onClick={() => {
              document.querySelector('.main-content').scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          />
        </div>
      </header>

      <main className="main-content">
        <section className="section">
          <div className="content">
            <p>
            The EcoVenture Challenge hosted by the University of Pennsylvania is a 100% remote, no-cost, 
            and accessible climate pitch competition for  high school, undergraduate, and master's students. Through 
            our challenge, we aim to empower high school and university students to create environmental 
            business pitches to tackle today's most pressing issues.
            </p>
            <p>
            If you're at all interested in addressing environmental issues through a business perspective, 
            this competition is a perfect way to get real-world experience and feedback from industry experts.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdDMYJYYdEmjE7_GSvv3tzHyCe5ULHESMS9Qs0CddyfaC51FQ/viewform"
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Interest Form
            </a>
          </div>
        </section>

        

        <section className="section">
          <div className="content">
            <br /><br />
            <h2 className="heading">Up to $10,000 in prizes!</h2>
            <p>
              In The EcoVenture Challenge, you will have the opportunity to compete for <b>up to $10,000 total prize pool</b>! Our mission with this cash prize is to inspire upcoming entrepreneurs and fuel personal environmental projects. The prize is flexible and will be directly deposited to participants. We hope that our flexible prize money will motivate students and ultimately create Penn's most impactful sustainability competition yet.
            </p>
            <br /><br /><br />
          </div>
        </section>
        
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;