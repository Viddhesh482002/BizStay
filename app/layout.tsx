import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export const metadata: Metadata = {
  title: "BizStay | Corporate & Family Hotel Booking Across India",
  description:
    "BizStay provides hotel room bookings for corporate employees, business travelers, project teams, and families across India with trusted 3, 4 & 5-star hotels.",
  openGraph: {
    title: "BizStay | Corporate & Family Hotel Booking Across India",
    description:
      "Hotel booking partner for corporates and families across India. From 1 room to 500+ rooms in trusted 3, 4 & 5-star hotels.",
    url: "https://bizstay.example.com",
    siteName: "BizStay",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
          <Navbar />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
