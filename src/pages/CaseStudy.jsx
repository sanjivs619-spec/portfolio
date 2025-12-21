import ctaDiagram from '../assets/images/cta-diagram.png';
import { motion } from 'framer-motion';
import { FadeUp, HeroText, StaggerContainer, StaggerItem } from '../components/animations';

function CaseStudy() {
  return (
    <div className="page case-study container">
      <article>
        <header>
          <HeroText>
            <h1>Cognitive Task Analysis: Medical Coding Workflow</h1>
          </HeroText>
          <HeroText delay={0.1}>
            <p className="case-meta">UX Research • Human Factors • Healthcare</p>
          </HeroText>
        </header>

        {/* Executive Summary - TL;DR for busy hiring managers */}
        <FadeUp delay={0.2}>
          <section className="executive-summary">
            <h2>Executive Summary</h2>
            <div className="summary-grid">
              <div className="summary-item">
                <h4>Context</h4>
                <p>Medical coding requires high accuracy in complex information systems where errors impact billing and compliance.</p>
              </div>
              <div className="summary-item">
                <h4>Method</h4>
                <p>Conducted Cognitive Task Analysis interview with SME, mapped workflow, and identified error risks.</p>
              </div>
              <div className="summary-item">
                <h4>My Role</h4>
                <p>Led interview planning, task flow documentation, and cognitive load analysis.</p>
              </div>
              <div className="summary-item">
                <h4>Key Finding</h4>
                <p>Identified high cognitive load during code lookup and system navigation as primary error risk factors.</p>
              </div>
            </div>
          </section>
        </FadeUp>

        <FadeUp>
          <section>
            <h2>Overview</h2>
            <p>
              This project involved conducting a Cognitive Task Analysis (CTA) with
              a medical coder to understand workflow, identify cognitive load, and
              uncover potential error risks in the coding process.
            </p>
          </section>
        </FadeUp>

        <FadeUp>
          <section>
            <h2>Context</h2>
            <p>
              Medical coding requires sustained attention, accuracy, and navigation
              of complex information systems. Errors can have downstream impacts on
              billing accuracy and compliance.
            </p>
          </section>
        </FadeUp>

        <FadeUp>
          <section>
            <h2>My Role</h2>
            <StaggerContainer>
              <ul>
                <StaggerItem><li>Planned and conducted a semi-structured interview</li></StaggerItem>
                <StaggerItem><li>Mapped the coder's task workflow</li></StaggerItem>
                <StaggerItem><li>Identified points of high cognitive load and error risk</li></StaggerItem>
                <StaggerItem><li>Analyzed how system design affected performance</li></StaggerItem>
              </ul>
            </StaggerContainer>
          </section>
        </FadeUp>

        <FadeUp>
          <section>
            <h2>Process</h2>
            <StaggerContainer>
              <ol>
                <StaggerItem><li>Interviewed a medical coder about daily tasks and challenges</li></StaggerItem>
                <StaggerItem><li>Documented task sequences and decision points</li></StaggerItem>
                <StaggerItem><li>Created a task flow diagram</li></StaggerItem>
                <StaggerItem><li>Analyzed where cognitive overload or errors could occur</li></StaggerItem>
              </ol>
            </StaggerContainer>
          </section>
        </FadeUp>

        <FadeUp>
          <section className="artifact">
            <h2>Task Flow Diagram</h2>
            <motion.img
              src={ctaDiagram}
              alt="Medical Coding Workflow Task Flow Diagram"
              className="diagram-image"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </section>
        </FadeUp>

        <FadeUp>
          <section>
            <h2>Key Findings</h2>
            <StaggerContainer>
              <ul>
                <StaggerItem><li>High cognitive load during information lookup and code selection</li></StaggerItem>
                <StaggerItem><li>Risk of errors caused by system navigation and information density</li></StaggerItem>
                <StaggerItem><li>Repetitive tasks increased mental fatigue</li></StaggerItem>
              </ul>
            </StaggerContainer>
          </section>
        </FadeUp>

        <FadeUp>
          <section>
            <h2>Reflections</h2>
            <p>
              This project strengthened my understanding of how human factors methods
              can reveal usability and safety issues in complex systems. It also showed
              how small system design changes could reduce cognitive strain and errors.
            </p>
          </section>
        </FadeUp>
      </article>
    </div>
  );
}

export default CaseStudy;
