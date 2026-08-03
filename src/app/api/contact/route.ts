import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";

const TOPIC_LABELS: Record<string, string> = {
  new: "新規制作について",
  renewal: "リニューアルについて",
  maintenance: "保守・運用について",
  other: "その他",
};

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "リクエストの形式が正しくありません。" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "入力内容をご確認ください。", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // ハニーポットに値が入っている = ボットとみなし、送信した体で静かに弾く
  if (data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error("Contact API is not configured: missing RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL");
    return NextResponse.json(
      { error: "現在お問い合わせフォームをご利用いただけません。恐れ入りますが時間を置いて再度お試しください。" },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const topicLabel = TOPIC_LABELS[data.topic] ?? data.topic;

  const text = [
    `お名前: ${data.name}`,
    `会社名: ${data.company || "(未入力)"}`,
    `メールアドレス: ${data.email}`,
    `電話番号: ${data.tel || "(未入力)"}`,
    `ご相談内容: ${topicLabel}`,
    "",
    "メッセージ:",
    data.message,
  ].join("\n");

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `【お問い合わせ】${topicLabel} — ${data.name}`,
      text,
    });
  } catch (err) {
    console.error("Failed to send contact email via Resend", err);
    return NextResponse.json(
      { error: "送信に失敗しました。恐れ入りますが時間を置いて再度お試しください。" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
