import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => {
    const price = (item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100;
    return sum + (price || 0);
  }, 0);

  return (
    <div className="page-enter" style={{ background: "#0d0d0d", minHeight: "100vh", padding: "3rem" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <p style={{ color: "#f97316", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", marginBottom: "0.75rem" }}>
            🛒 Your order
          </p>
          <div className="flex items-center justify-between">
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 900, color: "#f5f5f0" }}>
              Cart
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "1rem", fontWeight: 400, color: "#555", marginLeft: "12px" }}>
                {cartItems.length} items
              </span>
            </h1>
            {cartItems.length > 0 && (
              <button
                onClick={() => dispatch(clearCart())}
                style={{
                  background: "transparent", color: "#666",
                  border: "1px solid #2a2a2a", padding: "8px 16px",
                  borderRadius: "8px", cursor: "pointer", fontSize: "0.85rem",
                  transition: "all 0.15s",
                }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = "#ef4444"; e.currentTarget.style.color = "#ef4444"; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#666"; }}
              >
                Clear all
              </button>
            )}
          </div>
          <div style={{ width: "48px", height: "2px", background: "#f97316", borderRadius: "1px", marginTop: "1rem" }} />
        </div>

        {/* Empty State */}
        {cartItems.length === 0 ? (
          <div style={{
            textAlign: "center", padding: "5rem 2rem",
            border: "1px dashed #1f1f1f", borderRadius: "16px",
          }}>
            <div style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>🍽️</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#f5f5f0", marginBottom: "0.75rem" }}>
              Your cart is empty
            </h2>
            <p style={{ color: "#555", fontSize: "0.9rem" }}>
              Explore restaurants and add something delicious
            </p>
          </div>
        ) : (
          <>
            {/* Items */}
            <div style={{ background: "#151515", border: "1px solid #1f1f1f", borderRadius: "16px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <ItemList items={cartItems} />
            </div>

            {/* Total */}
            <div style={{
              background: "#151515", border: "1px solid #1f1f1f",
              borderRadius: "16px", padding: "1.5rem",
            }}>
              <div className="flex items-center justify-between" style={{ marginBottom: "1rem" }}>
                <span style={{ color: "#888", fontSize: "0.9rem" }}>Subtotal</span>
                <span style={{ fontFamily: "'DM Mono', monospace", color: "#f5f5f0" }}>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between" style={{ marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "1px solid #1f1f1f" }}>
                <span style={{ color: "#888", fontSize: "0.9rem" }}>Delivery</span>
                <span style={{ fontFamily: "'DM Mono', monospace", color: "#22c55e", fontSize: "0.85rem" }}>FREE</span>
              </div>
              <div className="flex items-center justify-between" style={{ marginBottom: "1.5rem" }}>
                <span style={{ fontWeight: 700, color: "#f5f5f0" }}>Total</span>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700, color: "#f97316" }}>
                  ₹{total.toFixed(2)}
                </span>
              </div>
              <button style={{
                width: "100%", background: "#f97316", color: "#fff",
                border: "none", padding: "1rem", borderRadius: "12px",
                fontWeight: 700, fontSize: "1rem", cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                transition: "opacity 0.15s",
              }}
              onMouseOver={(e) => { e.currentTarget.style.opacity = "0.9"; }}
              onMouseOut={(e) => { e.currentTarget.style.opacity = "1"; }}>
                Place Order →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
