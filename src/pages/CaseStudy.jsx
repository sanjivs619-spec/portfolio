import flowchartDiagram from '../assets/images/3m-flowchart.png';
import { motion } from 'framer-motion';
import { FadeUp, HeroText, StaggerContainer, StaggerItem } from '../components/animations';

function CaseStudy() {
  // HSI Pillars data
  const hsiPillars = [
    { name: 'Human Factors', icon: '🧠', desc: 'Cognitive load, usability, error prevention' },
    { name: 'Personnel', icon: '👥', desc: 'User roles, expertise requirements' },
    { name: 'Training', icon: '📚', desc: 'Learning curve, skill development' },
    { name: 'System Safety', icon: '🛡️', desc: 'Error detection, risk mitigation' },
    { name: 'Survivability', icon: '⚡', desc: 'System reliability, uptime' },
    { name: 'Manpower', icon: '📊', desc: 'Staffing needs, workload distribution' },
    { name: 'Health Hazard', icon: '💪', desc: 'Physical strain, fatigue factors' },
  ];

  // Requirements data from HSI evaluation
  const requirements = [
    { id: 'R1', name: 'Search Response Time', pillar: 'Human Factors', desc: 'Code lookup results within 2 seconds to maintain workflow' },
    { id: 'R2', name: 'Filtering Capabilities', pillar: 'Human Factors', desc: 'Multi-criteria filtering to reduce cognitive overload' },
    { id: 'R3', name: 'Guideline Access', pillar: 'Training', desc: 'In-context access to coding guidelines without leaving workflow' },
    { id: 'R4', name: 'Code Conflict Detection', pillar: 'System Safety', desc: 'Automatic flagging of incompatible code combinations' },
    { id: 'R5', name: 'Missing Documentation Alerts', pillar: 'System Safety', desc: 'Proactive identification of incomplete records' },
    { id: 'R6', name: 'Training Environment', pillar: 'Training', desc: 'Safe practice mode for new coders without affecting production' },
    { id: 'R7', name: 'Visual Ergonomics', pillar: 'Health Hazard', desc: 'Adjustable display settings for extended use sessions' },
    { id: 'R8', name: 'System Availability', pillar: 'Survivability', desc: '99.9% uptime requirement during business hours' },
    { id: 'R9', name: 'Case Completion Tracking', pillar: 'Manpower', desc: 'Real-time visibility into workload and throughput' },
    { id: 'R10', name: 'Provider Query Support', pillar: 'Personnel', desc: 'Integrated communication for documentation clarification' },
  ];

  // Evaluation results
  const evaluationResults = [
    { status: 'met', count: 4, label: 'Fully Met' },
    { status: 'partial', count: 4, label: 'Partially Met' },
    { status: 'unmet', count: 2, label: 'Not Met' },
  ];

  return (
    <div className="page case-study container">
      <article>
        <header>
          <HeroText>
            <h1>HSI Requirements & Evaluation: Medical Coding Systems</h1>
          </HeroText>
          <HeroText delay={0.1}>
            <p className="case-meta">Human Systems Integration • Requirements Engineering • Healthcare UX</p>
          </HeroText>
        </header>

        {/* Executive Summary - TL;DR for busy hiring managers */}
        <FadeUp delay={0.2}>
          <section className="executive-summary">
            <h2>Executive Summary</h2>
            <div className="summary-grid summary-grid-5">
              <div className="summary-item">
                <h4>Context</h4>
                <p>Medical coding requires high accuracy in complex systems where errors impact billing, compliance, and patient care.</p>
              </div>
              <div className="summary-item">
                <h4>Research</h4>
                <p>Conducted Cognitive Task Analysis with SME to map workflow and identify cognitive load points.</p>
              </div>
              <div className="summary-item">
                <h4>My Role</h4>
                <p>As a Human Systems Engineering student, conducted CTA, requirements generation, and trade study evaluation.</p>
              </div>
              <div className="summary-item">
                <h4>Deliverables</h4>
                <p>10 HSI requirements specification, system evaluation matrix, and improvement recommendations.</p>
              </div>
              <div className="summary-item highlight">
                <h4>Impact</h4>
                <p>Identified 6 gaps in commercial system; recommended 3 high-priority enhancements for error reduction.</p>
              </div>
            </div>
          </section>
        </FadeUp>

        {/* HSI Pillars Section */}
        <FadeUp>
          <section className="hsi-pillars-section">
            <h2>Human Systems Integration Framework</h2>
            <p>
              Applied the DoD HSI framework to systematically evaluate how the medical coding system
              supports human performance. This approach ensures requirements address the full spectrum
              of human-system interaction, not just interface usability.
            </p>
            <div className="pillars-grid">
              {hsiPillars.map((pillar, index) => (
                <motion.div
                  key={pillar.name}
                  className="pillar-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="pillar-icon">{pillar.icon}</span>
                  <h4>{pillar.name}</h4>
                  <p>{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeUp>

        {/* Phase 1: CTA Research */}
        <FadeUp>
          <section>
            <h2>Phase 1: Cognitive Task Analysis</h2>
            <p>
              Before generating requirements, I conducted a Cognitive Task Analysis with a medical
              coding subject matter expert to understand the actual workflow, decision points, and
              cognitive demands of the role.
            </p>
            <StaggerContainer>
              <ul>
                <StaggerItem><li>Conducted semi-structured interview focused on decision-making processes</li></StaggerItem>
                <StaggerItem><li>Mapped task sequences and identified 12 distinct workflow steps</li></StaggerItem>
                <StaggerItem><li>Identified 4 high-cognitive-load points where errors most likely occur</li></StaggerItem>
                <StaggerItem><li>Documented workarounds and pain points with current systems</li></StaggerItem>
              </ul>
            </StaggerContainer>
          </section>
        </FadeUp>

        <FadeUp>
          <section className="artifact">
            <h2>Task Flow Diagram</h2>
            <motion.img
              src={flowchartDiagram}
              alt="3M CodeFinder HSI Evaluation Flow Chart"
              className="diagram-image"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </section>
        </FadeUp>

        {/* Phase 2: Requirements Generation */}
        <FadeUp>
          <section className="requirements-section">
            <h2>Phase 2: HSI Requirements Generation</h2>
            <p>
              Based on CTA findings and HSI pillar analysis, I generated 10 testable requirements
              that a medical coding system should meet to support human performance and reduce errors.
            </p>
            <div className="requirements-table">
              <div className="requirements-header">
                <span className="req-id">ID</span>
                <span className="req-name">Requirement</span>
                <span className="req-pillar">HSI Pillar</span>
              </div>
              {requirements.map((req, index) => (
                <motion.div
                  key={req.id}
                  className="requirement-row"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span className="req-id">{req.id}</span>
                  <div className="req-content">
                    <span className="req-name">{req.name}</span>
                    <span className="req-desc">{req.desc}</span>
                  </div>
                  <span className="req-pillar-tag">{req.pillar}</span>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeUp>

        {/* Phase 3: System Evaluation */}
        <FadeUp>
          <section className="evaluation-section">
            <h2>Phase 3: System Evaluation</h2>
            <p>
              Evaluated <strong>3M CodeFinder</strong>, a commercial medical coding software, against
              the generated requirements. This trade study approach identifies where the system
              excels and where gaps exist.
            </p>

            <div className="evaluation-summary">
              {evaluationResults.map((result) => (
                <div key={result.status} className={`eval-stat ${result.status}`}>
                  <span className="eval-count">{result.count}</span>
                  <span className="eval-label">{result.label}</span>
                </div>
              ))}
            </div>

            <div className="findings-grid">
              <div className="finding-card positive">
                <h4>Strengths</h4>
                <ul>
                  <li>Fast search response times (R1 met)</li>
                  <li>Robust system availability (R8 met)</li>
                  <li>Comprehensive code database coverage</li>
                  <li>Good filtering capabilities (R2 met)</li>
                </ul>
              </div>
              <div className="finding-card negative">
                <h4>Gaps Identified</h4>
                <ul>
                  <li>No integrated training environment (R6 unmet)</li>
                  <li>Limited conflict detection automation (R4 partial)</li>
                  <li>Provider query workflow requires external tools (R10 partial)</li>
                  <li>Visual ergonomics options limited (R7 partial)</li>
                </ul>
              </div>
            </div>

            <p className="evaluation-note">
              <em>Note: Evaluation was conducted without direct access to proprietary system data;
              findings are based on expert interview and workflow analysis.</em>
            </p>
          </section>
        </FadeUp>

        {/* Recommendations */}
        <FadeUp>
          <section>
            <h2>Recommendations</h2>
            <p>Based on the evaluation, I proposed three high-priority enhancements:</p>
            <StaggerContainer>
              <ol className="recommendations-list">
                <StaggerItem>
                  <li>
                    <strong>Implement sandbox training mode</strong> — Allow new coders to practice
                    without affecting production data, reducing onboarding time and early-career errors.
                  </li>
                </StaggerItem>
                <StaggerItem>
                  <li>
                    <strong>Enhance code conflict detection</strong> — Automated real-time flagging
                    of incompatible code combinations before submission, preventing billing errors.
                  </li>
                </StaggerItem>
                <StaggerItem>
                  <li>
                    <strong>Integrate provider communication</strong> — In-app query system to
                    reduce context-switching when clarifying documentation with clinical staff.
                  </li>
                </StaggerItem>
              </ol>
            </StaggerContainer>
          </section>
        </FadeUp>

        {/* Reflections */}
        <FadeUp>
          <section>
            <h2>Reflections</h2>
            <p>
              This project demonstrated how HSI methods can systematically identify gaps that
              traditional usability testing might miss. By grounding requirements in cognitive
              task analysis, I ensured they addressed real workflow pain points rather than
              assumed needs.
            </p>
            <p>
              The trade-off analysis approach—evaluating a commercial system against generated
              requirements—provides clear, actionable insights for procurement decisions or
              product improvement roadmaps.
            </p>
            <p>
              This project reflects my interest in applying HSI methods to safety-critical
              healthcare systems—where better human factors design directly impacts patient
              outcomes and provider wellbeing.
            </p>
          </section>
        </FadeUp>

        {/* Skills & Methods Tags */}
        <FadeUp>
          <section className="skills-methods-section">
            <h2>Skills & Methods Applied</h2>
            <div className="method-tags">
              <span className="method-tag primary">Cognitive Task Analysis</span>
              <span className="method-tag primary">Human Systems Integration</span>
              <span className="method-tag primary">Requirements Engineering</span>
              <span className="method-tag">Trade Study Analysis</span>
              <span className="method-tag">Semi-Structured Interviews</span>
              <span className="method-tag">Workflow Mapping</span>
              <span className="method-tag">Gap Analysis</span>
              <span className="method-tag">Healthcare Domain</span>
              <span className="method-tag">Safety-Critical Systems</span>
            </div>
          </section>
        </FadeUp>
      </article>
    </div>
  );
}

export default CaseStudy;
