import { NextRequest, NextResponse } from "next/server";

const TOKEN = process.env.TELEGRAM_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    console.log("TOKEN=", TOKEN, "CHAT_ID=", CHAT_ID);
    const text = `📝 <b>Новое сообщение с сайта</b>\n\n👤 Имя: ${name}\n📧 Email: ${email}\n💬 Сообщение:\n${message}`;

    const res = await fetch(
      `https://api.telegram.org/bot${TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      }
    );
    if (!res.ok) {
      return NextResponse.json(
        { error: "Ошибка отправки в Telegram" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
