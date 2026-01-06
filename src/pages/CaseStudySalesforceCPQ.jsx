import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeUp, HeroText, StaggerContainer, StaggerItem } from '../components/animations';

function CaseStudySalesforceCPQ() {
  // HSI Pillars used in this evaluation
  const hsiPillars = [
    { name: 'Human Factors', icon: '🧠', desc: 'Cognitive load, pricing automation, verification needs' },
    { name: 'System Safety', icon: '🛡️', desc: 'Asset selection errors, renewal visibility' },
    { name: 'Manpower', icon: '📊', desc: 'Purchase order tracking, workload management' },
  ];

  // Requirements from PDF
  const requirements = [
    {
      id: 'R1',
      name: 'Pricing Automation',
      pillar: 'Human Factors',
      desc: 'Automatically generate pricing and discounts based on selected assets and contract terms',
      status: 'fail',
    },
    {
      id: 'R2',
      name: 'Asset Selection Error Prevention',
      pillar: 'System Safety',
      desc: 'Prevent duplicate asset selection during service agreement creation',
      status: 'fail',
    },
    {
      id: 'R3',
      name: 'Renewal Opportunity Visibility',
      pillar: 'System Safety',
      desc: 'Identify missing or uncreated renewal opportunities',
      status: 'partial',
    },
    {
      id: 'R4',
      name: 'Purchase Order Tracking',
      pillar: 'Manpower',
      desc: 'Provide structured method for tracking purchase order receipt',
      status: 'partial',
    },
    {
      id: 'R5',
      name: 'Cognitive Load Reduction',
      pillar: 'Human Factors',
      desc: 'Reduce the need for repeated manual verification during contract creation',
      status: 'partial',
    },
  ];

  // Evaluation results
  const evaluationResults = [
    { status: 'met', count: 0, label: 'Fully Met' },
    { status: 'partial', count: 3, label: 'Partially Met' },
    { status: 'unmet', count: 2, label: 'Not Met' },
  ];

  // Problem areas from workflow analysis
  const problemAreas = [
    'Pricing and discounts must be entered manually, increasing the risk of pricing errors',
    'Asset lists do not update after selection, increasing the risk of duplicate asset entry',
    'Renewal opportunities may be missing if previous representatives did not create opportunities',
    'Purchase orders must be tracked manually using notes',
    'Frequent double-checking of work increases cognitive load and time on task',
  ];

  return (
    <div className="page case-study container">
      <article>
        {/* Back to Work link */}
        <FadeUp>
          <Link to="/work" className="back-link">← Back to All Work</Link>
        </FadeUp>

        <header>
          <HeroText>
            <h1>HSI Requirements & Evaluation: Salesforce CPQ</h1>
          </HeroText>
          <HeroText delay={0.1}>
            <p className="case-meta">Human Systems Integration • Service Agreement Management • Enterprise UX</p>
          </HeroText>
        </header>

        {/* Executive Summary */}
        <FadeUp delay={0.2}>
          <section className="executive-summary">
            <h2>Executive Summary</h2>
            <div className="summary-grid summary-grid-5">
              <div className="summary-item">
                <h4>Context</h4>
                <p>Inside sales personnel managing medical device service agreements across 12 states with quarterly quotas.</p>
              </div>
              <div className="summary-item">
                <h4>Research</h4>
                <p>Conducted workflow analysis and user interviews to identify cognitive load points and error-prone tasks.</p>
              </div>
              <div className="summary-item">
                <h4>My Role</h4>
                <p>As a Human Systems Engineering student, conducted workflow analysis, requirements generation, and trade-off evaluation.</p>
              </div>
              <div className="summary-item">
                <h4>Deliverables</h4>
                <p>5 HSI requirements specification, system evaluation matrix, and trade-off analysis.</p>
              </div>
              <div className="summary-item highlight">
                <h4>Key Finding</h4>
                <p>System prioritizes flexibility over error prevention, shifting burden to users and increasing cognitive load.</p>
              </div>
            </div>
          </section>
        </FadeUp>

        {/* HSI Pillars Section */}
        <FadeUp>
          <section className="hsi-pillars-section">
            <h2>HSI Pillars Applied</h2>
            <p>
              This evaluation focused on three key HSI pillars most relevant to the service agreement
              management workflow. The analysis identified how system design choices impact human
              performance and error risk.
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

        {/* User & Product Context */}
        <FadeUp>
          <section>
            <h2>Context: User & System</h2>
            <div className="context-grid">
              <div className="context-card">
                <h4>Primary User</h4>
                <p>
                  Inside sales service solution associate manager responsible for managing service
                  agreements for Impella medical device consoles across 12 states. Works against
                  quarterly quotas and is responsible for identifying expiring contracts, contacting
                  customers, creating service agreements, and tracking follow-ups.
                </p>
              </div>
              <div className="context-card">
                <h4>System Under Evaluation</h4>
                <p>
                  <strong>Salesforce CPQ</strong> — A configure–price–quote system used to manage sales
                  opportunities, generate service agreements, track customer interactions, and support
                  contract execution workflows. Requires manual configuration of assets, pricing,
                  discounts, and payment schedules.
                </p>
              </div>
            </div>
          </section>
        </FadeUp>

        {/* Interface Comparison */}
        <FadeUp>
          <section className="interface-comparison">
            <h2>Interface Analysis: Classic vs Lightning</h2>
            <p>
              Salesforce CPQ provides multiple interface views. The user primarily operates within the
              Classic view, which she reports is easier to navigate and less overwhelming than the
              Lightning interface.
            </p>
            <div className="comparison-grid">
              <div className="comparison-card positive">
                <h4>Classic Interface (Preferred)</h4>
                <ul>
                  <li>Linear, structured layout</li>
                  <li>Efficient navigation between views</li>
                  <li>Lower cognitive load</li>
                  <li>Supports task tracking workflow</li>
                </ul>
              </div>
              <div className="comparison-card negative">
                <h4>Lightning Interface (Avoided)</h4>
                <ul>
                  <li>Visually dense layout</li>
                  <li>Multiple panels displayed simultaneously</li>
                  <li>Higher cognitive load</li>
                  <li>Described as "overwhelming"</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeUp>

        {/* Problem Areas */}
        <FadeUp>
          <section>
            <h2>Identified Problem Areas</h2>
            <p>
              Based on workflow analysis and user interview feedback, the following problem areas
              were identified that informed requirements generation:
            </p>
            <StaggerContainer>
              <ul className="problem-list">
                {problemAreas.map((problem, index) => (
                  <StaggerItem key={index}>
                    <li>{problem}</li>
                  </StaggerItem>
                ))}
              </ul>
            </StaggerContainer>
          </section>
        </FadeUp>

        {/* Requirements Generation */}
        <FadeUp>
          <section className="requirements-section">
            <h2>HSI Requirements & Evaluation</h2>
            <p>
              Generated 5 testable requirements based on workflow analysis and HSI pillar analysis,
              then evaluated Salesforce CPQ against each requirement.
            </p>
            <div className="requirements-table">
              <div className="requirements-header">
                <span className="req-id">ID</span>
                <span className="req-name">Requirement</span>
                <span className="req-pillar">HSI Pillar</span>
                <span className="req-status">Status</span>
              </div>
              {requirements.map((req, index) => (
                <motion.div
                  key={req.id}
                  className="requirement-row"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span className="req-id">{req.id}</span>
                  <div className="req-content">
                    <span className="req-name">{req.name}</span>
                    <span className="req-desc">{req.desc}</span>
                  </div>
                  <span className="req-pillar-tag">{req.pillar}</span>
                  <span className={`req-status-tag ${req.status}`}>
                    {req.status === 'fail' ? 'Fail' : req.status === 'partial' ? 'Partial' : 'Met'}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeUp>

        {/* Evaluation Summary */}
        <FadeUp>
          <section className="evaluation-section">
            <h2>Evaluation Results</h2>
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
                <h4>What Works</h4>
                <ul>
                  <li>Classic interface supports efficient navigation</li>
                  <li>Flexible system accommodates diverse agreements</li>
                  <li>Task tracking and follow-up management available</li>
                  <li>Integration with email for customer communication</li>
                </ul>
              </div>
              <div className="finding-card negative">
                <h4>Gaps Identified</h4>
                <ul>
                  <li>No automated pricing based on assets (R1 fail)</li>
                  <li>Assets remain selectable after being added (R2 fail)</li>
                  <li>Renewal opportunities not auto-generated (R3 partial)</li>
                  <li>Manual notes required for PO tracking (R4 partial)</li>
                  <li>Frequent double-checking required (R5 partial)</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeUp>

        {/* Trade-offs Analysis */}
        <FadeUp>
          <section className="tradeoffs-section">
            <h2>Trade-Offs Analysis</h2>
            <p>
              Salesforce CPQ demonstrates a fundamental trade-off between <strong>system flexibility</strong> and
              <strong> built-in error prevention</strong>. Understanding these trade-offs is critical for making
              informed improvement recommendations.
            </p>

            <div className="tradeoff-cards">
              <div className="tradeoff-card">
                <h4>Flexibility vs. Error Prevention</h4>
                <p>
                  The system allows manual configuration of assets, pricing, and discounts, which provides
                  flexibility for non-standard agreements. However, this places greater burden on the user
                  to ensure accuracy, increasing cognitive load and error potential.
                </p>
              </div>
              <div className="tradeoff-card">
                <h4>Automation vs. Customization</h4>
                <p>
                  Automating pricing and asset selection would reduce error risk, but may limit the user's
                  ability to make custom adjustments and could require additional system configuration.
                </p>
              </div>
              <div className="tradeoff-card">
                <h4>Interface Richness vs. Clarity</h4>
                <p>
                  The Lightning interface offers enhanced analytics and modern design, but its dense layout
                  increases cognitive load. The Classic interface is less visually advanced but better
                  supports efficient task completion.
                </p>
              </div>
            </div>
          </section>
        </FadeUp>

        {/* Recommendations */}
        <FadeUp>
          <section>
            <h2>Recommendations</h2>
            <p>Based on the evaluation and trade-off analysis, I proposed targeted improvements:</p>
            <StaggerContainer>
              <ol className="recommendations-list">
                <StaggerItem>
                  <li>
                    <strong>Implement pricing automation with override capability</strong> — Auto-generate
                    pricing based on assets while allowing manual adjustments for non-standard agreements.
                    This balances efficiency with flexibility.
                  </li>
                </StaggerItem>
                <StaggerItem>
                  <li>
                    <strong>Add asset selection safeguards</strong> — Visually disable or remove assets
                    after selection to prevent duplicates. Include clear feedback when assets are added.
                  </li>
                </StaggerItem>
                <StaggerItem>
                  <li>
                    <strong>Implement structured purchase order tracking</strong> — Add dedicated PO status
                    fields with optional automated reminders, reducing reliance on manual notes.
                  </li>
                </StaggerItem>
                <StaggerItem>
                  <li>
                    <strong>Add inline validation</strong> — Provide real-time error warnings during
                    contract creation to reduce the need for repeated manual verification.
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
              This project highlighted how enterprise systems often prioritize configurability and broad
              functionality over user-centered safeguards. While this approach supports diverse business
              needs, it shifts responsibility for error prevention onto the user.
            </p>
            <p>
              The trade-off analysis approach proved valuable for framing recommendations. Rather than
              simply identifying gaps, understanding <em>why</em> design choices were made enables more
              nuanced recommendations that balance competing requirements.
            </p>
            <p>
              The comparison between Classic and Lightning interfaces demonstrated how information
              density directly impacts cognitive load and user preference—a key consideration for any
              system redesign.
            </p>
          </section>
        </FadeUp>

        {/* Skills & Methods Tags */}
        <FadeUp>
          <section className="skills-methods-section">
            <h2>Skills & Methods Applied</h2>
            <div className="method-tags">
              <span className="method-tag primary">Human Systems Integration</span>
              <span className="method-tag primary">Workflow Analysis</span>
              <span className="method-tag primary">Trade-off Analysis</span>
              <span className="method-tag">Requirements Engineering</span>
              <span className="method-tag">User Interviews</span>
              <span className="method-tag">Gap Analysis</span>
              <span className="method-tag">Enterprise UX</span>
              <span className="method-tag">Medical Device Industry</span>
              <span className="method-tag">Salesforce CPQ</span>
            </div>
          </section>
        </FadeUp>

        {/* Navigation to other case studies */}
        <FadeUp>
          <section className="case-study-nav">
            <Link to="/case-study" className="nav-link prev">
              <span className="nav-label">Previous Case Study</span>
              <span className="nav-title">Medical Coding Systems</span>
            </Link>
            <Link to="/work" className="nav-link all">
              <span className="nav-label">View All</span>
              <span className="nav-title">My Work</span>
            </Link>
          </section>
        </FadeUp>
      </article>
    </div>
  );
}

export default CaseStudySalesforceCPQ;
