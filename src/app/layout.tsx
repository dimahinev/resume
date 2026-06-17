import { PT_Sans, PT_Mono } from "next/font/google";
import "./globals.css";

const ptSans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-pt-sans",
  display: "swap",
});

const ptMono = PT_Mono({
  weight: "400",
  subsets: ["latin", "cyrillic"],
  variable: "--font-pt-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${ptSans.variable} ${ptMono.variable} font-sans text-gray-700 antialiased bg-white dark:bg-gray-950 dark:text-gray-300 print:text-sm`}
      >
        {children}
      </body>
    </html>
  );
}
