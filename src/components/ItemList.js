import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const CDN = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208/";

const ItemList = ({ items = [] }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "0.5rem 0" }}>
      {items.map((item, index) => {
        const info = item?.card?.info;
        const price = (info?.price || info?.defaultPrice) / 100;
        return (
          <div
            key={info?.id + "-" + index}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "1rem 1.25rem",
              borderBottom: index < items.length - 1 ? "1px solid #1a1a1a" : "none",
              gap: "1rem",
              transition: "background 0.15s",
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = "#131313"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "transparent"; }}
          >
            {/* Item Info */}
            <div style={{ flex: 1 }}>
              <div className="flex items-center gap-2" style={{ marginBottom: "4px" }}>
                {info?.isVeg !== undefined && (
                  <span style={{
                    width: "14px", height: "14px",
                    border: `2px solid ${info.isVeg ? "#22c55e" : "#ef4444"}`,
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    borderRadius: "2px", flexShrink: 0,
                  }}>
                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: info.isVeg ? "#22c55e" : "#ef4444" }} />
                  </span>
                )}
                <span style={{ fontWeight: 600, color: "#f5f5f0", fontSize: "0.92rem" }}>
                  {info?.name}
                </span>
              </div>
              {info?.description && (
                <p style={{ color: "#555", fontSize: "0.75rem", lineHeight: 1.5, marginBottom: "6px", maxWidth: "380px" }}>
                  {info.description.slice(0, 100)}{info.description.length > 100 ? "…" : ""}
                </p>
              )}
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85rem", color: "#f5f5f0", fontWeight: 500 }}>
                ₹{price}
              </span>
            </div>

            {/* Image + Add */}
            <div style={{ position: "relative", flexShrink: 0 }}>
              {info?.imageId ? (
                <img
                  src={CDN + info.imageId}
                  alt={info?.name}
                  onError={(e) => { e.target.style.display = "none"; }}
                  style={{ width: "88px", height: "88px", objectFit: "cover", borderRadius: "10px", border: "1px solid #1f1f1f" }}
                />
              ) : (
                <div style={{ width: "88px", height: "88px", background: "#1c1c1c", borderRadius: "10px", border: "1px solid #2a2a2a" }} />
              )}
              <button
                className="add-btn"
                onClick={() => dispatch(addItem(item))}
                style={{
                  position: "absolute", bottom: "-10px", left: "50%",
                  transform: "translateX(-50%)",
                  whiteSpace: "nowrap", background: "#0d0d0d",
                }}
              >
                ADD +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
