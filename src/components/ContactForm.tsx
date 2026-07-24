"use client";
import React, { useState } from "react";

const CONTACT_EMAIL = "hello@tsukuru-web.example";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  border: "1.5px solid rgba(14,27,44,0.2)",
  background: "#fff",
  color: "#0e1b2c",
  fontSize: "0.95rem",
  fontFamily: "var(--font-body)",
};

const labelStyle: React.CSSProperties = { display: "block", fontWeight: 700, fontSize: "0.85rem", marginBottom: 8 };

export function ContactForm() {
  const [form, setForm] = useState({ name: "", company: "", email: "", tel: "", topic: "新規制作について", message: "" });
  const [sent, setSent] = useState(false);

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `【お問い合わせ】${form.topic} — ${form.name || "お名前未入力"}`;
    const body = [
      `お名前: ${form.name}`,
      `会社名: ${form.company || "(未入力)"}`,
      `メールアドレス: ${form.email}`,
      `電話番号: ${form.tel || "(未入力)"}`,
      `ご相談内容: ${form.topic}`,
      "",
      "メッセージ:",
      form.message,
    ].join("\n");
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    window.location.href = mailto;
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: 20 }}>
        <div>
          <label style={labelStyle}>お名前 <span style={{ color: "#2f6bff" }}>必須</span></label>
          <input required value={form.name} onChange={update("name")} style={inputStyle} placeholder="山田 太郎" />
        </div>
        <div>
          <label style={labelStyle}>会社名・屋号 <span style={{ color: "#5a6b80", fontWeight: 500 }}>任意</span></label>
          <input value={form.company} onChange={update("company")} style={inputStyle} placeholder="株式会社◯◯" />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: 20 }}>
        <div>
          <label style={labelStyle}>メールアドレス <span style={{ color: "#2f6bff" }}>必須</span></label>
          <input required type="email" value={form.email} onChange={update("email")} style={inputStyle} placeholder="you@example.com" />
        </div>
        <div>
          <label style={labelStyle}>電話番号 <span style={{ color: "#5a6b80", fontWeight: 500 }}>任意</span></label>
          <input value={form.tel} onChange={update("tel")} style={inputStyle} placeholder="090-1234-5678" />
        </div>
      </div>
      <div>
        <label style={labelStyle}>ご相談内容 <span style={{ color: "#2f6bff" }}>必須</span></label>
        <select required value={form.topic} onChange={update("topic")} style={inputStyle}>
          <option>新規制作について</option>
          <option>リニューアルについて</option>
          <option>保守・運用について</option>
          <option>その他</option>
        </select>
      </div>
      <div>
        <label style={labelStyle}>メッセージ <span style={{ color: "#2f6bff" }}>必須</span></label>
        <textarea required value={form.message} onChange={update("message")} rows={6} style={{ ...inputStyle, resize: "vertical", fontFamily: "var(--font-body)" }} placeholder="現状の課題やご要望など、わかる範囲で構いませんのでご記入ください。" />
      </div>
      <button type="submit" style={{ background: "#0e1b2c", color: "#fff", fontWeight: 700, fontSize: "1.05rem", padding: "18px 0", border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 12, fontFamily: "var(--font-body)" }}>
        この内容で送信する<span>→</span>
      </button>
      <p style={{ fontSize: "0.8rem", color: "#5a6b80", lineHeight: 1.8, margin: 0 }}>
        送信すると、入力内容をもとにお使いのメールソフトが起動します。{sent && "メールソフトが開かない場合は、お手数ですが下記メールアドレスへ直接ご連絡ください。"}
      </p>
    </form>
  );
}
