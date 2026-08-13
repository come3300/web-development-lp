"use client";
import React from "react";
export function ImagePlaceholder({ label, style }: { label: string; style?: React.CSSProperties }) {
  return (
    <div style={{ width: "100%", height: "100%", borderRadius: 16, background: "repeating-linear-gradient(135deg,#e2e7ed,#e2e7ed 10px,#d6dde5 10px,#d6dde5 20px)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5a6b80", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.04em", textAlign: "center", padding: 12, ...style }}>
      {label}
    </div>
  );
}
