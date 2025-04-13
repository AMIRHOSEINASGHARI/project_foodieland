import "./globals.css";

import type { Metadata } from "next";

import { Inter } from "next/font/google";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Foodieland | Best food website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
