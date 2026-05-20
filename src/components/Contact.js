import React, { useState } from 'react';

const Contact = () => {
  const [sent, setSent] = useState(false);

  return (
    <div className="page-enter" style={{ background: "#0d0d0d", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem" }}>
      <div style={{ width: "100%", maxWidth: "480px" }}>
        <p style={{ color: "#f97316", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", marginBottom: "0.75rem" }}>
          Get in touch
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 900, color: "#f5f5f0", marginBottom: "0.5rem" }}>
          Contact
        </h1>
        <div style={{ width: "40px", height: "2px", background: "#f97316", borderRadius: "1px", marginBottom: "2rem" }} />

        {/* Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
          {[
            ["📧", "Email", "keshwaniishan789@gmail.com"],
            ["📍", "Location", "Gujarat, India"],
            ["💼", "LinkedIn", "linkedin.com/in/ishankeshwani"],
          ].map(([icon, label, value]) => (
            <div key={label} style={{
              display: "flex", alignItems: "center", gap: "12px",
              background: "#151515", border: "1px solid #1f1f1f",
              borderRadius: "12px", padding: "1rem 1.25rem",
            }}>
              <span style={{ fontSize: "1.1rem" }}>{icon}</span>
              <div>
                <div style={{ color: "#555", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'DM Mono', monospace", marginBottom: "2px" }}>{label}</div>
                <div style={{ color: "#f5f5f0", fontSize: "0.9rem" }}>{value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Message */}
        {!sent ? (
          <div style={{ background: "#151515", border: "1px solid #1f1f1f", borderRadius: "16px", padding: "1.5rem" }}>
            <p style={{ color: "#555", fontSize: "0.8rem", marginBottom: "1rem", fontFamily: "'DM Mono', monospace" }}>Quick message</p>
            <textarea
              placeholder="Write a message..."
              rows={4}
              style={{
                width: "100%", background: "#0d0d0d", border: "1px solid #2a2a2a",
                borderRadius: "10px", padding: "0.75rem 1rem",
                color: "#f5f5f0", fontSize: "0.9rem", resize: "none",
                fontFamily: "'DM Sans', sans-serif", outline: "none",
                marginBottom: "1rem",
              }}
            />
            <button
              onClick={() => setSent(true)}
              style={{
                width: "100%", background: "#f97316", color: "#fff",
                border: "none", padding: "0.875rem", borderRadius: "10px",
                fontWeight: 600, cursor: "pointer", fontSize: "0.95rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Send Message →
            </button>
          </div>
        ) : (
          <div style={{
            background: "#151515", border: "1px solid #22c55e33",
            borderRadius: "16px", padding: "2rem", textAlign: "center",
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>✅</div>
            <p style={{ color: "#22c55e", fontWeight: 600 }}>Message sent!</p>
            <p style={{ color: "#555", fontSize: "0.85rem", marginTop: "4px" }}>Thanks for reaching out.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
