"use client";
import React, { useState } from "react";

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

const TOPICS: { value: string; label: string }[] = [
  { value: "new", label: "新規制作について" },
  { value: "renewal", label: "リニューアルについて" },
  { value: "maintenance", label: "保守・運用について" },
  { value: "other", label: "その他" },
];

type Status = "idle" | "submitting" | "sent" | "error";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", company: "", email: "", tel: "", topic: "new", message: "", company_website: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "送信に失敗しました。");
      }
      setStatus("sent");
      setForm({ name: "", company: "", email: "", tel: "", topic: "new", message: "", company_website: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "送信に失敗しました。");
    }
  };

  if (status === "sent") {
    return (
      <div style={{ padding: "48px 0", textAlign: "center" }}>
        <p style={{ fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>お問い合わせありがとうございます。</p>
        <p style={{ fontSize: "0.9rem", color: "#5a6b80", margin: 0, lineHeight: 1.9 }}>内容を確認の上、1〜2営業日以内にご返信いたします。</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* ハニーポット: 実ユーザーには見せず、ボットの自動入力のみを拾う */}
      <input
        type="text"
        name="company_website"
        value={form.company_website}
        onChange={update("company_website")}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />
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
          {TOPICS.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label style={labelStyle}>メッセージ <span style={{ color: "#2f6bff" }}>必須</span></label>
        <textarea required value={form.message} onChange={update("message")} rows={6} style={{ ...inputStyle, resize: "vertical", fontFamily: "var(--font-body)" }} placeholder="現状の課題やご要望など、わかる範囲で構いませんのでご記入ください。" />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        style={{ background: "#0e1b2c", color: "#fff", fontWeight: 700, fontSize: "1.05rem", padding: "18px 0", border: "none", cursor: status === "submitting" ? "default" : "pointer", opacity: status === "submitting" ? 0.7 : 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 12, fontFamily: "var(--font-body)" }}
      >
        {status === "submitting" ? "送信中…" : (<>この内容で送信する<span>→</span></>)}
      </button>
      {status === "error" && (
        <p style={{ fontSize: "0.85rem", color: "#d92d20", lineHeight: 1.8, margin: 0 }}>{errorMessage}</p>
      )}
      <p style={{ fontSize: "0.8rem", color: "#5a6b80", lineHeight: 1.8, margin: 0 }}>
        送信いただいた内容は暗号化通信で送信され、担当者に直接届きます。
      </p>
    </form>
  );
}
