"use client";
import React, { useState } from "react";

type Category = { name: string; items: [string, string][] };

export function FaqAccordion({ categories }: { categories: Category[] }) {
  const [open, setOpen] = useState<string | null>(`${categories[0]?.name}-0`);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
      {categories.map((cat) => (
        <div key={cat.name}>
          <h3 style={{ fontWeight: 900, fontSize: "1.15rem", margin: "0 0 20px", color: "#2f6bff" }}>{cat.name}</h3>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {cat.items.map(([q, a], i, arr) => {
              const key = `${cat.name}-${i}`;
              const isOpen = open === key;
              return (
                <div key={key} style={{ borderTop: i === 0 ? "1px solid rgba(14,27,44,0.15)" : undefined, borderBottom: "1px solid rgba(14,27,44,0.15)" }}>
                  <button
                    onClick={() => setOpen(isOpen ? null : key)}
                    style={{ width: "100%", textAlign: "left", display: "grid", gridTemplateColumns: "56px 1fr 24px", gap: 20, padding: "24px 0", background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-body)" }}
                  >
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "#2f6bff" }}>Q.</div>
                    <span style={{ fontWeight: 700, fontSize: "1rem", color: "#0e1b2c" }}>{q}</span>
                    <span style={{ fontSize: "1.2rem", color: "#5a6b80", lineHeight: 1 }}>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ display: "grid", gridTemplateColumns: "56px 1fr 24px", gap: 20, paddingBottom: 24 }}>
                      <div />
                      <p style={{ fontSize: "0.92rem", lineHeight: 2, color: "#3c4a5c", margin: 0 }}>{a}</p>
                      <div />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
