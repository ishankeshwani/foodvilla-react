import React from 'react';
import ItemList from './ItemList';

const RestCategory = ({ data, showItems, setShowIndex }) => (
  <div style={{ marginBottom: "0.75rem" }}>
    <div
      className="category-header"
      style={{ padding: "1rem 1.25rem", cursor: "pointer" }}
      onClick={setShowIndex}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.05rem", fontWeight: 700, color: "#f5f5f0",
          }}>
            {data.title}
          </span>
          <span style={{
            fontFamily: "'DM Mono', monospace", fontSize: "0.7rem",
            color: "#666", background: "#1c1c1c",
            border: "1px solid #2a2a2a", padding: "2px 8px", borderRadius: "20px",
          }}>
            {data.itemCards.length}
          </span>
        </div>
        <span style={{
          color: showItems ? "#f97316" : "#555",
          transition: "transform 0.2s",
          transform: showItems ? "rotate(180deg)" : "rotate(0deg)",
          display: "inline-block", fontSize: "0.8rem",
        }}>
          ▼
        </span>
      </div>
    </div>
    {showItems && (
      <div style={{
        background: "#0f0f0f", border: "1px solid #1f1f1f",
        borderTop: "none", borderRadius: "0 0 12px 12px",
        overflow: "hidden",
      }}>
        <ItemList items={data.itemCards} />
      </div>
    )}
  </div>
);

export default RestCategory;
