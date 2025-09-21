import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Copy from "./components/Copy";
import { ProductProvider } from "@/context/productContext";
import { BlogProvider } from "@/context/blogContext";
import Head from "next/head";

const nunito = localFont({
  src: "./fonts/Nunito-VariableFont_wght.ttf",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Juki Nuts",
  description: "Healthy, Flavorful, Proudly Ghanaian - Enjoy the Natural, Crunchy & Yummy Juki Nuts Cashews direct from local farms in Ghana to your table.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <BlogProvider>
        <ProductProvider>
          <body
            className={nunito.className}
          >
              <Header/>
              {children}
              <Footer/>
              <Copy/>
          </body>
        </ProductProvider>
      </BlogProvider>
    </html>
  );
}
