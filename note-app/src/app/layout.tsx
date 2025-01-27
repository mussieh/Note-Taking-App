import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "Note Taking App",
    description: "An app for taking notes",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
