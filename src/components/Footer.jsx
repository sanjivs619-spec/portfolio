function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="mailto:Sanjivsuresh619@gmail.com">Email</a>
          <span className="divider">•</span>
          <a
            href="https://www.linkedin.com/in/sanjiv-suresh-58221b39b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span className="divider">•</span>
          <a href="tel:+14803896098">(480) 389-6098</a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Sanjiv Suresh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
