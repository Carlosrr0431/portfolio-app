import { Inter } from "next/font/google";
import "./globals.css";

import Layout from "./components/Layout.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <main className="w-full h-full">
          <Layout>{children}</Layout>
        </main>
      </body>
    </html>
  );
}
