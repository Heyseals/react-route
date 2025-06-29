import React from "react";

function Home() {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "3rem auto",
        padding: "2rem",
        background: "linear-gradient(135deg, #3b0000 0%, #1a1a1a 100%)",
        borderRadius: "12px",
        boxShadow: "0 0 20px 5px #ff4500",
        color: "#fff",
        fontFamily: "'Orbitron', sans-serif",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "1rem",
          color: "#ff4500",
          textShadow: "0 0 10px #ff6347",
        }}
      >
        Welcome to My Web!
      </h1>
      <p
        style={{
          fontSize: "1.3rem",
          lineHeight: "1.6",
          maxWidth: "480px",
          margin: "0 auto",
        }}
      >
        เว็บไซต์นี้เกี่ยวกับสิ่งที่ฉันสนใจ เช่น เกม <strong>ROV</strong>{" "}
        และเรื่องราวต่าง ๆ ที่เกี่ยวข้อง
        รวมถึงข้อมูลและเคล็ดลับในการเล่นเกมอย่างมืออาชีพ
      </p>
    </div>
  );
}

export default Home;
