import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const poppins = Poppins({ subsets: ["latin"] ,weight: '400'});

export const metadata = {
  title: "Pieverse",
  description: "The unseen version of PIE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
