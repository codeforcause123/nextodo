import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Todo-List-Next",
  description: "Next App",
  icon: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-center`}>{children}</body>
    </html>
  );
}
