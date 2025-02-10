import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "@/styles/globals.css";
import "@/styles/spinkit-animation.css";

import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";

export const metadata: Metadata = {
    title: {
        template: `%s | ${APP_NAME}`,
        default: APP_NAME,
    },
    description: APP_DESCRIPTION,
    metadataBase: new URL(SERVER_URL),
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
