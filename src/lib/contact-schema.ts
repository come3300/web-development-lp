import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "お名前を入力してください").max(100),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  email: z.string().trim().min(1, "メールアドレスを入力してください").email("メールアドレスの形式が正しくありません"),
  tel: z.string().trim().max(30).optional().or(z.literal("")),
  topic: z.string().trim().min(1, "ご相談内容を選択してください").max(100),
  message: z.string().trim().min(1, "メッセージを入力してください").max(5000),
  // ハニーポット: 実ユーザーには見えない項目。値が入っていればボットとみなす(ルート側で判定)
  company_website: z.string().optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
