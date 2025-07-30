import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="absolute z-20 max-w-[1000px] left-1/2 -translate-x-1/2">
      <h1 className="text-xl sm:text-3xl text-start font-bold mb-4">Обо мне</h1>
      <div className="flex min-w-[320px] gap-4">
        <Image
          src="/small-avatar.png"
          alt="Фото"
          width={100}
          height={134}
          className="rounded-full min-w-[100px] max-h-[134px]"
        />
        <p className="text-lg sm:text-2xl">
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
