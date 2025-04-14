import React from "react";
import { FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <footer style={{ backgroundColor: "#0b1120", color: "#fff", padding: "60px 20px 20px" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "40px",
        }}
      >
        {/* Newsletter Section */}
        <div style={{ flex: "1 1 300px", minWidth: "260px" }}>
          <h3 style={{ fontSize: "1.4rem", marginBottom: "20px", fontWeight: "600" }}>Stay Updated</h3>
          <p style={{ color: "#b0b3c5", marginBottom: "20px" }}>
            Subscribe to our newsletter to get the latest updates and offers.
          </p>
          <div style={{ display: "flex" }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: "12px 16px",
                flex: 1,
                border: "none",
                borderRadius: "6px 0 0 6px",
                fontSize: "16px",
              }}
            />
            <button
              style={{
                backgroundColor: "#ff2b7b",
                color: "#fff",
                border: "none",
                padding: "0 20px",
                borderRadius: "0 6px 6px 0",
                fontSize: "20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>

        {/* Contact Info Section */}
        <div style={{ flex: "1 1 300px", minWidth: "260px" }}>
          <h3 style={{ fontSize: "1.4rem", marginBottom: "20px", fontWeight: "600" }}>Contact Info</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2", color: "#b0b3c5" }}>
            <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FaMapMarkerAlt /> Your address goes here, your demo address.
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FaPhoneAlt /> +8880 44338899
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FaEnvelope /> info@colorlib.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid #1c243b",
          marginTop: "40px",
          paddingTop: "20px",
          textAlign: "center",
          color: "#8b8ea0",
          fontSize: "0.9rem",
        }}
      >
        © {new Date().getFullYear()} NovaNectar. All rights reserved.
      </div>
    </footer>
  );
};

export default Contact;
