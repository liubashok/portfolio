import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Обо мне</h1>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <Image
          src="/avatar.jpg"
          alt="Фото"
          width={200}
          height={267}
          className="rounded-full"
        />
        <p className=" eading-relaxed">
          Меня зовут Любовь, я фронтенд-разработчик. Работала с React, Next.js,
          TypeScript и другими современными технологиями. Создаю быстрые,
          адаптивные и красивые интерфейсы.
          <br />
          <br />
          Люблю минимализм, UI-дизайн и чистый код.
        </p>
      </div>
    </section>
  );
}
