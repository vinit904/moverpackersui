import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-about">
          <h3>FastMove Packers & Movers</h3>
          <p>
            We specialize in safe, reliable, and affordable moving services. 
            From household shifting to office relocation, we make moving stress-free.
          </p>
        </div>

        {/* Services Links */}
        <div className="footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#house-shifting">House Shifting</a></li>
            <li><a href="#office-relocation">Office Relocation</a></li>
            <li><a href="#vehicle-transport">Vehicle Transport</a></li>
            <li><a href="#storage">Storage Solutions</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📍 Indore, Madhya Pradesh, India</p>
          <p>📞 +91-9876543210</p>
          <p>✉️ support@fastmove.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; 2024 FastMove Packers & Movers. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;