import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/header/Header";
import Footer from "./Components/Footer/Footer";
import PageHeaderWrapper from "./Components/PageHeader/PageHeaderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NextMeal",
  description: "Restaurent website on Next JS",
};

export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main>
          <PageHeaderWrapper />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
