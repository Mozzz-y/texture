import Footer from "./components/Main/Footer/page";
import Header from "./components/Main/Header/page";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter-variable",
});
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru">
      <body className={` min-h-full flex flex-col`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
