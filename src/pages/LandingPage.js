import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
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
          <p className="subcountdown">THE 2026 COMPETITION HAS CONCLUDED</p>
          <p className="subheading">Thank you to all participants! See you next year!</p>
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
                      </div>
        </section>

        <section className="section">
          <div className="content">
            <h2 className="heading">Up to $6,000 in prizes!</h2>
            <p>
              In The EcoVenture Challenge, participants compete for <b>up to $6,000 total prize pool</b>! Our mission with this cash prize is to inspire upcoming entrepreneurs and fuel personal environmental projects. We hope that our flexible prize money will motivate students and ultimately create Penn's most impactful sustainability competition yet.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;