"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showButton, setShowButton] = useState(true);

  const handleScrollDown = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
      setShowButton(false);
    }
  };
  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

      if (scrollTop + clientHeight >= scrollHeight - 5) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
    }
  };
  return (
    <section className="absolute z-20 max-w-[1000px] left-1/2 -translate-x-1/2">
      <h1 className="text-xl sm:text-3xl text-start text-white tracking-wider font-semibold mb-5">
        Обо мне
      </h1>
      <div className="flex min-w-[320px] gap-4">
        <div className=" flex flex-col h-72 sm:h-96 justify-between items-center">
          <Image
            src="/avatar.jpg"
            alt="Фото"
            width={100}
            height={142}
            className="rounded-full border-white border-dotted border min-w-[100px] max-h-[142px]"
          />
          {showButton && (
            <button
              onClick={handleScrollDown}
              className="text-4xl bg-blue-400 dark:text-rose-200 dark:hover:text-white text-blue-950 hover:text-indigo-800 hover:bg-blue-200 dark:hover:bg-rose-800 dark:bg-rose-950 w-10 h-10 rounded-full border-white border-dotted border text-center transition-opacity ease-in duration-700"
            >
              ⇣
            </button>
          )}
        </div>
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="scrollbar-hidden overflow-y-auto h-72 sm:h-96 "
        >
          <p
            ref={containerRef}
            onScroll={handleScroll}
            className="text-lg text-white sm:text-xl"
          >
            Меня зовут Любовь Шохова, я фронтенд-разработчик. Сейчас я активно
            ищу работу или стажировку в IT-компанииях. Мой путь во фронтенд
            начался относительно недавно – в начале 2024 года. Я самостоятельно
            обучалась вёрстке в течение года и начала изучать React и
            JavaScript. В этот период я устроилась на стажировку для начинающих
            фронтенд-разработчиков, успешно выполнив тестовое задание. Это было
            создание сайта на любую тему, и я выбрала тему
            &quot;Интернет-магазин косметики&quot;.
            <br />
            <br />
            Я стажируюсь в команде начинающих разработчиков и задействована
            сразу в двух проектах. Первый проект — синхронный переводчик, для
            которого мы выбрали стек Next.js, TypeScript, Zustand и Tailwind.
            Благодаря коллегам я быстро освоила этот стек. На второй проект я
            устроилась из-за своего интереса к WebRTC. Это обычный мессенджер.
            Стек был выбран ещё до моего прихода: React, TypeScript, Redux и
            SCSS. В основном мы исправляем баги и добавляем новые функции.
            <br />
            <br />
            Сайт, на котором вы находитесь, я тоже создала сама. В разделе
            &quot;Проекты&quot; я разместила свои работы и оставила ссылки на
            репозитории GitHub.
            <br />
            <br />Я ищу работу, потому что прохожу стажировку уже полгода, а
            компания изначально сообщила всем, что не трудоустраивает желающих
            после её окончания. Сейчас я ощущаю стагнацию в своём развитии и
            хочу двигаться дальше.
          </p>
        </div>
      </div>
    </section>
  );
}
