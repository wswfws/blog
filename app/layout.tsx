import type {Metadata} from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"


export const metadata: Metadata = {
    title: "Блог Данила",
    description: "Тут я буду выкладывать мои мысли по жизни",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        {children}
        <Footer />
        <Analytics />
        </body>
        </html>
    );
}
