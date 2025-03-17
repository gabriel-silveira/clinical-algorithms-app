import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.css";

const RobotoFont = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | PAHO',
    default: 'PAHO',
  },
  description: 'PAHO flowchart editor for clinical algorithms.',
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
    <body
      className={`${RobotoFont.variable} antialiased`}
    >
    {children}
    </body>
    </html>
  );
}
