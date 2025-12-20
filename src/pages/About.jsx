function About() {
  return (
    <div className="page about">
      <h1>About Me</h1>

      <section className="bio">
        <p>
          I am a UX and Human Factors–oriented engineering student studying
          Human Systems Engineering at Arizona State University. I am particularly
          interested in understanding how people interact with complex systems,
          identifying cognitive load, error risks, and workflow breakdowns, and
          using that insight to improve safety and usability.
        </p>
        <p>
          Through coursework such as Cognitive Task Analysis and Human Systems
          Evaluation, I have gained experience interviewing users, mapping tasks,
          and analyzing system risks. I am seeking an internship where I can
          continue developing my skills in UX research and human factors while
          learning how these methods are applied in real-world systems.
        </p>
      </section>

      <section className="interests">
        <h2>Industries I'm Interested In</h2>
        <ul>
          <li><strong>Healthcare / Health IT</strong> — Systems where cognitive load and error prevention are critical</li>
          <li><strong>Aviation</strong> — Human factors in safety-critical environments</li>
          <li><strong>Automotive</strong> — Driver interaction and interface design</li>
          <li><strong>Defense</strong> — Complex systems and human-machine teaming</li>
          <li><strong>Technology</strong> — Workflow analysis and user experience</li>
        </ul>
      </section>

      <section className="skills">
        <h2>Core Competencies</h2>
        <ul>
          <li>Cognitive Task Analysis</li>
          <li>User Interviews</li>
          <li>Task Flow Mapping</li>
          <li>Workflow Analysis</li>
          <li>Risk Identification</li>
          <li>Cognitive Load Assessment</li>
        </ul>
      </section>

      <section className="tools">
        <h2>Tools</h2>
        <p>Google Docs, Google Drawings, PowerPoint, Excel</p>
        <p><em>Currently learning: Figma</em></p>
      </section>
    </div>
  );
}

export default About;
