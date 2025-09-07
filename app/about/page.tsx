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
      <h1 className="text-xl sm:text-3xl text-start text-white tracking-wider font-bold mb-2">
        Обо мне
      </h1>
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex min-w-[320px] h-[400px] scrollbar-hidden overflow-y-auto gap-4"
      >
        <div className=" flex flex-col justify-between items-center">
          <Image
            src="/avatar.jpg"
            alt="Фото"
            width={100}
            height={131}
            className="rounded-full contrast-125 border-white border-dotted border min-w-[100px] max-h-[134px]"
          />
          {showButton && (
            <button
              onClick={handleScrollDown}
              className="text-4xl bottom-0 bg-blue-400 dark:text-rose-200 dark:hover:text-white text-blue-950 hover:text-indigo-800 hover:bg-blue-200 dark:hover:bg-rose-800 transition dark:bg-rose-950 w-10 h-10 rounded-full border-white border-dotted border text-center"
            >
              ⇣
            </button>
          )}
        </div>
        <p className="text-lg text-white sm:text-xl">
          Меня зовут Любовь, я фронтенд-разработчик. Сейчас я активно ищу работу
          или стажировку в IT-компанииях. Мой путь во фронтенд начался
          относительно недавно, в начале 2024 года. Я самостоятельно обучалась
          вёрстке в течение года и немного затронула React и javascript. После
          этого я нашла стажировку для начинающих фронтенд-разработчиков и
          прошла на неё, выполнив тестовое задание. Это было создние сайта на
          любую тему. Я выбрала тему "Интернет-магазин косметики".
          <br />
          <br />
          Я стажируюсь в команде таких же начинающих разработчиков, как и я. И
          задействована сразу в двух проектах. Первый проект, который моя
          команда начала реализовывать, – синхронный переводчик. Мы выбрали стек
          Next.js, TypeScript, Zustand, Tailwind. И я быстро научилась работать
          с этим стеком, благодаря моим коллегам. На второй проект я попала
          из-за своего интереса к WebRTC. Там мы создаем обычный мессенджер, а
          стек был выбран еще задолго до моего прихода, это React, TypeScript,
          Redux, SCSS. В основном мы исправляем баги и добавляем новые фичи.
          <br />
          <br />
          Сайт, на котором вы сейчас находитесь, я тоже сделала сама. В разделе
          "Проекты" я разместила свои работы и оставила ссылки на репозитории
          GitHub.
          <br />
          <br />
          Меня интересует новая работа по причине того, что я прохожу стажировку
          в течение полу года, но компания изначально сообщила всем желающим
          обучаться, что не трудоустраивает к себе желающих работать после
          стажировки. И сейчас я чувствую стагнацию в своем развитии.
        </p>
      </div>
    </section>
  );
}
