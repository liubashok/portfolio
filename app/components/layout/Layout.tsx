import Link from "next/link";
import { PropsWithChildren } from "react";
import { ThemeToggle } from "../ThemeToggle";
export function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div>
      <header className="p-6">
        <nav className="flex gap-4 justify-center">
          <Link href="/">Главная</Link>
          <Link href="/about">Обо мне</Link>
          <Link href="/projects">Проекты</Link>
          <Link href="/contact">Контакты</Link>
        </nav>
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
      </header>
      <main>{children}</main>
      <footer className="mt-10 p-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Любовь Шохова
      </footer>
    </div>
  );
}
