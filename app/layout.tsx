import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Johnab Technologies Limited",
  description:
    "Corporate IT consulting, managed technology services, cybersecurity, cloud transformation, and digital systems delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
