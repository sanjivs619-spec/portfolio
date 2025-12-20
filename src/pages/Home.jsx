import { Link } from 'react-router-dom';
import headshot from '../assets/images/headshot.png';

function Home() {
  return (
    <div className="page home">
      <section className="hero">
        <img src={headshot} alt="Sanjiv Suresh" className="headshot" />
        <h1>Hi, I'm Sanjiv</h1>
        <p className="tagline">
          UX & Human Factors–oriented engineering student passionate about
          understanding how people interact with complex systems.
        </p>
        <p className="subtitle">
          Human Systems Engineering @ Arizona State University
        </p>
        <div className="cta-buttons">
          <Link to="/case-study" className="btn primary">View My Work</Link>
          <a
            href="/Sanjiv_Suresh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            Download Resume
          </a>
        </div>
      </section>

      <section className="differentiator">
        <h2>Why Human Systems Engineering?</h2>
        <p className="differentiator-text">
          Most UX roles focus on digital products. I'm drawn to <strong>safety-critical systems</strong>—healthcare,
          aviation, defense—where understanding human cognition isn't just about better experiences,
          it's about <strong>preventing errors that matter</strong>. My training in Cognitive Task Analysis
          and workflow mapping gives me tools to see what users can't articulate: the mental models,
          decision points, and cognitive load that drive real-world performance.
        </p>
      </section>

      <section className="focus-areas">
        <h2>What I Do</h2>
        <div className="focus-grid">
          <div className="focus-card">
            <h3>UX Research</h3>
            <p>User interviews, usability testing, and research synthesis to understand user needs.</p>
          </div>
          <div className="focus-card">
            <h3>Human Factors</h3>
            <p>Cognitive task analysis, workload assessment, and error prevention in complex systems.</p>
          </div>
          <div className="focus-card">
            <h3>Systems Thinking</h3>
            <p>Understanding how people and systems interact to improve safety and usability.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
