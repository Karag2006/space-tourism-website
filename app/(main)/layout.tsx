"use client"
import { usePathname } from "next/navigation";

import { Header } from "@/components/header/Header"
import { Footer } from "@/components/Footer"



interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({
  children
}: MainLayoutProps) => {
  const pathname = usePathname();
  

  const className = (path: string) => {
    if(path === "/") return "home"

    return path.substring(1);

  }

  const bodyClass = className(pathname);

  return (  
      <>
        <div className={`${bodyClass} main-container`}>
          <a className="skip-to-content" href="#main">Skip to content</a> 
          <Header />
          {children}
          <Footer />
        </div>
      </>
  )
}

export default MainLayout
