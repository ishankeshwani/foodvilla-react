import React, { useEffect, useState } from 'react';
import { mockRestaurantData } from '../utils/mockData';
import RestCategory from './RestCategory';

const RestaurantsMenu = () => {
  const [showIndex, setShowIndex] = useState(1);
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => { setResInfo(mockRestaurantData); }, []);

  if (!resInfo) return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "60vh", color: "#555" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🍽️</div>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85rem" }}>Loading menu...</p>
      </div>
    </div>
  );

  const restaurant = resInfo?.data?.cards[0]?.card?.card?.info;
  const menuCategories = resInfo?.data?.cards?.filter(
    (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="page-enter" style={{ background: "#0d0d0d", minHeight: "100vh" }}>

      {/* Restaurant Hero */}
      <div style={{
        padding: "3rem",
        borderBottom: "1px solid #1a1a1a",
        background: "linear-gradient(180deg, #151515 0%, #0d0d0d 100%)",
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ color: "#f97316", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", marginBottom: "1rem" }}>
            📍 Menu
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 900, color: "#f5f5f0",
            lineHeight: 1.1, marginBottom: "1rem",
          }}>
            {restaurant?.name}
          </h1>
          <div className="flex flex-wrap items-center gap-4" style={{ marginBottom: "1rem" }}>
            <span style={{ fontSize: "0.85rem", color: "#888" }}>
              🍕 {restaurant?.cuisines?.join(", ")}
            </span>
            <span style={{
              fontFamily: "'DM Mono', monospace", fontSize: "0.8rem",
              color: "#f5f5f0", background: "#1c1c1c",
              border: "1px solid #2a2a2a", padding: "4px 12px", borderRadius: "8px",
            }}>
              {restaurant?.costForTwoMessage}
            </span>
          </div>
          <div style={{ width: "48px", height: "2px", background: "#f97316", borderRadius: "1px" }} />
        </div>
      </div>

      {/* Menu Categories */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 3rem" }}>
        <p style={{ color: "#444", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", marginBottom: "1.5rem" }}>
          {menuCategories?.length} categories
        </p>
        {menuCategories?.map((category, index) => (
          <RestCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantsMenu;
