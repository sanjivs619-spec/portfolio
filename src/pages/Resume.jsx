import { FadeUp, HeroText, AnimatedButton, StaggerContainer, StaggerItem } from '../components/animations';

function Resume() {
  return (
    <div className="page resume">
      <HeroText>
        <h1>Resume</h1>
      </HeroText>

      <FadeUp delay={0.1}>
        <section className="summary">
          <h2>Summary</h2>
          <p>
            UX and Human Factors–oriented engineering student studying Human Systems Engineering
            at Arizona State University. Experienced in Cognitive Task Analysis, workflow mapping,
            and identifying cognitive load and error risks in complex systems. Seeking a Summer 2026
            internship in UX Research, Human Factors, or Human Systems Integration.
          </p>
        </section>
      </FadeUp>

      <FadeUp>
        <section>
          <h2>Education</h2>
          <div className="resume-item">
            <h3>Arizona State University – Polytechnic Campus</h3>
            <p className="resume-meta">B.S. Human Systems Engineering • Mesa, AZ • Expected Graduation: 2028</p>
            <p><strong>GPA:</strong> 3.10</p>
            <p><strong>Relevant Coursework:</strong> Human Systems Engineering, Applied Social Science,
            Cognitive Task Analysis, Engineering Fundamentals, Statistics for Human Systems Research (in progress)</p>
          </div>
        </section>
      </FadeUp>

      <FadeUp>
        <section>
          <h2>Project Experience</h2>
          <div className="resume-item">
            <h3>Cognitive Task Analysis – Medical Coding Workflow</h3>
            <p className="resume-meta">Course Project • Arizona State University</p>
            <StaggerContainer>
              <ul>
                <StaggerItem><li>Conducted a Cognitive Task Analysis interview with a medical coder to understand task flow, decision-making, and workflow challenges</li></StaggerItem>
                <StaggerItem><li>Created a task flow diagram using Google Drawings to map key steps and decision points</li></StaggerItem>
                <StaggerItem><li>Identified areas of high cognitive load and potential error risks within the coding process</li></StaggerItem>
                <StaggerItem><li>Analyzed how system design and information presentation impacted efficiency and mental workload</li></StaggerItem>
                <StaggerItem><li>Documented findings and reflected on opportunities to reduce errors and cognitive strain</li></StaggerItem>
              </ul>
            </StaggerContainer>
          </div>
        </section>
      </FadeUp>

      <FadeUp>
        <section>
          <h2>Technical & Analytical Skills</h2>
          <div className="skills-grid">
            <StaggerContainer>
              <ul>
                <StaggerItem><li>Cognitive Task Analysis (CTA)</li></StaggerItem>
                <StaggerItem><li>Workflow and task flow mapping</li></StaggerItem>
                <StaggerItem><li>Identifying cognitive load and error risk</li></StaggerItem>
                <StaggerItem><li>Qualitative interviewing (guided)</li></StaggerItem>
                <StaggerItem><li>Systems thinking</li></StaggerItem>
                <StaggerItem><li>Written analysis and documentation</li></StaggerItem>
              </ul>
            </StaggerContainer>
          </div>
        </section>
      </FadeUp>

      <FadeUp>
        <section>
          <h2>Tools</h2>
          <p>Google Docs, Google Drawings (task flow diagrams), PowerPoint, Excel</p>
        </section>
      </FadeUp>

      <FadeUp>
        <section>
          <h2>Additional Experience</h2>
          <div className="resume-item">
            <h3>Technical Production Support – Short Film</h3>
            <p className="resume-meta">San Diego Malayalam Association • Volunteer</p>
            <StaggerContainer>
              <ul>
                <StaggerItem><li>Assisted with lighting setup, filming, and basic video editing</li></StaggerItem>
                <StaggerItem><li>Supported production workflows in a collaborative team environment</li></StaggerItem>
                <StaggerItem><li>Followed technical direction to ensure consistent visual quality</li></StaggerItem>
              </ul>
            </StaggerContainer>
          </div>
        </section>
      </FadeUp>

      <FadeUp>
        <section>
          <h2>Interests</h2>
          <p>Human Factors Engineering, UX Research, Safety-Critical Systems, Healthcare Systems, Workflow Optimization</p>
        </section>
      </FadeUp>

      <FadeUp>
        <div className="resume-download">
          <AnimatedButton>
            <a
              href="/Sanjiv_Suresh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              Download PDF Resume
            </a>
          </AnimatedButton>
        </div>
      </FadeUp>
    </div>
  );
}

export default Resume;
