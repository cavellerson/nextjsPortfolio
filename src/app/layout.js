import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LabTabs from "./Components/navigation.js"

export const metadata = {
  title: "Cavell Wong - Portfolio",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> 
        <LabTabs/>
      </body>
    </html>
  );
}
