import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import { SelectedRentalProvider } from "../contexts/rental";

export const metadata = {
  title: "Moken",
  description: "Moken",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SelectedRentalProvider>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
            rel="stylesheet"
          />
          {children}
        </SelectedRentalProvider>
      </body>
    </html>
  );
}
