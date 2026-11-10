import Header from "@/components/Header";
import "./globals.css";
import {Inter} from "next/font/google";
import React from "react";
import {CONFERENCE, FEATURES} from "@/config/features";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "NGMUN - MUN Conference at Noble and Greenough School",
    description: FEATURES.SAVE_THE_DATE
        ? `${CONFERENCE.name} - ${CONFERENCE.date}. Save the date for the Noble and Greenough Model UN Conference.`
        : "Noble and Greenough Model UN Conference",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
            <div className="relative">
                <Header/>
                <main>{children}</main>
            </div>
            </body>
        </html>
    );
}