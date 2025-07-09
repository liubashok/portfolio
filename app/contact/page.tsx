"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus("✅ Сообщение отправлено!");
      form.reset();
    } else {
      setStatus("❌ Ошибка при отправке");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-xl mx-auto p-10"
    >
      <input
        name="name"
        required
        placeholder="Имя"
        className="border p-2 rounded"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        className="border p-2 rounded"
      />
      <textarea
        name="message"
        required
        placeholder="Сообщение"
        className="border p-2 rounded h-32"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Отправить
      </button>
      {status && <p className="text-sm text-gray-600">{status}</p>}
    </form>
  );
}
