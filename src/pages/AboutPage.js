import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import './AboutPage.css';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <header className="hero-section about-hero">
        <img
          src={`${process.env.PUBLIC_URL}/penn-campus.png`}
          alt="PRIZE Committee"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="title">About Us</h1>
          <p className="subheading">Learn more about our mission and impact</p>
        </div>
      </header>

      <main className="main-content">
        <section className="section">
          <div className="content">
            <h2 className="heading">About Us</h2>
            <p>
              The UPenn Ecoventure Challenge is an annual international climate startup competition.
            </p>
            <p>
              The UPenn EcoVenture Challenge is not like any other competition—it is a collaborative business pitch with real feedback from professional judges and industry experts. As the premier international climate startup challenge, this initiative empowers high school, undergraduate, and master's students to transform groundbreaking ideas into tangible solutions for the world's most urgent environmental crises.
            </p>
            <p>
              Each year, teams of 1-5 work together to create a business climate pitch. Whether that looks like proposing next-generation green technologies, policy-driven initiatives, or community-driven programs, participants innovate and drive forward what's possible. While physical products are encouraged, projects can take the form of digital platforms/software, advocacy campaigns, or community service organizing—all with the goal of tackling today's climate crisis.
            </p>
            <p>
              Through this rigorous, high-impact competition, teams receive expert mentorship, refine their pitches, and present their solutions in front of environmental professors, industry partners, and climate experts. Whether you're expanding upon a previous startup or coming up with a new idea, participants gain invaluable experience in the art of business pitching, problem-solving, and execution.
            </p>
            <p>
              The challenge is more than a chance to win a cash prize—it is an opportunity to hone your skills and gain real-world experience. If you are ready to drive real change and are interested in environmental business, the EcoVenture Challenge is your platform to make an impact.
            </p>
          </div>
        </section>

        <section className="section">
          <hr />
        </section>

        <section className="section">
          <div className="content">
            <h2 className="heading">Our Team</h2>
            <br />
            <img
                src={`${process.env.PUBLIC_URL}/prize.png`}
                alt="PRIZE Committee"
            />
            <p>
              Founded in 2021, Penn Climate Ventures (PCV) is a thriving student-led organization at the University of Pennsylvania dedicated to developing real-world environmental solutions. With over 300 undergraduate and graduate students spanning the Wharton School, the School of Engineering and Applied Science, and the School of Arts and Sciences, PCV brings together diverse expertise to tackle critical sustainability challenges. Through collaborations with consulting firms, policy organizations, and community initiatives, PCV works to translate research and ideas into tangible impact. However, PCV's mission felt incomplete without broader outreach to high schools and other universities.
            </p>
            <p>
              To bridge this gap, the PCV team launched the Penn EcoVenture Challenge, a high-impact competition designed to empower students to develop innovative climate solutions. Each year, hundreds of high school and university students from around the world participate, presenting their ideas in rigorous rounds of evaluation by PhD students, environmental professors, and leading industry experts. The competition provides a platform for students to refine their projects, gain expert feedback, and connect with a network of sustainability professionals.
            </p>
            <p>
              Unlike traditional business competitions, EcoVenture emphasizes feasibility, sustainability, and long-term environmental impact. The challenge is open to students at any stage—whether they have a fully developed startup or just an initial idea. Either way, the PCV team encourages you to take a bold step forward and compete. Teams receive mentorship and the opportunity to secure funding, ensuring that financial constraints do not hinder promising solutions.
            </p>
            <p>
              As students committed to advancing environmental solutions, the PCV team wants to support participants both educationally and financially. The Penn EcoVenture Challenge is not just a competition—it is a launchpad for the next generation of climate entrepreneurs, equipping you with the resources and connections to turn their ideas into real change.
            </p>
            <Link
              to="/get-involved"
              className="cta-button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Get Involved
            </Link>
            <br /><br />
          </div>
        </section>
      </main>


      <Footer />
    </div>
  );
};

export default AboutPage;