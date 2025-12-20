function Resume() {
  return (
    <div className="page resume">
      <h1>Resume</h1>

      <section>
        <h2>Education</h2>
        <div className="resume-item">
          <h3>Arizona State University</h3>
          <p className="resume-meta">Human Systems Engineering • Expected Graduation: 2027</p>
          <p>Relevant Coursework: Cognitive Task Analysis, Human Systems Evaluation</p>
        </div>
      </section>

      <section>
        <h2>Experience</h2>
        <div className="resume-item">
          <h3>Cognitive Task Analysis Project</h3>
          <p className="resume-meta">Academic Project • Arizona State University</p>
          <ul>
            <li>Conducted a Cognitive Task Analysis interview with a medical coder to understand workflow and decision-making</li>
            <li>Created a task flow diagram to map key tasks and decision points</li>
            <li>Identified cognitive load and potential error risks within the coding process</li>
            <li>Analyzed how system design influenced efficiency and mental workload</li>
          </ul>
        </div>

        <div className="resume-item">
          <h3>Film Production Support</h3>
          <p className="resume-meta">Technical Collaboration</p>
          <ul>
            <li>Supported production of a short film through lighting setup, filming, and basic editing</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Skills</h2>
        <div className="skills-list">
          <div>
            <h4>Methods</h4>
            <p>Cognitive Task Analysis, User Interviews, Task Flow Mapping, Workflow Analysis, Risk Identification</p>
          </div>
          <div>
            <h4>Tools</h4>
            <p>Google Docs, Google Drawings, PowerPoint, Excel</p>
          </div>
        </div>
      </section>

      <div className="resume-download">
        <p><em>[PDF download link will be added here]</em></p>
      </div>
    </div>
  );
}

export default Resume;
