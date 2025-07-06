import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./components/Providers";
import { StarField } from "./components/StarField";
import { Layout } from "./components/layout/Layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Любовь Шохова — фронтенд-разработчик",
  description: "Сайт-визитка",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen bg-gradient-to-tr from-sky-700 via-sky-200 to-sky-50 dark:bg-gradient-to-bl dark:from-black dark:via-black dark:to-orange-900 text-black dark:text-white`}
      >
        <Providers>
          <StarField />
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
