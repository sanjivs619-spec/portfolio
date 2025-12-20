function Resume() {
  return (
    <div className="page resume">
      <h1>Resume</h1>

      <section className="summary">
        <h2>Summary</h2>
        <p>
          UX and Human Factors–oriented engineering student studying Human Systems Engineering
          at Arizona State University. Experienced in Cognitive Task Analysis, workflow mapping,
          and identifying cognitive load and error risks in complex systems. Seeking a Summer 2026
          internship in UX Research, Human Factors, or Human Systems Integration.
        </p>
      </section>

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

      <section>
        <h2>Project Experience</h2>
        <div className="resume-item">
          <h3>Cognitive Task Analysis – Medical Coding Workflow</h3>
          <p className="resume-meta">Course Project • Arizona State University</p>
          <ul>
            <li>Conducted a Cognitive Task Analysis interview with a medical coder to understand task flow, decision-making, and workflow challenges</li>
            <li>Created a task flow diagram using Google Drawings to map key steps and decision points</li>
            <li>Identified areas of high cognitive load and potential error risks within the coding process</li>
            <li>Analyzed how system design and information presentation impacted efficiency and mental workload</li>
            <li>Documented findings and reflected on opportunities to reduce errors and cognitive strain</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Technical & Analytical Skills</h2>
        <div className="skills-grid">
          <ul>
            <li>Cognitive Task Analysis (CTA)</li>
            <li>Workflow and task flow mapping</li>
            <li>Identifying cognitive load and error risk</li>
            <li>Qualitative interviewing (guided)</li>
            <li>Systems thinking</li>
            <li>Written analysis and documentation</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Tools</h2>
        <p>Google Docs, Google Drawings (task flow diagrams), PowerPoint, Excel</p>
      </section>

      <section>
        <h2>Additional Experience</h2>
        <div className="resume-item">
          <h3>Technical Production Support – Short Film</h3>
          <p className="resume-meta">San Diego Malayalam Association • Volunteer</p>
          <ul>
            <li>Assisted with lighting setup, filming, and basic video editing</li>
            <li>Supported production workflows in a collaborative team environment</li>
            <li>Followed technical direction to ensure consistent visual quality</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Interests</h2>
        <p>Human Factors Engineering, UX Research, Safety-Critical Systems, Healthcare Systems, Workflow Optimization</p>
      </section>

      <div className="resume-download">
        <a
          href="/Sanjiv_Suresh_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn primary"
        >
          Download PDF Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
