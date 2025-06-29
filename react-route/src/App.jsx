import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

function App() {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/product", label: "Product" },
    // ลบ NotFound ออกจากเมนูนำทาง
  ];

  return (
    <>
      {/* Global style reset */}
      <style>{`
        html, body, #root {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow-x: hidden;
          background-color: #0a0a0a;
          color: #fff;
          font-family: 'Orbitron', sans-serif;
        }
        /* ลิงก์เมนู active style */
        .nav-link-active {
          background-color: #ff4500 !important;
          color: #1a1a1a !important;
          box-shadow: 0 0 10px 3px #ff6347, 0 0 20px 6px #ff4500 !important;
          text-shadow: none !important;
          transform: scale(1.05) !important;
        }
      `}</style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
          overflowX: "hidden",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            background:
              "linear-gradient(90deg, #1a1a1a 0%, #3b0000 50%, #1a1a1a 100%)",
            padding: "1.2rem 1rem",
            boxShadow: "0 0 10px 2px #ff4500",
            borderBottom: "3px solid #ff4500",
            position: "sticky",
            top: 0,
            zIndex: 100,
            width: "100vw",
            left: 0,
            right: 0,
          }}
        >
          {navLinks.map(({ to, label }) => (
            <Link
              key={label}
              to={to}
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link-active" : "")
              }
              style={{
                color: "#ff4500",
                textDecoration: "none",
                fontSize: "1.15rem",
                fontWeight: "700",
                padding: "0.5rem 1.2rem",
                borderRadius: "8px",
                letterSpacing: "1px",
                textShadow:
                  "0 0 3px #ff4500, 0 0 6px #ff4500, 0 0 10px #ff6347",
                transition: "all 0.3s ease",
                boxShadow: "0 0 5px #ff4500",
                userSelect: "none",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#ff4500";
                e.target.style.color = "#1a1a1a";
                e.target.style.boxShadow =
                  "0 0 10px 3px #ff6347, 0 0 20px 6px #ff4500";
                e.target.style.textShadow = "none";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                if (!e.target.classList.contains("nav-link-active")) {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#ff4500";
                  e.target.style.boxShadow = "0 0 5px #ff4500";
                  e.target.style.textShadow =
                    "0 0 3px #ff4500, 0 0 6px #ff4500, 0 0 10px #ff6347";
                  e.target.style.transform = "scale(1)";
                }
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div style={{ flexGrow: 1, padding: "1rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
