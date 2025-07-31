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
      className="flex absolute min-w-80 sm:w-[500px] -translate-x-1/2 left-1/2 z-20 flex-col gap-4"
    >
      <input
        name="name"
        required
        placeholder="Имя"
        className="border p-2 rounded dark:bg-black"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        className="border p-2 rounded dark:bg-black"
      />
      <textarea
        name="message"
        required
        placeholder="Сообщение"
        className="border p-2 rounded h-32 dark:bg-black"
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
