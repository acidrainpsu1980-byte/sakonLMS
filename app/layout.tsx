import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "SakonLMS - Learning Management System",
    description: "Modern Learning Management System for online education",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="th">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
