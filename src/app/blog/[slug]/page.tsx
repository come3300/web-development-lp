import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/posts";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title}｜WEBKURA`,
    description: post.excerpt,
  };
}

function formatDate(date: string) {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const otherPosts = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main style={{ background: "#f4f6f8", color: "#0e1b2c", overflowX: "hidden" }}>
      <Header />

      <PageHero
        eyebrow={post.category}
        crumb="ブログ"
        watermark="BLOG"
        title={post.title}
        lead={formatDate(post.date)}
      />

      <section style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <article
            style={{ fontSize: "0.98rem", lineHeight: 2.1, color: "#3c4a5c" }}
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
          <div style={{ marginTop: 56, paddingTop: 24, borderTop: "1px solid rgba(14,27,44,0.10)" }}>
            <Link href="/blog" style={{ fontSize: "0.9rem", fontWeight: 700, color: "#0e1b2c" }}>← ブログ一覧に戻る</Link>
          </div>
        </div>
      </section>

      {otherPosts.length > 0 && (
        <section style={{ padding: "0 clamp(20px,4vw,56px) clamp(70px,11vh,130px)", background: "#fff" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.1rem", margin: "0 0 20px" }}>他の記事</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {otherPosts.map((p, i, arr) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  style={{ display: "block", padding: "18px 0", borderTop: "1px solid rgba(14,27,44,0.08)", borderBottom: i === arr.length - 1 ? "1px solid rgba(14,27,44,0.08)" : undefined, color: "#0e1b2c", fontWeight: 700, fontSize: "0.92rem" }}
                >
                  {p.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
