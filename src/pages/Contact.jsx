import { FadeUp, HeroText, InteractiveCard, StaggerContainer, StaggerItem } from '../components/animations';

function Contact() {
  return (
    <div className="page contact container">
      <HeroText>
        <h1>Get in Touch</h1>
      </HeroText>

      <FadeUp delay={0.1}>
        <p>
          I'm currently seeking a Summer 2026 internship in UX Research,
          Human Factors, or related fields. I'd love to connect!
        </p>
        <p className="response-time">
          I typically respond within 24–48 hours.
        </p>
      </FadeUp>

      <StaggerContainer className="contact-info">
        <StaggerItem>
          <InteractiveCard>
            <div className="contact-item primary">
              <h3>Email</h3>
              <p><a href="mailto:Sanjivsuresh619@gmail.com">Sanjivsuresh619@gmail.com</a></p>
            </div>
          </InteractiveCard>
        </StaggerItem>

        <StaggerItem>
          <InteractiveCard>
            <div className="contact-item">
              <h3>LinkedIn</h3>
              <p><a href="https://www.linkedin.com/in/sanjiv-suresh-58221b39b/" target="_blank" rel="noopener noreferrer">linkedin.com/in/sanjiv-suresh</a></p>
            </div>
          </InteractiveCard>
        </StaggerItem>

        <StaggerItem>
          <InteractiveCard>
            <div className="contact-item">
              <h3>Phone</h3>
              <p><a href="tel:+14803896098">(480) 389-6098</a></p>
            </div>
          </InteractiveCard>
        </StaggerItem>

        <StaggerItem>
          <InteractiveCard>
            <div className="contact-item">
              <h3>Location</h3>
              <p>Mesa, AZ</p>
            </div>
          </InteractiveCard>
        </StaggerItem>
      </StaggerContainer>

      <FadeUp>
        <section className="contact-note">
          <p>
            <em>Based in Arizona • Open to remote and on-site opportunities</em>
          </p>
        </section>
      </FadeUp>
    </div>
  );
}

export default Contact;
