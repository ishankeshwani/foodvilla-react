import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  return (
    <div style={{ background: "#0d0d0d", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem" }}>
      <div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "6rem", fontWeight: 700, color: "#1a1a1a", lineHeight: 1, marginBottom: "1rem" }}>
          {err?.status || "404"}
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#f5f5f0", marginBottom: "0.75rem" }}>
          Oops, something went wrong
        </h1>
        <p style={{ color: "#555", marginBottom: "2rem", fontFamily: "'DM Mono', monospace", fontSize: "0.8rem" }}>
          {err?.data || "Page not found"}
        </p>
        <Link to="/" style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "#f97316", color: "#fff", padding: "0.875rem 2rem",
          borderRadius: "10px", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem",
        }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
