import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "ブログ・お知らせ｜TSUKURU",
  description: "TSUKURUからのお知らせと、Web制作・SEOに関する情報を発信するブログです。",
};

function formatDate(date: string) {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main style={{ background: "#f4f6f8", color: "#0e1b2c", overflowX: "hidden" }}>
      <Header />

      <PageHero
        eyebrow="BLOG"
        crumb="ブログ"
        watermark="BLOG"
        title="ブログ・お知らせ"
        lead="Web制作・SEOに関する情報や、サービスからのお知らせをお届けします。"
      />

      <section style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", background: "#f4f6f8" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          {posts.length === 0 && (
            <p style={{ fontSize: "0.95rem", color: "#5a6b80" }}>現在公開されている記事はありません。</p>
          )}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {posts.map((post, i, arr) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  gap: "clamp(16px,3vw,32px)",
                  padding: "32px 0",
                  borderTop: i === 0 ? "1.5px solid #0e1b2c" : "1px solid rgba(14,27,44,0.15)",
                  borderBottom: i === arr.length - 1 ? "1.5px solid #0e1b2c" : undefined,
                  color: "#0e1b2c",
                  alignItems: "start",
                }}
              >
                <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#5a6b80" }}>{formatDate(post.date)}</div>
                <div>
                  <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", color: "#2f6bff", border: "1px solid #2f6bff", padding: "3px 10px", marginBottom: 12 }}>{post.category}</span>
                  <h2 style={{ fontWeight: 900, fontSize: "1.1rem", lineHeight: 1.6, margin: "0 0 10px" }}>{post.title}</h2>
                  <p style={{ fontSize: "0.88rem", lineHeight: 1.9, color: "#3c4a5c", margin: 0 }}>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
