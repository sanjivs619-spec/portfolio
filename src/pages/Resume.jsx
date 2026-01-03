import { FadeUp, HeroText, AnimatedButton } from '../components/animations';

function Resume() {
  const skills = {
    'Research Methods': ['Cognitive Task Analysis', 'User Interviews', 'Task Flow Mapping', 'Workflow Analysis'],
    'Analysis': ['Cognitive Load Assessment', 'Error Risk Identification', 'Systems Thinking', 'Documentation'],
    'Tools': ['Google Workspace', 'PowerPoint', 'Excel', 'Figma (Learning)']
  };

  return (
    <div className="page resume container">
      {/* Header with contact info */}
      <header className="resume-header">
        <HeroText>
          <h1>Sanjiv Suresh</h1>
        </HeroText>
        <HeroText delay={0.1}>
          <p className="resume-title">Human Systems Engineering Student</p>
        </HeroText>
        <HeroText delay={0.15}>
          <div className="resume-contact">
            <a href="mailto:Sanjivsuresh619@gmail.com">Sanjivsuresh619@gmail.com</a>
            <span className="separator">•</span>
            <a href="tel:+14803896098">(480) 389-6098</a>
            <span className="separator">•</span>
            <span>Mesa, AZ</span>
            <span className="separator">•</span>
            <a href="https://www.linkedin.com/in/sanjiv-suresh-58221b39b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </HeroText>
      </header>

      <div className="resume-body">
        {/* Summary */}
        <FadeUp delay={0.2}>
          <section className="resume-section">
            <h2 className="section-title">Summary</h2>
            <p className="summary-text">
              Human Systems Engineering student with applied experience in Cognitive Task Analysis (CTA), workflow evaluation, and
              human factors research within complex systems, including healthcare contexts. Demonstrated ability to identify usability
              risks, cognitive load drivers, and error-prone interactions in safety-critical environments. Skilled in translating task analysis
              findings into clear, actionable recommendations to improve system usability, efficiency, and safety. Seeking a Summer
              2026 internship in human factors, user experience, or systems-oriented roles.
            </p>
          </section>
        </FadeUp>

        {/* Education */}
        <FadeUp>
          <section className="resume-section">
            <h2 className="section-title">Education</h2>
            <div className="resume-entry">
              <div className="entry-header">
                <div>
                  <h3 className="entry-title">Arizona State University – Polytechnic Campus</h3>
                  <p className="entry-subtitle">Bachelor of Science in Human Systems Engineering</p>
                </div>
                <div className="entry-meta">
                  <span className="location">Mesa, AZ</span>
                  <span className="date">Expected May 2028</span>
                </div>
              </div>
              <div className="entry-details">
                <p><strong>GPA:</strong> 3.10</p>
                <p><strong>Relevant Coursework:</strong> Cognitive Task Analysis, Human Systems Engineering,
                Applied Social Science, Engineering Fundamentals, Statistics for Human Systems Research</p>
              </div>
            </div>
          </section>
        </FadeUp>

        {/* Project Experience */}
        <FadeUp>
          <section className="resume-section">
            <h2 className="section-title">Project Experience</h2>
            <div className="resume-entry">
              <div className="entry-header">
                <div>
                  <h3 className="entry-title">Cognitive Task Analysis – Medical Coding Workflow</h3>
                  <p className="entry-subtitle">Course Project, Arizona State University</p>
                </div>
                <div className="entry-meta">
                  <span className="date">Fall 2024</span>
                </div>
              </div>
              <ul className="entry-bullets">
                <li>Planned and conducted semi-structured CTA interview with medical coding SME to map task flow and decision-making processes</li>
                <li>Created comprehensive task flow diagram documenting 12+ workflow steps and key decision points</li>
                <li>Identified 3 high-risk areas for cognitive overload during code lookup and system navigation</li>
                <li>Analyzed system design factors contributing to mental fatigue and error susceptibility</li>
                <li>Delivered findings report with actionable recommendations to reduce cognitive strain</li>
              </ul>
            </div>
          </section>
        </FadeUp>

        {/* Additional Experience */}
        <FadeUp>
          <section className="resume-section">
            <h2 className="section-title">Additional Experience</h2>
            <div className="resume-entry">
              <div className="entry-header">
                <div>
                  <h3 className="entry-title">Technical Production Support</h3>
                  <p className="entry-subtitle">San Diego Malayalam Association – Volunteer</p>
                </div>
                <div className="entry-meta">
                  <span className="date">2023</span>
                </div>
              </div>
              <ul className="entry-bullets">
                <li>Coordinated lighting setup and camera positioning for short film production</li>
                <li>Collaborated with 5-person crew to maintain consistent visual quality across scenes</li>
                <li>Assisted with video editing workflow, ensuring timely delivery of final cut</li>
              </ul>
            </div>
          </section>
        </FadeUp>

        {/* Skills */}
        <FadeUp>
          <section className="resume-section">
            <h2 className="section-title">Skills</h2>
            <div className="skills-container">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skill-category">
                  <h4 className="skill-category-title">{category}</h4>
                  <div className="skill-tags">
                    {items.map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeUp>

        {/* Interests */}
        <FadeUp>
          <section className="resume-section interests-section">
            <h2 className="section-title">Areas of Interest</h2>
            <div className="interest-tags">
              <span className="interest-tag">Healthcare Systems</span>
              <span className="interest-tag">Aviation Human Factors</span>
              <span className="interest-tag">Medical Device Usability</span>
              <span className="interest-tag">Safety-Critical Systems</span>
              <span className="interest-tag">Workflow Optimization</span>
            </div>
          </section>
        </FadeUp>
      </div>

      {/* Download CTA */}
      <FadeUp>
        <div className="resume-download">
          <AnimatedButton>
            <a
              href="/Sanjiv_Suresh_HSE_Resume.pdf"
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
