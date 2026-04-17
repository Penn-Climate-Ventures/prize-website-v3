import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import './GetInvolved.css';

const GetInvolved = () => {
  const [selectedContent, setSelectedContent] = useState('sponsors'); // Default tab

  return (
    <div>
      <Navbar />
      <header className="hero-section">
      <video className="hero-video" autoPlay loop muted controlsList="nodownload nofullscreen noremoteplayback">
          <source src={`${process.env.PUBLIC_URL}/about.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="title">Get Involved</h1>
          <p className="subheading">Become a Judge or Sponsor!</p>
        </div>
      </header>

      <main className="main-content">
        <section className="section">
          <div className="content">
            <p>
              Penn Climate Ventures is always looking for new sponsors and judges to help support
              our mission. Please select an option below:
            </p>
          </div>
        </section>

        <div className="button-group">
          <button
            className={selectedContent === 'sponsors' ? 'active' : ''}
            onClick={() => setSelectedContent('sponsors')}
          >
            Sponsors
          </button>
          <button
            className={selectedContent === 'judges' ? 'active' : ''}
            onClick={() => setSelectedContent('judges')}
          >
            Judges
          </button>
        </div>

        <div className="content">
          {selectedContent === 'sponsors' && (
            <div>
              <br />
              <h2>Sponsor</h2>
              <p>
                Sponsoring the UPenn EcoVenture Challenge empowers future leaders to tackle the
                climate crisis with innovative solutions.
              </p>
              <p>
                The UPenn EcoVenture Challenge would not be possible without our sponsors. Thank you
                to our current sponsors for supporting impactful ideas and driving a sustainable
                future.
              </p>
              <p>Reach out to: prizepcv@gmail.com if you are interested in becoming a sponsor.</p>
              {/* <p><strong>Sponsor List:</strong></p>
              <p>Photos and descriptions of sponsors will be added here.</p> */}
              <br /><br /><br />
            </div>
          )}

          {selectedContent === 'judges' && (
            <div>
              <h2>Judge</h2>
              <p>
                Judges are essential to hosting a successful UPenn EcoVenture competition. By
                serving as a judge, you'll empower student entrepreneurs to bring their ideas to
                life.
              </p>
              <p>Reach out to prizepcv@gmail.com if you are interested in becoming a judge or mentor for next year's competition. We are recruiting judges for each of the three rounds: written application, slide
              deck, and live pitch judging.</p>
              <h3>Final Round Judge:</h3>
              <div className="judges-list">
                <div className="judge-item">
                  <img src={`${process.env.PUBLIC_URL}/final-round-judges/seth-snyder.png`} alt="Seth Snyder" className="judge-photo" />
                  <p>Seth Snyder</p>
                </div>
              </div>
              <h3>Final Round Speakers:</h3>
              <div className="judges-list">
                <div className="judge-item">
                  <img src={`${process.env.PUBLIC_URL}/final-round-judges/sunny-elebua.jpeg`} alt="Sunny Elebua" className="judge-photo" />
                  <p>Sunny Elebua</p>
                </div>
                <div className="judge-item">
                  <img src={`${process.env.PUBLIC_URL}/final-round-judges/beth-zonis.png`} alt="Beth Zonis" className="judge-photo" />
                  <p>Beth Zonis</p>
                </div>
              </div>
              <h3>Round 1 Judges:</h3>
              <p>We would like to thank our Round 1 Judges for their hard work grading the pitches. We could not have done this without their respective expertise in the field. Thank you to: </p>
              <ul>
                <li>Aditya Kohli - University of Pennsylvania, MBA, AI & ESG for Businesses</li>
                <li>Al Lim - Yale University, PhD, Anthropology and Environmental Studies</li>
                <li>Bibek Shrestha - Yale University, PhD, Environmental Science</li>
                <li>Brandon Licata - University of Pennsylvania, Master of Environmental Studies</li>
                <li>Christina Torres - Teachers College Columbia University, PhD, Climate Science Education</li>
                <li>Denise Anderson - University of Pennsylvania, Executive Master of Public Administration</li>
                <li>Emma Grace Cromwell - University of Pennsylvania, MES, Environmental Studies</li>
                <li>Evelyn Gordi - University of Pennsylvania, Masters, Earth and Environmental Science</li>
                <li>Farzaneh Shabani - UCLA, PhD, Civil and Environmental Engineering</li>
                <li>Gabriel Gadsden - Yale University, School of the Environment</li>
                <li>Georgia Ray - Imperial College London, PhD, Climate Mitigation Applications of Machine Learning</li>
                <li>Husel Husile - University of Pennsylvania, PhD, Social Welfare</li>
                <li>In Him Lee - Massachusetts Institute of Technology, PhD, Civil and Environmental Engineering</li>
                <li>Julia Campbell - University of Michigan, PhD, Earth and Environmental Sciences</li>
                <li>Jung-Hoon Cho - Massachusetts Institute of Technology, PhD, Civil and Environmental Engineering</li>
                <li>Katherine Bennett - Johns Hopkins University, PhD, Planetary Science</li>
                <li>Laxman Kafle - Massachusetts Institute of Technology, PhD, Civil and Environmental Engineering</li>
                <li>Lena Easton-Calabria - University of Oxford, PhD, Geography and the Environment</li>
                <li>Megan Siyi Liu - University of Oxford, Master's student in Sustainability, Enterprise, and the Environment</li>
                <li>Meiqi Li - MIT, MEng, Civil and Environmental Engineering, Climate Environment and Sustainability Track</li>
                <li>Mel Morgan - UPenn, Masters candidate, Environmental Studies</li>
                <li>Morgan Bauer - University of Pennsylvania, MSE, Robotics</li>
                <li>Muhammad Ilham Widiyantoko - Massachusetts Institute of Technology, MEng, Climate Environment and Sustainability Engineering</li>
                <li>Nabila Safitri - University of Pennsylvania, Master of Environmental Studies</li>
                <li>Riqi Zhang - Imperial College London, PhD, Environmental Policy Research</li>
                <li>Rishabh Surendran - MBA, Cornell Tech</li>
                <li>Rita Wu - University of Pennsylvania, Master of City Planning</li>
                <li>Sanyukta Singh - University of Pennsylvania, Masters, Earth and Environmental Science</li>
                <li>Sethu Lakshmi V G - University of Pennsylvania, MS, Environmental Studies (Sustainability)</li>
                <li>Simone Cavalcante - University of Pennsylvania, MS, Dual Degree Nonprofit Leadership and Earth and Environmental Science</li>
                <li>Simone Peter - MIT, PhD student in Computational Science and Engineering/Civil and Environmental Engineering</li>
                <li>Tai Schroeder - University of Pennsylvania, Dual Masters, Environmental Studies and Nonprofit Leadership</li>
                <li>Usman Jahun - Imperial College London, PhD Environmental Law & Policy</li>
                <li>Valena McEwen - Yale University, PhD, Environment</li>
                <li>Vicky Tang - University of Pennsylvania, MSSP+DA & Master in Law</li>
                <li>Vincent Bio Bediako - University of Pennsylvania, PhD Demography</li>
                <li>William Crawford - University of Pennsylvania, Master of Environmental Studies</li>
                <li>Yara Alsinan - Massachusetts Institute of Technology, MS, Civil and Environmental Engineering</li>
                <li>Yutong Du - Master of Environmental Studies, Concentration in Environmental Sustainability</li>
                <li>Zainab Melisa Sesay - University of Pennsylvania, MES, Master of Environmental Studies</li>
              </ul>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GetInvolved;