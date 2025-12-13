import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import './Application.css';

const Application = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleDropdown = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  const faqData = [
    {
      id: 'q1',
      question: 'Do high school student teams require an adult to be the team mentor?',
      answer: 'Yes, every high school team needs an adult mentor. This can be any legal supervisor: a teacher, a parent, a research mentor, etc.!'
    },
    {
      id: 'q2',
      question: 'Does having a product or project I\'ve been working on give me an advantage?',
      answer: 'Not directly. Having a product is not part of the essay grading rubric, so you won\'t receive extra points just for having one. However, working on a product can demonstrate its feasibility and help us better understand your idea, which can positively impact how we evaluate your essay based on the criteria provided.'
    },
    {
      id: 'q3',
      question: 'Is my team expected to have a fully completed project or product before submitting the slide deck?',
      answer: 'No, a fully completed project or product is not required. However, you should show some progress and demonstrate tangible actions you\'ve taken to bring your project or product closer to reality. The more progress you\'ve made, the stronger your presentation will be.'
    },
    {
      id: 'q4',
      question: 'How much will participating cost me?',
      answer: 'The competition is completely free to participate!'
    },
    {
      id: 'q5',
      question: 'Do you have to be a UPenn student to participate?',
      answer: 'You do not have to be a UPenn student. We encourage all high school and college students (undergraduates) from around the globe to participate.'
    },
    {
      id: 'q6',
      question: 'What should I do if I have additional questions?',
      answer: 'Feel free to email us at prizepcv@gmail.com!'
    }
  ];

  return (
    <div>
      <Navbar />
      <header className="hero-section about-hero">
        <img
          src={`${process.env.PUBLIC_URL}/penn-campus2.png`}
          alt="PRIZE Committee"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="title">Applications</h1>
          <p className="subheading">
            Preparing tomorrow’s leaders to tackle today’s climate crisis.
          </p>
        </div>
      </header>

      <main className="main-content">
        <section className="section">
          <div className="content">
            <h2 className="heading">Application opens 1/26/2026!</h2>
            <p>
              Solutions can range from physical products to forums, events, or community service initiatives—either new ideas or existing projects you want to expand. Participants are encouraged to submit a prototype or demonstrate tangible progress, though it doesn't need to be extensive.
              <br />
              <br />
              The deadline for the first round is 3/21/2026.
            </p>

            <a
              href="https://airtable.com/appsSPuO4G3jMYsxD/pagSMx2lt3o1Mb2qx/form"
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              University Application
            </a>
            <br />
            <a
              href="https://airtable.com/appsSPuO4G3jMYsxD/pag57g9FCHY7p8KUO/form"
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              High School Application
            </a>
          </div>
        </section>

        <section className="section">
          <hr />
        </section>

        <section className="section schedule-section">
          <div className="content">
            <h2 className="heading">Timeline</h2>
            
            <h3>Round 1: Registration &amp; Application Development</h3>
            <ul>
              <li>
                <strong>Jan 26 – Registration Opens:</strong> Register and form your team (up to 5 members).
              </li>
              <li>
                <strong>Application Preparation:</strong> Begin drafting your 15 page slidedeck.
              </li>
              <li>
                <strong>March 21 – First Round Submission Deadline:</strong> Submit your complete application by this date.
              </li>
              <li>
                <strong>March 22 – Mandatory Opening Ceremony:</strong> Attend our virtual opening event to get to know the competition, meet our sponsors, and hear insights from Penn alumni in the energy field.
              </li>
              <li>
                <strong>April 4 – First Round Results Announced:</strong> The top 4 teams per track will progress to the final round.
              </li>
            </ul>

            {/* <h3>Round 2: Project Development &amp; Execution</h3>
            <ul>
              <li>
                <strong>Project Brief:</strong> Advancing teams are required to develop a comprehensive, up to 15-page pitch. This phase emphasizes practical environmental action to demonstrate real progress on your proposed idea.
              </li>
              <li>
                <strong>Apr 4 – Second Round Submission Deadline:</strong> Ensure your updated and enhanced proposal is submitted by this date. Details will be released on March 28, 2025.
              </li>
              <li>
                <strong>Apr 18 – Second Round Results Announced:</strong> Four teams per track (eight teams total) will advance to the Final Round.
              </li>
            </ul> */}

            <h3>Final Round: Live Pitch Presentation</h3>
            <p>
              4 teams from each track will compete in a live zoom pitch to industry leaders and professors.
              Results will be announced live on the Zoom call after judges debrief.
            </p>
            <p style={{ fontStyle: 'italic' }}>
              More information on our final round will be available after the results of our 1st round are released.
            </p>
          </div>
        </section>

        <section className="section">
          <hr />
        </section>

        <section className="section">
          <div className="content">
            <h2 className="heading">Eligibility Requirements</h2>
            <br />
            <br />

            <h3>Innovation &amp; Originality Requirements</h3>
            <ul>
              <li>Your idea or startup must be <b>original</b> and developed by your team.</li>
              <li>
                You <b>cannot</b> submit an existing business, product, or solution <b>owned by a company or individual not on your team.</b>
              </li>
              <li>
                Modifications or improvements to existing technologies must demonstrate significant innovation, new applications, or unique business models that set them apart.
              </li>
            </ul>

            <h3>Academic &amp; Professional Status</h3>
            <ul>
              <li>
                <strong>University Division:</strong> Open to undergraduate and master's students. <b>PhD students, postdocs, and faculty members are not eligible to compete</b> as official team members but may serve as mentors or advisors to high school students.
              </li>
              <li>
                <strong>High School Division:</strong> Open to all currently enrolled high school students, including homeschooled students at an equivalent educational level.
              </li>
            </ul>

            <h3>Team Composition &amp; Role Expectations</h3>
            <ul>
              <li>
                <strong>One Primary Contact:</strong> One member of each team must be designated as the main point of contact to submit the application and receive communications from the competition organizers.
              </li>
              <li>
                <strong>Cross-Institution Collaboration Allowed:</strong> Teams do not need to be from the same school, university, or country, as long as they fit within the same division.
              </li>
              <li>
                <strong>Number of Team Members:</strong> Teams should consist of 1-5 members in the same pool (excluding their mentor).
              </li>
            </ul>

            <h3>Competition-Specific Limitations</h3>
            <ul>
              <li>
                <strong>Past Winners:</strong> Teams that have <b>previously won the Penn EcoVenture Challenge’s cash prize</b> are not eligible to compete with the same idea, but they may apply with a new project.
              </li>
              <li>
                <strong>Multiple Applications:</strong> The same person cannot be a part of more than one team submission.
              </li>
              <li>
                <strong>Conflict of Interest:</strong> If any team member is closely affiliated with the competition organizers, judges, or sponsors (e.g., immediate family members), the team must disclose this in their application.
              </li>
              <li>
                <strong>Funding Limitations:</strong> You have NOT received more than $25K in external funding, dilutive or non-dilutive. In fact, you do not need to have any funding at all and startups can simply be pitches!
              </li>
            </ul>

            <p>
              PCV reserves the <b>right to disqualify</b> any project that does not meet the eligibility requirements or violates the competition's integrity standards.
            </p>
            <p>
              All participants are required to sign up on the registration form and participate in the virtual opening ceremony on <b>March 22nd, 2026.</b> The link to the virtual opening ceremony will be provided to your email prior to the event.
            </p>
          </div>
        </section>


        <section className="section">
          <hr />
        </section>




        <section className="section">
          <div className="content">
            <h2 className="heading">Rubric</h2>
            <p>Participants will be evaluated based on the following key criteria:</p>
            
            <div className="rubric-category">
              <img
                src={`${process.env.PUBLIC_URL}/rubric1.png`}
                alt="Problem Identification Rubric"
              />
              <div className="rubric-text">
                <h3>Problem Identification</h3>
                <p>
                Teams must clearly define a specific climate-related issue with a unique perspective, backed by credible research.
                Judges will assess the significance of the problem and the team's understanding of its existing challenges.                </p>
              </div>
            </div>

            <div className="rubric-category">
              <img
                src={`${process.env.PUBLIC_URL}/rubric2.png`}
                alt="Solution Feasibility Rubric"
              />
              <div className="rubric-text">
                <h3>Solution Feasibility &amp; Innovation</h3>
                <p>
                  The solution should be specific, practical, and well thought out. Teams must demonstrate deep understanding of its mechanics, provide supporting data, and analyze environmental impact and long-term sustainability.
                </p>
              </div>
            </div>

            <div className="rubric-category">
              <img
                src={`${process.env.PUBLIC_URL}/rubric3.png`}
                alt="Comparative Analysis Rubric"
              />
              <div className="rubric-text">
                <h3>Comparative Analysis &amp; Market Viability</h3>
                <p>
                Submissions should include thorough market research and clear competitive advantage. Judges will evaluate how the team differentiates their solution, considers cost and scalability, and identifies risks with actionable strategies.                </p>
              </div>
            </div>

            <div className="rubric-category extra-margin">
              <img
                src={`${process.env.PUBLIC_URL}/rubric4.png`}
                alt="Style & Presentation Rubric"
              />
              <div className="rubric-text">
                <h3>Style &amp; Presentation</h3>
                <p>
                  Submissions should be clear, concise, and professionally written. High-quality visuals, data integration, and an engaging presentation will enhance the effectiveness of the pitch.
                </p>
              </div>
            </div>

            <p>
              The UPenn EcoVenture Challenge seeks bold, data-driven, and actionable climate solutions. Judges will prioritize innovation, depth of analysis, and clarity in execution.
            </p>
          </div>
        </section>


        <section className="section">
          <hr />
        </section>

        <section className="section">
          <div className="content">
            <h2 className="heading">FAQ</h2>
            <br />
            {faqData.map(({ id, question, answer }) => (
              <div key={id} className="faq-item">
                <button
                  className={`faq-button ${openQuestion === id ? 'active' : ''}`}
                  onClick={() => toggleDropdown(id)}
                >
                  {question}
                </button>
                <div className={`faq-answer ${openQuestion === id ? 'show' : ''}`}>
                  <p>{answer}</p>
                </div>
              </div>
            ))}
            <br /><br />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Application;