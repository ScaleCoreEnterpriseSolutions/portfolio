import { ReactNode } from "react";
import Header from "./Header";
import Chatbot from "./Chatbot";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/20 touch-improvement">
      <Header />
      <main className="pt-14 sm:pt-16">{children}</main>
      <Chatbot />
    </div>
  );
};

export default Layout;
