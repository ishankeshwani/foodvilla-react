const Shimmer = () => (
  <div style={{ padding: "3.5rem 3rem 2rem", background: "#0d0d0d", minHeight: "100vh" }}>
    <div style={{ marginBottom: "2rem" }}>
      <div style={{ width: "120px", height: "12px", borderRadius: "6px", background: "#1c1c1c", marginBottom: "12px" }} />
      <div style={{ width: "280px", height: "40px", borderRadius: "8px", background: "#1c1c1c", marginBottom: "8px" }} />
      <div style={{ width: "200px", height: "40px", borderRadius: "8px", background: "#1c1c1c", marginBottom: "20px" }} />
      <div className="flex gap-3">
        <div style={{ width: "360px", height: "48px", borderRadius: "12px", background: "#151515" }} />
        <div style={{ width: "100px", height: "48px", borderRadius: "12px", background: "#151515" }} />
        <div style={{ width: "120px", height: "48px", borderRadius: "12px", background: "#151515" }} />
      </div>
    </div>
    <div className="shimmer-container" style={{ padding: 0 }}>
      {Array(12).fill(0).map((_, i) => (
        <div key={i} className="shimmer-card" style={{ height: "280px" }} />
      ))}
    </div>
  </div>
);

export default Shimmer;
