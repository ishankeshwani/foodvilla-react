import React from 'react';

const About = () => (
  <div className="page-enter" style={{ background: "#0d0d0d", minHeight: "100vh", padding: "4rem 3rem" }}>
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
      <p style={{ color: "#f97316", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", marginBottom: "1rem" }}>
        About this project
      </p>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#f5f5f0", lineHeight: 1.1, marginBottom: "1.5rem" }}>
        Built with<br /><span style={{ color: "#f97316" }}>passion</span>
      </h1>
      <div style={{ width: "48px", height: "2px", background: "#f97316", borderRadius: "1px", marginBottom: "2.5rem" }} />

      <p style={{ color: "#999", lineHeight: 1.8, fontSize: "1rem", marginBottom: "2rem" }}>
        Hi, I'm <span style={{ color: "#f5f5f0", fontWeight: 600 }}>Ishan Keshawani</span> — a Java Full Stack Developer passionate about building scalable and interactive web applications.
      </p>
      <p style={{ color: "#666", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "2.5rem" }}>
        This project is a Swiggy-inspired restaurant application built using React.js, Redux Toolkit, Tailwind CSS, and live API integration.
      </p>

      {/* Feature Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem", marginBottom: "2.5rem" }}>
        {[
          ["🔍", "Dynamic restaurant listing with search & filter"],
          ["⚡", "Real-time API fetching from Swiggy"],
          ["🛒", "Cart management using Redux Toolkit"],
          ["🗺️", "Routing with React Router v6"],
          ["✨", "Shimmer UI loading states"],
          ["📱", "Fully responsive design"],
        ].map(([icon, text], i) => (
          <div key={i} style={{
            background: "#151515", border: "1px solid #1f1f1f",
            borderRadius: "12px", padding: "1rem 1.25rem",
            display: "flex", alignItems: "flex-start", gap: "10px",
          }}>
            <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{icon}</span>
            <span style={{ color: "#888", fontSize: "0.85rem", lineHeight: 1.5 }}>{text}</span>
          </div>
        ))}
      </div>

      {/* Stack */}
      <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: "2rem" }}>
        <p style={{ color: "#444", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", marginBottom: "1rem" }}>
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {["React.js", "Redux Toolkit", "Tailwind CSS", "React Router", "Parcel", "Live APIs"].map((t) => (
            <span key={t} style={{
              fontFamily: "'DM Mono', monospace", fontSize: "0.75rem",
              padding: "5px 12px", borderRadius: "6px",
              background: "#151515", color: "#f97316",
              border: "1px solid #2a2a2a",
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default About;
