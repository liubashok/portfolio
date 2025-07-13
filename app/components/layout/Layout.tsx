import Link from "next/link";
import { PropsWithChildren } from "react";
import { ThemeToggle } from "../ThemeToggle";
export function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="">
      <header className="">
        <div className="flex justify-between mb-10 sm:mb-20">
          <nav className="flex flex-col sm:flex-row gap-1 min-w-60 mt-4 ml-4 sm:mx-auto text-2xl sm:gap-20 font-extralight sm:text-4xl justify-center">
            <Link className="z-20 dark:hover:night-cloud hover:cloud" href="/">
              Главная
            </Link>
            <Link
              className="z-20 dark:hover:night-cloud hover:cloud"
              href="/about"
            >
              Обо мне
            </Link>
            <Link
              className="z-20 dark:hover:night-cloud hover:cloud"
              href="/projects"
            >
              Проекты
            </Link>
            <Link
              className="z-20 dark:hover:night-cloud hover:cloud"
              href="/contact"
            >
              Контакты
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <main className="relative">{children}</main>
    </div>
  );
}
