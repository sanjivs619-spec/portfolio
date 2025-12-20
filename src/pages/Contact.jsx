function Contact() {
  return (
    <div className="page contact">
      <h1>Contact</h1>

      <p>
        I'm currently seeking a Summer 2026 internship in UX Research,
        Human Factors, or related fields. I'd love to connect!
      </p>

      <section className="contact-info">
        <div className="contact-item">
          <h3>Email</h3>
          <p><a href="mailto:your.email@asu.edu">your.email@asu.edu</a></p>
        </div>

        <div className="contact-item">
          <h3>LinkedIn</h3>
          <p><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
        </div>

        {/* Add more contact methods as needed */}
      </section>

      <section className="contact-note">
        <p>
          <em>Based in Arizona • Open to remote and on-site opportunities</em>
        </p>
      </section>
    </div>
  );
}

export default Contact;
