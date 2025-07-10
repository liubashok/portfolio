import { Handjet } from "next/font/google";
import { Providers } from "./components/Providers";
import { StarField } from "./components/StarField";
import { Layout } from "./components/layout/Layout";
import "./globals.css";

const handjet = Handjet({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "700", "900"],
  display: "swap",
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
        className={`${handjet.className} antialiased relative min-h-screen bg-gradient-to-tr from-blue-500 via-sky-300 to-white dark:bg-gradient-to-bl dark:from-black dark:via-black dark:to-orange-950 text-black dark:text-white`}
      >
        <Providers>
          <StarField />
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
