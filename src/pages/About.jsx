import { FadeUp, HeroText, StaggerContainer, StaggerItem } from '../components/animations';

function About() {
  return (
    <div className="page about">
      <HeroText>
        <h1>About Me</h1>
      </HeroText>

      <FadeUp delay={0.1}>
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
      </FadeUp>

      <FadeUp delay={0.2}>
        <section className="interests">
          <h2>Industries I'm Interested In</h2>
          <StaggerContainer>
            <ul>
              <StaggerItem><li><strong>Healthcare / Health IT</strong> — Systems where cognitive load and error prevention are critical</li></StaggerItem>
              <StaggerItem><li><strong>Aviation</strong> — Human factors in safety-critical environments</li></StaggerItem>
              <StaggerItem><li><strong>Automotive</strong> — Driver interaction and interface design</li></StaggerItem>
              <StaggerItem><li><strong>Defense</strong> — Complex systems and human-machine teaming</li></StaggerItem>
              <StaggerItem><li><strong>Technology</strong> — Workflow analysis and user experience</li></StaggerItem>
            </ul>
          </StaggerContainer>
        </section>
      </FadeUp>

      <FadeUp delay={0.3}>
        <section className="skills">
          <h2>Core Competencies</h2>
          <StaggerContainer>
            <ul>
              <StaggerItem><li>Cognitive Task Analysis</li></StaggerItem>
              <StaggerItem><li>User Interviews</li></StaggerItem>
              <StaggerItem><li>Task Flow Mapping</li></StaggerItem>
              <StaggerItem><li>Workflow Analysis</li></StaggerItem>
              <StaggerItem><li>Risk Identification</li></StaggerItem>
              <StaggerItem><li>Cognitive Load Assessment</li></StaggerItem>
            </ul>
          </StaggerContainer>
        </section>
      </FadeUp>

      <FadeUp delay={0.4}>
        <section className="tools">
          <h2>Tools</h2>
          <p>Google Docs, Google Drawings, PowerPoint, Excel</p>
          <p><em>Currently learning: Figma</em></p>
        </section>
      </FadeUp>
    </div>
  );
}

export default About;
