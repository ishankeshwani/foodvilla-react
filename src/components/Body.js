import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurentCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { mockRestaurants } from "../utils/mockRestaurants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [FilteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [usingMock, setUsingMock] = useState(false);

  const RestaurantCardPromoted = withPromotedLabel(RestaurentCard);

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/v3?lat=22.2909854&lng=70.8235753&str=Pizza&trackingId=e460c35c-f8dd-d286-7c84-01a2dc2b479b&submitAction=ENTER&queryUniqueId=7b10952a-e375-349b-d9a6-1aee47d2afc0"
      );
      const json = await data.json();
      const results = json?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards?.slice(1);

      // If API returns nothing or blocks — fall back to mock
      if (!results || results.length === 0) {
        setUsingMock(true);
        setListOfRestaurants(mockRestaurants);
        setFilteredRestaurants(mockRestaurants);
      } else {
        setListOfRestaurants(results);
        setFilteredRestaurants(results);
      }
    } catch (err) {
      // API failed (403, CORS, network) — use mock data
      setUsingMock(true);
      setListOfRestaurants(mockRestaurants);
      setFilteredRestaurants(mockRestaurants);
    }
  };

  if (listOfRestaurants.length === 0) return <Shimmer />;

  return (
    <div className="page-enter" style={{ minHeight: "100vh", background: "#0d0d0d" }}>

      {/* Hero */}
      <div style={{ padding: "3.5rem 3rem 2rem", borderBottom: "1px solid #1a1a1a" }}>
        <p style={{ color: "#f97316", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", marginBottom: "0.75rem" }}>
          🍕 Discover great food
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900, color: "#f5f5f0", lineHeight: 1.1, marginBottom: "1.5rem" }}>
          What are you<br />
          <span style={{ color: "#f97316" }}>craving</span> today?
        </h1>

        {/* Mock data notice */}
        {usingMock && (
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "#1c1c1c", border: "1px solid #2a2a2a",
            borderRadius: "8px", padding: "6px 14px", marginBottom: "1.25rem",
          }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#f97316", flexShrink: 0 }} />
            <span style={{ fontSize: "0.75rem", color: "#888", fontFamily: "'DM Mono', monospace" }}>
              Live API unavailable — showing demo restaurants
            </span>
          </div>
        )}

        {/* Search + Filter */}
        <div className="flex flex-wrap items-center gap-3">
          <div style={{ display: "flex", alignItems: "center", background: "#151515", border: "1px solid #2a2a2a", borderRadius: "12px", overflow: "hidden", width: "360px" }}>
            <span className="px-4" style={{ color: "#555" }}>🔍</span>
            <input
              type="text"
              placeholder="Search restaurants..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setFilteredRestaurants(
                    listOfRestaurants.filter((res) =>
                      res?.card?.card?.restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                    )
                  );
                }
              }}
              style={{ background: "transparent", border: "none", outline: "none", padding: "0.75rem 0.5rem", color: "#f5f5f0", fontSize: "0.9rem", width: "100%", fontFamily: "'DM Sans', sans-serif" }}
            />
          </div>
          <button
            onClick={() =>
              setFilteredRestaurants(
                listOfRestaurants.filter((res) =>
                  res?.card?.card?.restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                )
              )
            }
            style={{ background: "#f97316", color: "#fff", border: "none", padding: "0.75rem 1.5rem", borderRadius: "12px", fontWeight: 600, cursor: "pointer", fontSize: "0.9rem" }}
          >
            Search
          </button>
          <button
            onClick={() =>
              setFilteredRestaurants(
                listOfRestaurants.filter(
                  (res) => Number(res?.card?.card?.restaurant?.info?.avgRating) > 4
                )
              )
            }
            style={{ background: "transparent", color: "#f5f5f0", border: "1px solid #2a2a2a", padding: "0.75rem 1.25rem", borderRadius: "12px", fontWeight: 500, cursor: "pointer", fontSize: "0.85rem" }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = "#f97316"; e.currentTarget.style.color = "#f97316"; }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#f5f5f0"; }}
          >
            ⭐ Top Rated
          </button>
          <button
            onClick={() => { setSearchText(""); setFilteredRestaurants(listOfRestaurants); }}
            style={{ background: "transparent", color: "#666", border: "1px solid #222", padding: "0.75rem 1rem", borderRadius: "12px", cursor: "pointer", fontSize: "0.85rem" }}
          >
            Clear
          </button>
          <span style={{ color: "#444", fontSize: "0.8rem", marginLeft: "auto" }}>
            {FilteredRestaurants.length} restaurants
          </span>
        </div>
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem", padding: "2rem 3rem" }}>
        {FilteredRestaurants.map((res) => {
          const info = res?.card?.card?.restaurant?.info;
          if (!info) return null;
          return (
            <Link
              key={`${info.id}-${res?.card?.card?.info?.id || info.id}`}
              to={"/restaurants/" + info.id}
              style={{ textDecoration: "none" }}
            >
              {info.promoted
                ? <RestaurantCardPromoted resData={info} />
                : <RestaurentCard resData={info} />
              }
            </Link>
          );
        })}
      </div>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #1a1a1a", padding: "2.5rem 3rem", marginTop: "2rem" }}>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, color: "#f5f5f0", marginBottom: "4px" }}>
              Food<span style={{ color: "#f97316" }}>Villa</span>
            </div>
            <p style={{ color: "#444", fontSize: "0.8rem", fontFamily: "'DM Mono', monospace" }}>
              Built with React.js · Redux Toolkit · Tailwind CSS
            </p>
          </div>
          <p style={{ color: "#333", fontSize: "0.8rem" }}>© 2026 Ishan Keshawani</p>
        </div>
      </footer>
    </div>
  );
};

export default Body;
