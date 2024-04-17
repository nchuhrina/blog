import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import styles from "./styles/layout.module.css"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My blog Next",
  description: "My first next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>{children}</main>
        </body>
    </html>
  );
}
