import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>About Us</h3>
          <p>aaaaa aaaaaaa aaaaaa</p>
        </div>
        <div className="footer-right">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: contact@example.com</li>
            <li>Phone: 123-456-7890</li>
            <li>Address: 123 Main St, City, Country</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
