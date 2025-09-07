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
      className="flex absolute min-w-80 sm:w-[500px] font-light text-lg -translate-x-1/2 left-1/2 z-20 flex-col gap-4"
    >
      <input
        name="name"
        required
        placeholder="Имя"
        className="border tracking-wider border-dotted p-2 pl-4 rounded-full dark:bg-black bg-sky-800"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        className="border tracking-wider border-dotted p-2 pl-4 rounded-full dark:bg-black bg-sky-800"
      />
      <textarea
        name="message"
        required
        placeholder="Сообщение"
        className="border tracking-wider border-dotted p-2 pl-4 rounded-3xl h-32 dark:bg-black bg-sky-800"
      />
      <button
        type="submit"
        className="tracking-wider font-medium text-xl mt-6 px-4 py-2 dark:bg-rose-950 bg-blue-400 dark:text-rose-200 dark:hover:text-white text-blue-950 hover:text-indigo-800 hover:bg-blue-200 rounded-full dark:hover:bg-rose-800 transition"
      >
        Отправить
      </button>
      {status && <p className="text-sm text-gray-600">{status}</p>}
    </form>
  );
}
