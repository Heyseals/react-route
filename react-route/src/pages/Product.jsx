import React, { useState } from "react";

const roleIcons = {
  Assassin: "🗡️",
  Marksman: "🏹",
  Mage: "🔮",
  "Warrior/Tank": "🛡️",
  Tank: "🛡️",
  Warrior: "⚔️",
  Support: "💉",
  "Mage/Support": "✨",
  "Tank/Support": "🛡️",
  "Warrior/Assassin": "⚔️🗡️",
  "Assassin/Mage": "🗡️🔮",
};

function Product() {
  const [selected, setSelected] = useState(null);

  // ตัวช่วยสุ่มรูป placeholder ถ้าไม่มีรูปจริง (แทนที่ด้วย URL รูปจริงได้)
  const placeholderImage = (name) =>
    `https://via.placeholder.com/200x200.png?text=${encodeURIComponent(name)}`;

  const characters = [
    {
      name: "Nakroth",
      role: "Assassin",
      description:
        "ตัวละครสายแอสซาซิน คล่องตัวสูง เหมาะกับการโจมตีรวดเร็วและลอบสังหารศัตรู",
      image:
        "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/3e2709c4727c28ce77fe1639ca27007f998447558.png",
      items: [
        "Claves Sancti",
        "Fafnir's Talon",
        "Slikk's Sting",
        "Gilded Greaves",
        "Omni Arms",
        "Muramasa",
      ],
    },
    {
      name: "Violet",
      role: "Marksman",
      description:
        "มือปืนที่มีพลังโจมตีระยะไกล แม่นยำ เหมาะสำหรับโจมตีเป้าหมายจากระยะไกล",
      image:
        "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/cee12b8a7b7400eec5475a704a885218.jpg",
      items: [
        "Claves Sancti",
        "Rankbreaker",
        "Slikk's Sting",
        "Gilded Greaves",
        "Fafnir's Talon",
        "Muramasa",
      ],
    },
    {
      name: "Zill",
      role: "Assassin/Mage",
      description:
        "ตัวละครที่มีสกิลหลากหลาย เคลื่อนไหวรวดเร็ว เหมาะกับการลอบสังหารและทำดาเมจเวท",
      image:
        "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/0a47b87f4615e7e16409144d6eadb02e.jpg",
      items: [
        "Rhea's Blessing",
        "Hecate's Diadem",
        "Gilded Greaves",
        "Omni Arms",
        "Frost Cape",
        "Muramasa",
      ],
    },
    {
      name: "Lauriel",
      role: "Mage",
      description:
        "เมจสายดาเมจเวทสูง มีสกิลคูลดาวน์ต่ำ เหมาะสำหรับทำดาเมจต่อเนื่อง",
      image:
        "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/1edc1090b7c770292662b93ea2751f26.jpg",
      items: [
        "Rhea's Blessing",
        "Hecate's Diadem",
        "Holy of Holies",
        "Boomstick",
        "Gilded Greaves",
        "Omni Arms",
      ],
    },
    {
      name: "Mortos",
      role: "Warrior/Tank",
      description:
        "ตัวแทงค์สายไฟต์เตอร์ที่มีพลังโจมตีและพลังป้องกันสูง เหมาะกับการเปิดทีม",
      image:
        "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/543b2d80bffa6dc0aa16fc067b10409c343409168.jpg",
      items: [
        "Frost Cape",
        "Medallion of Troy",
        "War Boots",
        "Omni Arms",
        "Mail of Pain",
        "Blade Armor",
      ],
    },
    {
      name: "Mganga",
      role: "Mage",
      description: "เมจสายเวทที่เน้นดาเมจแบบต่อเนื่องและลดเกราะศัตรู",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvSu5g6fso7ufEvHer2yQjjpsr4dET1EFgw&s",
      items: [
        "Rhea's Blessing",
        "Hecate's Diadem",
        "Boomstick",
        "Holy of Holies",
        "Gilded Greaves",
        "Omni Arms",
      ],
    },
    {
      name: "Thane",
      role: "Tank",
      description: "แทงค์สายเปิดทีม มีสกิลควบคุมและป้องกันทีมได้ดี",
      image:
        "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/e0a1dde9e2f99386ba8b9fd599928b46.jpg",
      items: [
        "Frost Cape",
        "Medallion of Troy",
        "Guardian's Relic",
        "War Boots",
        "Mail of Pain",
        "Blade Armor",
      ],
    },
    {
      name: "Krixi",
      role: "Mage",
      description: "เมจที่มีพลังเวทแรงและสกิล AOE เหมาะกับการทำดาเมจทีม",
      image: "https://i.ytimg.com/vi/uvGxLoOxXko/maxresdefault.jpg",
      items: [
        "Rhea's Blessing",
        "Hecate's Diadem",
        "Boomstick",
        "Holy of Holies",
        "Gilded Greaves",
        "Omni Arms",
      ],
    },
    {
      name: "Butterfly",
      role: "Assassin",
      description: "แอสซาซินสายฟันเร็ว มีสกิลลอบสังหารสูง",
      image:
        "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/cabe8ddb06be418099fa5e0f5e6acfba.jpg",
      items: [
        "Claves Sancti",
        "Fafnir's Talon",
        "Slikk's Sting",
        "Omni Arms",
        "Gilded Greaves",
        "Muramasa",
      ],
    },
    {
      name: "Tel’Annas",
      role: "Marksman",
      description: "มือปืนระยะไกล ที่มีความเร็วในการยิงสูงและสกิลหนีดี",
      image:
        "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/c1e92e0a1688576ffb43f46f54164fa0285351037.jpg",
      items: [
        "Claves Sancti",
        "Rankbreaker",
        "Slikk's Sting",
        "Gilded Greaves",
        "Fafnir's Talon",
        "Muramasa",
      ],
    },
    //... (เติมตัวละครที่เหลือตามเดิม แบบเดียวกับนี้)
    // ตัวอย่างเติมเพิ่ม:
    {
      name: "Omen",
      role: "Warrior/Tank",
      description:
        "ไฟต์เตอร์ที่มีความทนทานและดาเมจแรง เหมาะกับการเปิดทีมและยืนสู้",
      image:
        "https://files.bo3.gg/uploads/image/25959/image/webp-4006a414667dbe11908cb635bf5cee0b.webp",
      items: [
        "Frost Cape",
        "Medallion of Troy",
        "War Boots",
        "Omni Arms",
        "Mail of Pain",
        "Blade Armor",
      ],
    },
    {
      name: "Eland'orr",
      role: "Assassin",
      description: "แอสซาซินที่มีสกิลหลบหลีกดีและดาเมจแรง",
      image:
        "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/e9ecb6f036c22009e72bfb516805d5e9.jpg",
      items: [
        "Claves Sancti",
        "Fafnir's Talon",
        "Slikk's Sting",
        "Omni Arms",
        "Gilded Greaves",
        "Muramasa",
      ],
    },
    // ... เพิ่มตัวละครอื่นๆ ครบตามที่ต้องการ
  ];

  // เปิด modal
  function openModal(character) {
    setSelected(character);
  }

  // ปิด modal
  function closeModal() {
    setSelected(null);
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

        .container {
          max-width: 900px;
          margin: 3rem auto;
          padding: 1rem 2rem 3rem;
          background: linear-gradient(135deg, #0a0a0a, #1a0a0a);
          border-radius: 20px;
          box-shadow: 0 0 30px 5px #ff4500cc;
          font-family: 'Orbitron', sans-serif;
          color: #fff;
        }

        .title {
          text-align: center;
          font-size: 3rem;
          margin-bottom: 3rem;
          color: #ff471a;
          text-shadow: 0 0 20px #ff6333;
          letter-spacing: 4px;
          font-weight: 900;
          user-select: none;
        }

        .card {
          background: linear-gradient(135deg, #2a0a0a, #4a1a00);
          border-radius: 18px;
          padding: 1.6rem 2rem 2rem;
          margin-bottom: 2.8rem;
          box-shadow:
            inset 0 0 12px 2px #ff4500cc,
            0 6px 20px 4px #ff330011;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .card:hover {
          transform: scale(1.05) translateY(-8px);
          box-shadow:
            inset 0 0 18px 5px #ff6347dd,
            0 12px 30px 8px #ff4a0000;
          z-index: 10;
        }

        .card::before {
          content: "";
          position: absolute;
          top: -20%;
          left: -30%;
          width: 160%;
          height: 160%;
          background: radial-gradient(circle at center, #ff4500bb, transparent 70%);
          filter: blur(40px);
          opacity: 0.2;
          pointer-events: none;
          transition: opacity 0.5s ease;
          border-radius: 50%;
          z-index: 0;
        }

        .card:hover::before {
          opacity: 0.45;
        }

        .header {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 900;
          font-size: 1.9rem;
          color: #ff7f50;
          text-shadow: 0 0 6px #ff6f3c;
          position: relative;
          z-index: 2;
          user-select: none;
        }

        .role {
          font-style: italic;
          font-weight: 600;
          font-size: 1.2rem;
          color: #ffbc90;
          margin-left: auto;
          user-select: none;
          text-shadow: 0 0 3px #ffb07a;
        }

        .description {
          margin: 1rem 0 1.4rem 0;
          font-size: 1.1rem;
          line-height: 1.5;
          color: #ffc7a6;
          text-shadow: 0 0 3px #ff6f3c;
          user-select: text;
        }

        .items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          user-select: none;
        }

        .item {
          background: #ff45004f;
          padding: 0.35rem 0.9rem;
          border-radius: 9999px;
          color: #ffbc90;
          font-weight: 600;
          font-size: 1rem;
          box-shadow: 0 0 8px #ff4500cc;
          transition: all 0.25s ease;
          cursor: default;
          user-select: none;
          position: relative;
          overflow: hidden;
        }

        .item:hover {
          background: #ff451a;
          color: #fff3e6;
          box-shadow: 0 0 12px 3px #ff451a;
          transform: translateY(-2px);
        }

        .role-icon {
          font-size: 1.8rem;
          user-select: none;
        }

        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background: #1a1a1a;
          padding: 2rem;
          border-radius: 20px;
          max-width: 600px;
          width: 90%;
          box-shadow: 0 0 30px 10px #ff4500cc;
          color: #fff;
          font-family: 'Orbitron', sans-serif;
          position: relative;
          text-align: center;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: transparent;
          border: none;
          font-size: 2rem;
          color: #ff4500;
          cursor: pointer;
          font-weight: 900;
        }

        .modal-image {
          max-width: 200px;
          margin-bottom: 1rem;
          border-radius: 15px;
          box-shadow: 0 0 20px 5px #ff4500cc;
        }

        .modal-title {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: #ff471a;
          text-shadow: 0 0 15px #ff6333;
          letter-spacing: 3px;
          font-weight: 900;
          user-select: none;
        }

        .modal-role {
          font-size: 1.3rem;
          font-style: italic;
          margin-bottom: 1rem;
          color: #ffbc90;
          user-select: none;
          text-shadow: 0 0 5px #ffb07a;
        }

        .modal-description {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          color: #ffc7a6;
          user-select: text;
          text-shadow: 0 0 5px #ff6f3c;
        }

        .modal-items {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          user-select: none;
        }

        .modal-item {
          background: #ff45004f;
          padding: 0.6rem 1.2rem;
          border-radius: 9999px;
          color: #ffbc90;
          font-weight: 700;
          font-size: 1.1rem;
          box-shadow: 0 0 10px #ff4500cc;
          cursor: default;
          user-select: none;
          transition: all 0.3s ease;
        }

        .modal-item:hover {
          background: #ff451a;
          color: #fff3e6;
          box-shadow: 0 0 15px 5px #ff451a;
          transform: translateY(-3px);
        }
      `}</style>

      <div className="container" role="main">
        <h1 className="title">รายชื่อตัวละคร ROV และไอเท็มแนะนำ</h1>

        {characters.map(({ name, role, description }) => (
          <article
            key={name}
            className="card"
            tabIndex={0}
            aria-label={`${name}, role ${role}, กดเพื่อดูรายละเอียด`}
            onClick={() =>
              openModal(characters.find((char) => char.name === name))
            }
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                openModal(characters.find((char) => char.name === name));
              }
            }}
          >
            <header className="header">
              <span className="role-icon" aria-hidden="true">
                {roleIcons[role] || "❓"}
              </span>
              {name}
              <span className="role">{role}</span>
            </header>
            <p className="description">{description}</p>
          </article>
        ))}
      </div>

      {selected && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex={-1}
          onClick={closeModal}
          onKeyDown={(e) => {
            if (e.key === "Escape") closeModal();
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            tabIndex={0}
          >
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="ปิดหน้าต่างรายละเอียด"
            >
              ×
            </button>
            <img
              src={selected.image || placeholderImage(selected.name)}
              alt={`รูปตัวละคร ${selected.name}`}
              className="modal-image"
            />
            <h2 id="modal-title" className="modal-title">
              {selected.name}
            </h2>
            <div className="modal-role">{selected.role}</div>
            <p className="modal-description">{selected.description}</p>
            <div className="modal-items">
              {selected.items.map((item) => (
                <div
                  key={item}
                  className="modal-item"
                  aria-label={`ไอเท็ม ${item}`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
