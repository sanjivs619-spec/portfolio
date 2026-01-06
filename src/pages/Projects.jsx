import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeroText, FadeUp, StaggerContainer, StaggerItem, InteractiveCard } from '../components/animations';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Medical Coding Systems',
      subtitle: 'HSI Requirements & Evaluation',
      description: 'Conducted Cognitive Task Analysis and generated 10 HSI requirements for a medical coding system. Evaluated 3M CodeFinder against requirements, identifying 6 gaps and proposing high-priority enhancements.',
      tags: ['Cognitive Task Analysis', 'Requirements Engineering', 'Healthcare UX'],
      metrics: { requirements: 10, met: 4, partial: 4, unmet: 2 },
      link: '/case-study',
    },
    {
      id: 2,
      title: 'Salesforce CPQ',
      subtitle: 'Service Agreement Management System',
      description: 'Evaluated Salesforce CPQ for inside sales personnel managing medical device service agreements. Identified trade-offs between system flexibility and error prevention, recommending targeted automation improvements.',
      tags: ['Workflow Analysis', 'Trade-off Analysis', 'Enterprise UX', 'Medical Device'],
      metrics: { requirements: 5, met: 0, partial: 3, unmet: 2 },
      link: '/case-study/salesforce-cpq',
    },
  ];

  return (
    <div className="page projects container">
      <header>
        <HeroText>
          <h1>My Projects</h1>
        </HeroText>
        <HeroText delay={0.1}>
          <p className="projects-intro">
            Human Systems Integration projects applying HSI methods to evaluate and improve
            complex systems in healthcare and enterprise environments.
          </p>
        </HeroText>
      </header>

      <StaggerContainer className="case-studies-grid">
        {projects.map((study, index) => (
          <StaggerItem key={study.id}>
            <InteractiveCard>
              <Link to={study.link} className="case-study-card">
                <div className="case-study-content">
                  <span className="case-study-number">0{index + 1}</span>
                  <h2>{study.title}</h2>
                  <h3>{study.subtitle}</h3>
                  <p>{study.description}</p>

                  <div className="case-study-metrics">
                    <div className="metric">
                      <span className="metric-value">{study.metrics.requirements}</span>
                      <span className="metric-label">Requirements</span>
                    </div>
                    <div className="metric met">
                      <span className="metric-value">{study.metrics.met}</span>
                      <span className="metric-label">Met</span>
                    </div>
                    <div className="metric partial">
                      <span className="metric-value">{study.metrics.partial}</span>
                      <span className="metric-label">Partial</span>
                    </div>
                    <div className="metric unmet">
                      <span className="metric-value">{study.metrics.unmet}</span>
                      <span className="metric-label">Unmet</span>
                    </div>
                  </div>

                  <div className="case-study-tags">
                    {study.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>

                  <span className="view-case-study">View Case Study →</span>
                </div>
              </Link>
            </InteractiveCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeUp>
        <section className="projects-cta">
          <h2>Interested in my approach?</h2>
          <p>
            Each project demonstrates how Human Systems Integration methods can systematically
            identify gaps that traditional usability testing might miss.
          </p>
          <Link to="/contact" className="btn primary">Get in Touch</Link>
        </section>
      </FadeUp>
    </div>
  );
}

export default Projects;
