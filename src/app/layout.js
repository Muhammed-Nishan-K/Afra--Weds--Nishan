import { Lora, Great_Vibes } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-great-vibes",
  subsets: ["latin"],
});

export const metadata = {
  title: "Afra & Nishan | Nikkah",
  description: "Join us in celebrating the Nikkah of Afra & Nishan on October 18, 2026.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lora.variable} ${greatVibes.variable}`}>
      <body>{children}</body>
    </html>
  );
}
