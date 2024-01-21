import type { Metadata } from "next";

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import "./_scss/global.scss";

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "Space Tourism Website",
  description: "Challenged by Frontend Mentor",
};

const RootLayout = ({
  children
}: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout
