function CaseStudy() {
  return (
    <div className="page case-study">
      <article>
        <header>
          <h1>Cognitive Task Analysis: Medical Coding Workflow</h1>
          <p className="case-meta">UX Research • Human Factors • Healthcare</p>
        </header>

        <section>
          <h2>Overview</h2>
          <p>
            This project involved conducting a Cognitive Task Analysis (CTA) with
            a medical coder to understand workflow, identify cognitive load, and
            uncover potential error risks in the coding process.
          </p>
        </section>

        <section>
          <h2>Context</h2>
          <p>
            Medical coding requires sustained attention, accuracy, and navigation
            of complex information systems. Errors can have downstream impacts on
            billing accuracy and compliance.
          </p>
        </section>

        <section>
          <h2>My Role</h2>
          <ul>
            <li>Planned and conducted a semi-structured interview</li>
            <li>Mapped the coder's task workflow</li>
            <li>Identified points of high cognitive load and error risk</li>
            <li>Analyzed how system design affected performance</li>
          </ul>
        </section>

        <section>
          <h2>Process</h2>
          <ol>
            <li>Interviewed a medical coder about daily tasks and challenges</li>
            <li>Documented task sequences and decision points</li>
            <li>Created a task flow diagram</li>
            <li>Analyzed where cognitive overload or errors could occur</li>
          </ol>
        </section>

        {/* Task Flow Diagram - Add your image here */}
        <section className="artifact">
          <h2>Task Flow Diagram</h2>
          <div className="image-placeholder">
            {/* Replace with: <img src="/path-to-your-diagram.png" alt="Task Flow Diagram" /> */}
            <p><em>[Task flow diagram will be added here]</em></p>
          </div>
        </section>

        <section>
          <h2>Key Findings</h2>
          <ul>
            <li>High cognitive load during information lookup and code selection</li>
            <li>Risk of errors caused by system navigation and information density</li>
            <li>Repetitive tasks increased mental fatigue</li>
          </ul>
        </section>

        <section>
          <h2>Reflections</h2>
          <p>
            This project strengthened my understanding of how human factors methods
            can reveal usability and safety issues in complex systems. It also showed
            how small system design changes could reduce cognitive strain and errors.
          </p>
        </section>
      </article>
    </div>
  );
}

export default CaseStudy;
