import React from "react";

function About() {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "#1a1a1a",
        borderRadius: "12px",
        boxShadow: "0 0 15px rgba(255, 69, 0, 0.7)",
        color: "#fff",
        fontFamily: "'Orbitron', sans-serif",
      }}
    >
      <h1
        style={{ color: "#ff4500", marginBottom: "1rem", textAlign: "center" }}
      >
        About Me
      </h1>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
        สวัสดีครับ! ผมชื่อ <strong>สมมุติ</strong>{" "}
        เป็นนักเรียนที่มีความสนใจในการสร้างเว็บไซต์และเทคโนโลยีใหม่ ๆ
        ผมชอบเรียนรู้เกี่ยวกับการพัฒนาเว็บแอปพลิเคชันด้วย React และการออกแบบ
        UI/UX ที่สวยงามและใช้งานง่าย
      </p>

      <h3 style={{ marginTop: "2rem", color: "#ff6347" }}>
        สิ่งที่ผมสนใจเป็นพิเศษ
      </h3>
      <ul style={{ fontSize: "1.1rem", lineHeight: "1.5" }}>
        <li>การพัฒนาเว็บด้วย React และ JavaScript</li>
        <li>การออกแบบ UI/UX ที่เน้นผู้ใช้เป็นศูนย์กลาง</li>
        <li>การใช้งาน Firebase ในการจัดการข้อมูลและ Hosting</li>
        <li>การเรียนรู้เทคโนโลยีใหม่ ๆ อย่างต่อเนื่อง</li>
      </ul>

      {/* เพิ่มส่วนแนะนำเกี่ยวกับเว็บไซต์ */}
      <h3 style={{ marginTop: "2rem", color: "#ff6347" }}>
        เกี่ยวกับเว็บไซต์นี้
      </h3>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
        เว็บไซต์นี้ถูกสร้างขึ้นเพื่อแสดงข้อมูลเกี่ยวกับตัวละครและไอเท็มในเกม ROV
        (Realm of Valor) รวมถึงการแนะนำเทคนิคและอุปกรณ์สำหรับการเล่นเกม
        นอกจากนี้ยังเป็นโปรเจกต์ที่ช่วยฝึกทักษะการพัฒนาเว็บด้วย React
        และการออกแบบ UI/UX ให้สวยงามและใช้งานง่าย
      </p>

      <p style={{ marginTop: "2rem", fontStyle: "italic", color: "#ff7f50" }}>
        ขอบคุณที่มาเยี่ยมชมเว็บไซต์ของผมครับ!
      </p>
    </div>
  );
}

export default About;
