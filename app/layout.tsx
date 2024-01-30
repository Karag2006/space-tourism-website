import type { Metadata } from "next";

import "./global.scss"

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "Frontend Mentor | Space tourism website",
  description: "Challenged by Frontend Mentor",
};

const RootLayout = ({
  children
}: RootLayoutProps) => {

  
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}

export default RootLayout
