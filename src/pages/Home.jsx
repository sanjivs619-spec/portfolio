import { Link } from 'react-router-dom';
import headshot from '../assets/images/headshot.png';
import {
  HeroText,
  FloatingElement,
  FadeUp,
  StaggerContainer,
  StaggerItem,
  AnimatedButton,
  InteractiveCard,
} from '../components/animations';

function Home() {
  return (
    <div className="page home container">
      <section className="hero">
        <FloatingElement>
          <div className="headshot-wrapper">
            <div className="headshot-glow"></div>
            <img src={headshot} alt="Sanjiv Suresh" className="headshot" />
          </div>
        </FloatingElement>

        <HeroText delay={0}>
          <h1>Hi, I'm Sanjiv</h1>
        </HeroText>
        <HeroText delay={0.1}>
          <p className="tagline">
            UX & Human Factors–oriented engineering student passionate about
            understanding how people interact with complex systems.
          </p>
        </HeroText>
        <HeroText delay={0.2}>
          <p className="subtitle">
            Human Systems Engineering & User Experience @ ASU
          </p>
        </HeroText>
        <HeroText delay={0.3}>
          <div className="cta-buttons">
            <AnimatedButton>
              <Link to="/case-study" className="btn primary">View My Work</Link>
            </AnimatedButton>
            <AnimatedButton>
              <a
                href="/Sanjiv_Suresh_HSE_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary"
              >
                Download Resume
              </a>
            </AnimatedButton>
          </div>
        </HeroText>
      </section>

      <FadeUp>
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
      </FadeUp>

      <section className="focus-areas">
        <FadeUp>
          <h2>What I Do</h2>
        </FadeUp>
        <StaggerContainer className="focus-grid">
          <StaggerItem>
            <InteractiveCard>
              <div className="focus-card">
                <h3>UX Research</h3>
                <p>User interviews, usability testing, and research synthesis to understand user needs.</p>
              </div>
            </InteractiveCard>
          </StaggerItem>
          <StaggerItem>
            <InteractiveCard>
              <div className="focus-card">
                <h3>Human Factors</h3>
                <p>Cognitive task analysis, workload assessment, and error prevention in complex systems.</p>
              </div>
            </InteractiveCard>
          </StaggerItem>
          <StaggerItem>
            <InteractiveCard>
              <div className="focus-card">
                <h3>Systems Thinking</h3>
                <p>Understanding how people and systems interact to improve safety and usability.</p>
              </div>
            </InteractiveCard>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Gradient CTA Section */}
      <FadeUp>
        <section className="cta-section">
          <h2>Let's Connect</h2>
          <p>
            I'm seeking a Summer 2026 internship in UX Research or Human Factors.
            If you're working on systems where usability impacts safety, I'd love to learn from your team.
          </p>
          <AnimatedButton>
            <Link to="/contact" className="btn cta-btn">Get in Touch</Link>
          </AnimatedButton>
        </section>
      </FadeUp>
    </div>
  );
}

export default Home;
