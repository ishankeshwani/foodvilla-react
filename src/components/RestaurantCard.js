const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320/";

const RestaurentCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines = [],
    avgRating = "—",
    costForTwo = 0,
    sla = {},
  } = resData;

  const rating = Number(avgRating);
  const ratingColor = rating >= 4.5 ? "#22c55e" : rating >= 4 ? "#f97316" : "#888";

  return (
    <div
      className="rest-card"
      style={{
        background: "#151515",
        border: "1px solid #1f1f1f",
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; }}
      onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
    >
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", height: "180px" }}>
        <img
         src={cloudinaryImageId
  ? CDN_URL + cloudinaryImageId
  : resData.imageUrl || "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=508&h=320&fit=crop"}
          alt={name}
          onError={(e) => { e.target.src = "https://placehold.co/508x320/151515/444?text=Restaurant"; }}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
          onMouseOver={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
        />
        {/* Delivery time badge */}
        {sla?.deliveryTime && (
          <div style={{
            position: "absolute", bottom: "10px", right: "10px",
            background: "rgba(13,13,13,0.88)", backdropFilter: "blur(8px)",
            border: "1px solid #2a2a2a", borderRadius: "8px",
            padding: "3px 10px", fontSize: "0.72rem", color: "#ccc",
            fontFamily: "'DM Mono', monospace",
          }}>
            {sla.deliveryTime} min
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: "1rem" }}>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1rem", fontWeight: 700,
          color: "#f5f5f0", marginBottom: "4px",
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>
          {name}
        </h3>
        <p style={{
          fontSize: "0.75rem", color: "#666",
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          marginBottom: "12px",
        }}>
          {cuisines.slice(0, 3).join(" · ")}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span style={{
              background: ratingColor, color: "#fff",
              fontSize: "0.72rem", fontWeight: 600,
              padding: "2px 8px", borderRadius: "6px",
              fontFamily: "'DM Mono', monospace",
            }}>
              ★ {avgRating}
            </span>
          </div>
          {costForTwo > 0 && (
            <span style={{ fontSize: "0.78rem", color: "#888", fontFamily: "'DM Mono', monospace" }}>
              ₹{costForTwo / 100} for two
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurentCard) => {
  return (props) => (
    <div style={{ position: "relative" }}>
      <div style={{
        position: "absolute", top: "12px", left: "12px", zIndex: 10,
        background: "#f97316", color: "#fff",
        fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em",
        textTransform: "uppercase", padding: "4px 10px", borderRadius: "6px",
        fontFamily: "'DM Mono', monospace",
      }}>
        Promoted
      </div>
      <RestaurentCard {...props} />
    </div>
  );
};

export default RestaurentCard;
